import { Router } from "express";
import { z } from "zod";
import { db } from "../db";
import { clients, reports, metrics, reportSchedules, insertClientSchema, insertReportScheduleSchema, insertMetricSchema } from "@shared/schema";
import { eq, desc, and, gte, lte, count, sum } from "drizzle-orm";
import { reportGenerator } from "../services/reportGenerator";

const router = Router();

// Create a new client
router.post("/clients", async (req, res) => {
  try {
    const clientData = insertClientSchema.parse(req.body);
    
    const [newClient] = await db
      .insert(clients)
      .values({
        ...clientData,
        nextReportDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
      })
      .returning();

    res.json({ success: true, client: newClient });
  } catch (error) {
    console.error("Error creating client:", error);
    res.status(400).json({ success: false, error: "Failed to create client" });
  }
});

// Get all clients
router.get("/clients", async (req, res) => {
  try {
    const allClients = await db
      .select()
      .from(clients)
      .orderBy(desc(clients.createdAt));

    res.json({ success: true, clients: allClients });
  } catch (error) {
    console.error("Error fetching clients:", error);
    res.status(500).json({ success: false, error: "Failed to fetch clients" });
  }
});

// Get a specific client
router.get("/clients/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const [client] = await db
      .select()
      .from(clients)
      .where(eq(clients.id, id));

    if (!client) {
      return res.status(404).json({ success: false, error: "Client not found" });
    }

    res.json({ success: true, client });
  } catch (error) {
    console.error("Error fetching client:", error);
    res.status(500).json({ success: false, error: "Failed to fetch client" });
  }
});

// Update client
router.put("/clients/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = insertClientSchema.partial().parse(req.body);

    const [updatedClient] = await db
      .update(clients)
      .set(updates)
      .where(eq(clients.id, id))
      .returning();

    if (!updatedClient) {
      return res.status(404).json({ success: false, error: "Client not found" });
    }

    res.json({ success: true, client: updatedClient });
  } catch (error) {
    console.error("Error updating client:", error);
    res.status(400).json({ success: false, error: "Failed to update client" });
  }
});

// Generate report manually
router.post("/clients/:id/reports", async (req, res) => {
  try {
    const { id } = req.params;
    const { reportType } = req.body;

    const validTypes = ['weekly', 'monthly', 'quarterly'];
    if (!validTypes.includes(reportType)) {
      return res.status(400).json({ 
        success: false, 
        error: "Invalid report type. Must be weekly, monthly, or quarterly" 
      });
    }

    const reportData = await reportGenerator.generateReport(id, reportType);
    
    res.json({ success: true, report: reportData });
  } catch (error) {
    console.error("Error generating report:", error);
    res.status(500).json({ success: false, error: "Failed to generate report" });
  }
});

// Send report by email
router.post("/clients/:id/reports/send", async (req, res) => {
  try {
    const { id } = req.params;
    const { reportType } = req.body;

    const reportData = await reportGenerator.generateReport(id, reportType);
    const emailSent = await reportGenerator.sendReportByEmail(id, reportData);

    if (emailSent) {
      res.json({ success: true, message: "Report sent successfully" });
    } else {
      res.status(500).json({ success: false, error: "Failed to send report email" });
    }
  } catch (error) {
    console.error("Error sending report:", error);
    res.status(500).json({ success: false, error: "Failed to send report" });
  }
});

// Get client reports
router.get("/clients/:id/reports", async (req, res) => {
  try {
    const { id } = req.params;
    const { limit = 10, offset = 0 } = req.query;

    const clientReports = await db
      .select()
      .from(reports)
      .where(eq(reports.clientId, id))
      .orderBy(desc(reports.generatedAt))
      .limit(Number(limit))
      .offset(Number(offset));

    res.json({ success: true, reports: clientReports });
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ success: false, error: "Failed to fetch reports" });
  }
});

// Add metrics for a client
router.post("/clients/:id/metrics", async (req, res) => {
  try {
    const { id } = req.params;
    const metricsData = z.array(insertMetricSchema).parse(req.body);

    const newMetrics = await db
      .insert(metrics)
      .values(metricsData.map(metric => ({ ...metric, clientId: id })))
      .returning();

    res.json({ success: true, metrics: newMetrics });
  } catch (error) {
    console.error("Error adding metrics:", error);
    res.status(400).json({ success: false, error: "Failed to add metrics" });
  }
});

