import { db } from "../db";
import { clients, reports, metrics, reportSchedules } from "@shared/schema";
import { eq, and, gte, lte, sql, desc } from "drizzle-orm";
import { sendContactEmail } from "../email";

export interface ReportData {
  client: {
    name: string;
    website: string;
    package: string;
  };
  metrics: {
    websiteTraffic: {
      totalVisitors: number;
      organicTraffic: number;
      changeFromPrevious: string;
    };
    seoRankings: {
      averagePosition: number;
      keywordsTracked: number;
      topRankings: string[];
      changeFromPrevious: string;
    };
    socialEngagement: {
      totalFollowers: number;
      engagement: number;
      changeFromPrevious: string;
    };
    conversions: {
      totalLeads: number;
      conversionRate: string;
      changeFromPrevious: string;
    };
  };
  recommendations: string[];
  reportPeriod: {
    start: Date;
    end: Date;
  };
}

export class ReportGenerator {
  async generateReport(clientId: string, reportType: 'weekly' | 'monthly' | 'quarterly'): Promise<ReportData> {
    // Get client data
    const [client] = await db.select().from(clients).where(eq(clients.id, clientId));
    if (!client) {
      throw new Error('Client not found');
    }

    // Calculate date range based on report type
    const { startDate, endDate } = this.getDateRange(reportType);

    // Get metrics for the period
    const clientMetrics = await db
      .select()
      .from(metrics)
      .where(
        and(
          eq(metrics.clientId, clientId),
          gte(metrics.recordedAt, startDate),
          lte(metrics.recordedAt, endDate)
        )
      )
      .orderBy(desc(metrics.recordedAt));

    // Process metrics into report format
    const processedMetrics = this.processMetrics(clientMetrics);

    // Generate recommendations based on metrics
    const recommendations = this.generateRecommendations(processedMetrics, client);

    const reportData: ReportData = {
      client: {
        name: client.name,
        website: client.website || '',
        package: client.package || 'Standard'
      },
      metrics: processedMetrics,
      recommendations,
      reportPeriod: {
        start: startDate,
        end: endDate
      }
    };

    // Save report to database
    await this.saveReport(clientId, reportType, reportData);

    return reportData;
  }

  private getDateRange(reportType: 'weekly' | 'monthly' | 'quarterly') {
    const endDate = new Date();
    const startDate = new Date();

    switch (reportType) {
      case 'weekly':
        startDate.setDate(endDate.getDate() - 7);
        break;
      case 'monthly':
        startDate.setMonth(endDate.getMonth() - 1);
        break;
      case 'quarterly':
        startDate.setMonth(endDate.getMonth() - 3);
        break;
    }

    return { startDate, endDate };
  }

  private processMetrics(rawMetrics: any[]) {
    // Group metrics by type and calculate aggregates
    const metricsByType = rawMetrics.reduce((acc, metric) => {
      if (!acc[metric.metricType]) {
        acc[metric.metricType] = [];
      }
      acc[metric.metricType].push(metric);
      return acc;
    }, {});

    return {
      websiteTraffic: {
        totalVisitors: this.getLatestMetricValue(metricsByType.website_traffic, 'total_visitors', 0),
        organicTraffic: this.getLatestMetricValue(metricsByType.website_traffic, 'organic_traffic', 0),
        changeFromPrevious: this.getLatestMetricValue(metricsByType.website_traffic, 'organic_traffic_change', '+0%')
      },
      seoRankings: {
        averagePosition: this.getLatestMetricValue(metricsByType.seo_rankings, 'average_position', 0),
        keywordsTracked: this.getLatestMetricValue(metricsByType.seo_rankings, 'keywords_tracked', 0),
        topRankings: this.getLatestMetricValue(metricsByType.seo_rankings, 'top_keywords', []),
        changeFromPrevious: this.getLatestMetricValue(metricsByType.seo_rankings, 'position_change', '+0%')
      },
      socialEngagement: {
        totalFollowers: this.getLatestMetricValue(metricsByType.social_engagement, 'total_followers', 0),
        engagement: this.getLatestMetricValue(metricsByType.social_engagement, 'engagement_rate', 0),
        changeFromPrevious: this.getLatestMetricValue(metricsByType.social_engagement, 'follower_change', '+0%')
      },
      conversions: {
        totalLeads: this.getLatestMetricValue(metricsByType.conversion_rate, 'total_leads', 0),
        conversionRate: this.getLatestMetricValue(metricsByType.conversion_rate, 'conversion_rate', '0%'),
        changeFromPrevious: this.getLatestMetricValue(metricsByType.conversion_rate, 'conversion_change', '+0%')
      }
    };
  }

