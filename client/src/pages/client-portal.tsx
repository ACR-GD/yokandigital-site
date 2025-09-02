import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Globe,
  Search,
  MessageCircle,
  Download,
  Calendar,
  Eye,
  Mail,
  Phone
} from "lucide-react";
import Header from "@/components/header";
import { useQuery } from "@tanstack/react-query";

interface ClientData {
  id: string;
  name: string;
  email: string;
  website?: string;
  package: string;
  status: string;
}

interface Report {
  id: string;
  title: string;
  reportType: string;
  generatedAt: string;
  emailSent: boolean;
  data: {
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
      start: string;
      end: string;
    };
  };
}

export default function ClientPortal() {
  const [clientId, setClientId] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // For demo purposes, we'll use a simple client ID authentication
  // In production, this would be a proper auth system
  const authenticate = (id: string) => {
    if (id.length > 0) {
      setIsAuthenticated(true);
      setClientId(id);
    }
  };

  // Fetch client data
  const { data: clientData } = useQuery<{ success: boolean; client: ClientData }>({
    queryKey: ['/api/reports/clients', clientId],
    enabled: isAuthenticated && !!clientId
  });

  // Fetch client reports
  const { data: reportsData } = useQuery<{ success: boolean; reports: Report[] }>({
    queryKey: ['/api/reports/clients', clientId, 'reports'],
    enabled: isAuthenticated && !!clientId
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="max-w-md mx-auto px-4 py-32">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Client Portal Access</CardTitle>
              <CardDescription>
                Enter your Client ID to access your performance reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  placeholder="Enter your Client ID"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && authenticate(clientId)}
                />
                <Button 
                  className="w-full"
                  onClick={() => authenticate(clientId)}
                  disabled={!clientId}
                >
                  Access Reports
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  <p>Don't have your Client ID?</p>
                  <Button variant="link" className="p-0 h-auto">
                    Contact Support
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const client = clientData?.client;
  const reports = reportsData?.reports || [];
  const latestReport = reports[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Client Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Welcome back, {client?.name}
              </h1>
              <p className="text-muted-foreground">
                View your digital marketing performance and insights
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Badge variant="outline">{client?.package} Package</Badge>
                <Badge 
                  variant={client?.status === 'active' ? 'default' : 'secondary'}
                >
                  {client?.status}
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <Button variant="outline" className="mb-2">
                <Phone className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
              <p className="text-sm text-muted-foreground">
                {client?.website}
              </p>
            </div>
          </div>
        </div>

        {latestReport ? (
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="traffic">Traffic</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
              <TabsTrigger value="reports">All Reports</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Website Visitors</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {latestReport.data.metrics.websiteTraffic.totalVisitors.toLocaleString()}
                    </div>
                    <div className={`text-xs flex items-center ${
                      latestReport.data.metrics.websiteTraffic.changeFromPrevious.startsWith('+') 
                        ? 'text-green-600' 
                        : 'text-red-600'
                    }`}>
                      {latestReport.data.metrics.websiteTraffic.changeFromPrevious.startsWith('+') ? (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 mr-1" />
                      )}
                      {latestReport.data.metrics.websiteTraffic.changeFromPrevious}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">SEO Position</CardTitle>
                    <Search className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      #{latestReport.data.metrics.seoRankings.averagePosition}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Average ranking position
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Social Followers</CardTitle>
                    <MessageCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {latestReport.data.metrics.socialEngagement.totalFollowers.toLocaleString()}
                    </div>
                    <div className={`text-xs flex items-center ${
                      latestReport.data.metrics.socialEngagement.changeFromPrevious.startsWith('+') 
                        ? 'text-green-600' 
                        : 'text-red-600'
                    }`}>
                      {latestReport.data.metrics.socialEngagement.changeFromPrevious.startsWith('+') ? (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 mr-1" />
                      )}
                      {latestReport.data.metrics.socialEngagement.changeFromPrevious}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                    <Globe className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {latestReport.data.metrics.conversions.totalLeads}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Conversion Rate: {latestReport.data.metrics.conversions.conversionRate}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle>💡 Recommendations for Growth</CardTitle>
                  <CardDescription>
                    Our expert analysis suggests these improvements for your business
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {latestReport.data.recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Traffic Tab */}
            <TabsContent value="traffic" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Website Traffic Overview</CardTitle>
                    <CardDescription>
                      Traffic data for {new Date(latestReport.data.reportPeriod.start).toLocaleDateString()} - {new Date(latestReport.data.reportPeriod.end).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Total Visitors</span>
                      <span className="font-bold">
                        {latestReport.data.metrics.websiteTraffic.totalVisitors.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Organic Traffic</span>
                      <span className="font-bold">
                        {latestReport.data.metrics.websiteTraffic.organicTraffic.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Change from Previous</span>
                      <Badge 
                        variant={latestReport.data.metrics.websiteTraffic.changeFromPrevious.startsWith('+') ? 'default' : 'destructive'}
                      >
                        {latestReport.data.metrics.websiteTraffic.changeFromPrevious}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Traffic Sources</CardTitle>
                    <CardDescription>
                      How visitors find your website
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Organic Search</span>
                        <span className="font-bold">65%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Social Media</span>
                        <span className="font-bold">20%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Direct</span>
                        <span className="font-bold">10%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Other</span>
                        <span className="font-bold">5%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* SEO Tab */}
            <TabsContent value="seo" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>SEO Performance</CardTitle>
                    <CardDescription>
                      Your search engine optimization results
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Average Position</span>
                      <span className="font-bold">
                        #{latestReport.data.metrics.seoRankings.averagePosition}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Keywords Tracked</span>
                      <span className="font-bold">
                        {latestReport.data.metrics.seoRankings.keywordsTracked}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Position Change</span>
                      <Badge 
                        variant={latestReport.data.metrics.seoRankings.changeFromPrevious.startsWith('+') ? 'destructive' : 'default'}
                      >
                        {latestReport.data.metrics.seoRankings.changeFromPrevious}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Ranking Keywords</CardTitle>
                    <CardDescription>
                      Keywords where you rank in top positions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {latestReport.data.metrics.seoRankings.topRankings.map((keyword, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span>{keyword}</span>
                          <Badge variant="outline">Top 3</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* All Reports Tab */}
            <TabsContent value="reports" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Report History</CardTitle>
                  <CardDescription>
                    Download and view your previous performance reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reports.map((report) => (
                      <div 
                        key={report.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                            <BarChart3 className="h-5 w-5 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{report.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              Generated on {new Date(report.generatedAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">
                            {report.reportType}
                          </Badge>
                          {report.emailSent && (
                            <Badge variant="secondary">
                              <Mail className="h-3 w-3 mr-1" />
                              Emailed
                            </Badge>
                          )}
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Reports Available</h3>
              <p className="text-muted-foreground mb-6">
                Your first performance report will be generated within 24 hours of account setup.
              </p>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Demo Report
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}