// Get client metrics
router.get("/clients/:id/metrics", async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      startDate, 
      endDate, 
      metricType, 
      limit = 100 
    } = req.query;

    let query = db
      .select()
      .from(metrics)
      .where(eq(metrics.clientId, id));

    const conditions = [eq(metrics.clientId, id)];
    
    // Add date filters if provided
    if (startDate) {
      conditions.push(gte(metrics.recordedAt, new Date(startDate as string)));
    }
    
    if (endDate) {
      conditions.push(lte(metrics.recordedAt, new Date(endDate as string)));
    }

    // Add metric type filter if provided
    if (metricType) {
      conditions.push(eq(metrics.metricType, metricType as string));
    }

    if (conditions.length > 1) {
      query = query.where(and(...conditions));
    }

    const clientMetrics = await query
      .orderBy(desc(metrics.recordedAt))
      .limit(Number(limit));

    res.json({ success: true, metrics: clientMetrics });
  } catch (error) {
    console.error("Error fetching metrics:", error);
    res.status(500).json({ success: false, error: "Failed to fetch metrics" });
  }
});

// Create report schedule
router.post("/clients/:id/schedules", async (req, res) => {
  try {
    const { id } = req.params;
    const scheduleData = insertReportScheduleSchema.parse(req.body);

    // Calculate next run time
    const nextRun = new Date();
    const [hours, minutes] = (scheduleData.time || "09:00").split(':');
    nextRun.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    // Adjust for frequency
    switch (scheduleData.frequency) {
      case 'weekly':
        if (scheduleData.dayOfWeek !== null && scheduleData.dayOfWeek !== undefined) {
          const daysToAdd = (scheduleData.dayOfWeek - nextRun.getDay() + 7) % 7;
          nextRun.setDate(nextRun.getDate() + daysToAdd);
        }
        break;
      case 'monthly':
        if (scheduleData.dayOfMonth) {
          nextRun.setDate(scheduleData.dayOfMonth);
          if (nextRun < new Date()) {
            nextRun.setMonth(nextRun.getMonth() + 1);
          }
        }
        break;
    }

    const [newSchedule] = await db
      .insert(reportSchedules)
      .values({
        ...scheduleData,
        clientId: id,
        nextRun
      })
      .returning();

    res.json({ success: true, schedule: newSchedule });
  } catch (error) {
    console.error("Error creating schedule:", error);
    res.status(400).json({ success: false, error: "Failed to create schedule" });
  }
});

// Get client schedules
router.get("/clients/:id/schedules", async (req, res) => {
  try {
    const { id } = req.params;

    const clientSchedules = await db
      .select()
      .from(reportSchedules)
      .where(eq(reportSchedules.clientId, id))
      .orderBy(desc(reportSchedules.createdAt));

    res.json({ success: true, schedules: clientSchedules });
  } catch (error) {
    console.error("Error fetching schedules:", error);
    res.status(500).json({ success: false, error: "Failed to fetch schedules" });
  }
});

// Update schedule
router.put("/schedules/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = insertReportScheduleSchema.partial().parse(req.body);

    const [updatedSchedule] = await db
      .update(reportSchedules)
      .set(updates)
      .where(eq(reportSchedules.id, id))
      .returning();

    if (!updatedSchedule) {
      return res.status(404).json({ success: false, error: "Schedule not found" });
    }

    res.json({ success: true, schedule: updatedSchedule });
  } catch (error) {
    console.error("Error updating schedule:", error);
    res.status(400).json({ success: false, error: "Failed to update schedule" });
  }
});

// Run scheduled reports manually
router.post("/reports/run-scheduled", async (req, res) => {
  try {
    await reportGenerator.scheduleReports();
    res.json({ success: true, message: "Scheduled reports processed" });
  } catch (error) {
    console.error("Error running scheduled reports:", error);
    res.status(500).json({ success: false, error: "Failed to run scheduled reports" });
  }
});

// Dashboard analytics
router.get("/analytics/dashboard", async (req, res) => {
  try {
    // Get total clients
    const totalClients = await db.select({ count: count() }).from(clients);
    
    // Get active clients
    const activeClients = await db
      .select({ count: count() })
      .from(clients)
      .where(eq(clients.status, 'active'));

    // Get reports sent this month
    const thisMonth = new Date();
    thisMonth.setDate(1);
    thisMonth.setHours(0, 0, 0, 0);
    
    const reportsThisMonth = await db
      .select({ count: count() })
      .from(reports)
      .where(gte(reports.generatedAt, thisMonth));

    // Get revenue (sum of monthly fees for active clients)
    const revenueQuery = await db
      .select({
        revenue: sum(clients.monthlyFee)
      })
      .from(clients)
      .where(eq(clients.status, 'active'));

    const analytics = {
      totalClients: totalClients[0]?.count || 0,
      activeClients: activeClients[0]?.count || 0,
      reportsThisMonth: reportsThisMonth[0]?.count || 0,
      monthlyRevenue: revenueQuery[0]?.revenue || 0
    };

    res.json({ success: true, analytics });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    res.status(500).json({ success: false, error: "Failed to fetch analytics" });
  }
});

export default router;