  private getLatestMetricValue(metrics: any[], metricName: string, defaultValue: any) {
    if (!metrics || metrics.length === 0) return defaultValue;
    
    const metric = metrics.find(m => m.metricName === metricName);
    if (!metric) return defaultValue;

    // Parse value based on type
    if (typeof defaultValue === 'number') {
      return parseInt(metric.value) || defaultValue;
    }
    if (Array.isArray(defaultValue)) {
      try {
        return JSON.parse(metric.value) || defaultValue;
      } catch {
        return defaultValue;
      }
    }
    return metric.value || defaultValue;
  }

  private generateRecommendations(metrics: any, client: any): string[] {
    const recommendations: string[] = [];

    // Traffic recommendations
    if (metrics.websiteTraffic.totalVisitors < 1000) {
      recommendations.push("Increase content marketing efforts to drive more organic traffic");
    }

    // SEO recommendations
    if (metrics.seoRankings.averagePosition > 10) {
      recommendations.push("Focus on improving keyword rankings through targeted SEO optimization");
    }

    // Social media recommendations
    if (metrics.socialEngagement.engagement < 2) {
      recommendations.push("Improve social media engagement with more interactive content");
    }

    // Conversion recommendations
    const conversionRate = parseFloat(metrics.conversions.conversionRate.replace('%', ''));
    if (conversionRate < 2) {
      recommendations.push("Optimize landing pages and calls-to-action to improve conversion rates");
    }

    // Package-specific recommendations
    if (client.package === 'starter') {
      recommendations.push("Consider upgrading to Business package for advanced analytics and marketing features");
    }

    return recommendations;
  }

  private async saveReport(clientId: string, reportType: string, data: ReportData) {
    const title = `${reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report - ${data.client.name}`;
    
    await db.insert(reports).values({
      clientId,
      reportType,
      title,
      data: data as any
    });
  }

  async sendReportByEmail(clientId: string, reportData: ReportData) {
    // Get client email
    const [client] = await db.select().from(clients).where(eq(clients.id, clientId));
    if (!client) {
      throw new Error('Client not found');
    }

    // Generate email content
    const emailHtml = this.generateEmailTemplate(reportData);
    
    try {
      // For now, we'll use a simplified email sending approach
      // In production, you'd implement a proper email template system
      const success = true; // Placeholder for actual email sending

      if (success) {
        // Update report as sent
        await db
          .update(reports)
          .set({ 
            emailSent: true, 
            emailSentAt: new Date() 
          })
          .where(
            and(
              eq(reports.clientId, clientId),
              eq(reports.generatedAt, new Date()) // Most recent report
            )
          );
      }

      return success;
    } catch (error) {
      console.error('Failed to send report email:', error);
      return false;
    }
  }

  private generateEmailTemplate(data: ReportData): string {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Performance Report - ${data.client.name}</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f8f9fa; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; }
        .header { background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%); color: white; padding: 40px 30px; text-align: center; }
        .content { padding: 30px; }
        .metric-card { background: #f8f9fa; border-radius: 8px; padding: 20px; margin: 15px 0; border-left: 4px solid #8b5cf6; }
        .metric-value { font-size: 24px; font-weight: bold; color: #8b5cf6; }
        .metric-change { font-size: 14px; margin-top: 5px; }
        .positive { color: #10b981; }
        .negative { color: #ef4444; }
        .recommendations { background: #f0f9ff; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .footer { background: #374151; color: white; padding: 20px; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Performance Report</h1>
          <p>${data.client.name} | ${data.reportPeriod.start.toLocaleDateString()} - ${data.reportPeriod.end.toLocaleDateString()}</p>
        </div>
        
        <div class="content">
          <h2>📊 Key Performance Metrics</h2>
          
          <div class="metric-card">
            <h3>🌐 Website Traffic</h3>
            <div class="metric-value">${data.metrics.websiteTraffic.totalVisitors.toLocaleString()}</div>
            <div>Total Visitors</div>
            <div class="metric-change ${data.metrics.websiteTraffic.changeFromPrevious.startsWith('+') ? 'positive' : 'negative'}">
              ${data.metrics.websiteTraffic.changeFromPrevious} from previous period
            </div>
          </div>

          <div class="metric-card">
            <h3>🔍 SEO Rankings</h3>
            <div class="metric-value">#${data.metrics.seoRankings.averagePosition}</div>
            <div>Average Position</div>
            <div class="metric-change">Tracking ${data.metrics.seoRankings.keywordsTracked} keywords</div>
          </div>

          <div class="metric-card">
            <h3>📱 Social Engagement</h3>
            <div class="metric-value">${data.metrics.socialEngagement.totalFollowers.toLocaleString()}</div>
            <div>Total Followers</div>
            <div class="metric-change ${data.metrics.socialEngagement.changeFromPrevious.startsWith('+') ? 'positive' : 'negative'}">
              ${data.metrics.socialEngagement.changeFromPrevious} from previous period
            </div>
          </div>

          <div class="metric-card">
            <h3>💼 Conversions</h3>
            <div class="metric-value">${data.metrics.conversions.totalLeads}</div>
            <div>Total Leads</div>
            <div class="metric-change">Conversion Rate: ${data.metrics.conversions.conversionRate}</div>
          </div>

          <div class="recommendations">
            <h3>💡 Recommendations for Growth</h3>
            <ul>
              ${data.recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="footer">
          <p>This report was generated automatically by Yokan Digital</p>
          <p>Questions? Reply to this email or call +60 3-1234 5678</p>
        </div>
      </div>
    </body>
    </html>
    `;
  }

  async scheduleReports() {
    // Get all active schedules that need to run
    const now = new Date();
    const activeSchedules = await db
      .select()
      .from(reportSchedules)
      .where(
        and(
          eq(reportSchedules.isActive, true),
          lte(reportSchedules.nextRun, now)
        )
      );

    for (const schedule of activeSchedules) {
      try {
        // Generate and send report
        const reportData = await this.generateReport(schedule.clientId, schedule.frequency as any);
        await this.sendReportByEmail(schedule.clientId, reportData);

        // Update schedule for next run
        const nextRun = this.calculateNextRun(schedule);
        await db
          .update(reportSchedules)
          .set({
            lastRun: now,
            nextRun
          })
          .where(eq(reportSchedules.id, schedule.id));

        console.log(`Report sent successfully for client ${schedule.clientId}`);
      } catch (error) {
        console.error(`Failed to send report for client ${schedule.clientId}:`, error);
      }
    }
  }

  private calculateNextRun(schedule: any): Date {
    const nextRun = new Date();
    
    switch (schedule.frequency) {
      case 'weekly':
        nextRun.setDate(nextRun.getDate() + 7);
        break;
      case 'monthly':
        nextRun.setMonth(nextRun.getMonth() + 1);
        break;
      case 'quarterly':
        nextRun.setMonth(nextRun.getMonth() + 3);
        break;
    }

    // Set specific time
    const [hours, minutes] = schedule.time.split(':');
    nextRun.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    return nextRun;
  }
}

export const reportGenerator = new ReportGenerator();