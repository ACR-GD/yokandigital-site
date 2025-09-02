import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  FileText, 
  DollarSign, 
  TrendingUp, 
  Plus, 
  Send, 
  Calendar,
  BarChart3,
  Settings,
  Eye,
  LogOut
} from "lucide-react";
import Header from "@/components/header";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useLocation } from "wouter";

interface Client {
  id: string;
  name: string;
  email: string;
  website?: string;
  businessType?: string;
  package?: string;
  monthlyFee?: number;
  status: string;
  createdAt: string;
}

interface Analytics {
  totalClients: number;
  activeClients: number;
  reportsThisMonth: number;
  monthlyRevenue: number;
}

export default function AdminDashboard() {
  const [, navigate] = useLocation();
  const { isAuthenticated, isLoading, logout } = useAdminAuth();
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [newClient, setNewClient] = useState({
    name: "",
    email: "",
    website: "",
    businessType: "",
    package: "starter",
    monthlyFee: 2500
  });

  const queryClient = useQueryClient();

  // Fetch analytics (always call hooks in the same order)
  const { data: analytics } = useQuery<{ success: boolean; analytics: Analytics }>({
    queryKey: ['/api/reports/analytics/dashboard'],
    refetchInterval: 30000, // Refresh every 30 seconds
    enabled: isAuthenticated // Only fetch when authenticated
  });

  // Fetch clients (always call hooks in the same order)
  const { data: clientsData } = useQuery<{ success: boolean; clients: Client[] }>({
    queryKey: ['/api/reports/clients'],
    refetchInterval: 30000,
    enabled: isAuthenticated // Only fetch when authenticated
  });

  // Create client mutation
  const createClientMutation = useMutation({
    mutationFn: (clientData: typeof newClient) => 
      apiRequest('/api/reports/clients', 'POST', clientData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/reports/clients'] });
      queryClient.invalidateQueries({ queryKey: ['/api/reports/analytics/dashboard'] });
      setNewClient({
        name: "",
        email: "",
        website: "",
        businessType: "",
        package: "starter",
        monthlyFee: 2500
      });
      alert('Client created successfully!');
    },
    onError: (error) => {
      console.error('Error creating client:', error);
      alert('Failed to create client: ' + error.message);
    }
  });

  // Generate report mutation
  const generateReportMutation = useMutation({
    mutationFn: ({ clientId, reportType }: { clientId: string; reportType: string }) =>
      apiRequest(`/api/reports/clients/${clientId}/reports`, 'POST', { reportType }),
    onSuccess: () => {
      alert('Report generated successfully!');
    }
  });

  // Send report mutation
  const sendReportMutation = useMutation({
    mutationFn: ({ clientId, reportType }: { clientId: string; reportType: string }) =>
      apiRequest(`/api/reports/clients/${clientId}/reports/send`, 'POST', { reportType }),
    onSuccess: () => {
      alert('Report sent successfully!');
    }
  });

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/admin/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Don't render content if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  const handleCreateClient = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!newClient.name || !newClient.email) {
      alert('Please fill in all required fields (Name and Email)');
      return;
    }
    
    console.log('Submitting client data:', newClient);
    createClientMutation.mutate(newClient);
  };

  const handleGenerateReport = (reportType: string) => {
    if (!selectedClient) {
      alert('Please select a client first');
      return;
    }
    generateReportMutation.mutate({ clientId: selectedClient, reportType });
  };

  const handleSendReport = (reportType: string) => {
    if (!selectedClient) {
      alert('Please select a client first');
      return;
    }
    sendReportMutation.mutate({ clientId: selectedClient, reportType });
  };

  const clients = clientsData?.clients || [];
  const stats = analytics?.analytics || {
    totalClients: 0,
    activeClients: 0,
    reportsThisMonth: 0,
    monthlyRevenue: 0
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Reporting System Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage clients, generate reports, and track performance metrics
              </p>
            </div>
            <Button variant="outline" onClick={handleLogout} className="text-red-600 hover:text-red-700">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Analytics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalClients}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.activeClients}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reports This Month</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.reportsThisMonth}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">RM {stats.monthlyRevenue?.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="clients" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="clients">Client Management</TabsTrigger>
            <TabsTrigger value="reports">Report Generation</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Client Management Tab */}
          <TabsContent value="clients" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Add New Client */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    Add New Client
                  </CardTitle>
                  <CardDescription>
                    Register a new client for automated reporting
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleCreateClient} className="space-y-4">
                    <Input
                      placeholder="Client Name"
                      value={newClient.name}
                      onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={newClient.email}
                      onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="Website URL"
                      value={newClient.website}
                      onChange={(e) => setNewClient({ ...newClient, website: e.target.value })}
                    />
                    <Input
                      placeholder="Business Type"
                      value={newClient.businessType}
                      onChange={(e) => setNewClient({ ...newClient, businessType: e.target.value })}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={newClient.package}
                        onChange={(e) => setNewClient({ ...newClient, package: e.target.value })}
                      >
                        <option value="starter">Starter Package</option>
                        <option value="business">Business Package</option>
                        <option value="enterprise">Enterprise Package</option>
                      </select>
                      <Input
                        type="number"
                        placeholder="Monthly Fee (RM)"
                        value={newClient.monthlyFee}
                        onChange={(e) => setNewClient({ ...newClient, monthlyFee: parseInt(e.target.value) })}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={createClientMutation.isPending}
                    >
                      {createClientMutation.isPending ? 'Adding...' : 'Add Client'}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Client List */}
              <Card>
                <CardHeader>
                  <CardTitle>Current Clients</CardTitle>
                  <CardDescription>
                    {clients.length} clients registered
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {clients.map((client) => (
                      <div 
                        key={client.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                          selectedClient === client.id 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedClient(client.id)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{client.name}</h4>
                            <p className="text-sm text-muted-foreground">{client.email}</p>
                            {client.package && (
                              <Badge variant="outline" className="mt-1">
                                {client.package}
                              </Badge>
                            )}
                          </div>
                          <div className="text-right">
                            <Badge 
                              variant={client.status === 'active' ? 'default' : 'secondary'}
                            >
                              {client.status}
                            </Badge>
                            {client.monthlyFee && (
                              <p className="text-sm text-muted-foreground mt-1">
                                RM {client.monthlyFee.toLocaleString()}/mo
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Report Generation Tab */}
          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Generate & Send Reports
                </CardTitle>
                <CardDescription>
                  {selectedClient 
                    ? `Selected: ${clients.find(c => c.id === selectedClient)?.name}` 
                    : 'Select a client from the Client Management tab first'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Weekly Reports</h4>
                    <div className="space-y-2">
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleGenerateReport('weekly')}
                        disabled={!selectedClient || generateReportMutation.isPending}
                      >
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Generate Weekly
                      </Button>
                      <Button 
                        className="w-full"
                        onClick={() => handleSendReport('weekly')}
                        disabled={!selectedClient || sendReportMutation.isPending}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Weekly
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Monthly Reports</h4>
                    <div className="space-y-2">
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleGenerateReport('monthly')}
                        disabled={!selectedClient || generateReportMutation.isPending}
                      >
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Generate Monthly
                      </Button>
                      <Button 
                        className="w-full"
                        onClick={() => handleSendReport('monthly')}
                        disabled={!selectedClient || sendReportMutation.isPending}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Monthly
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Quarterly Reports</h4>
                    <div className="space-y-2">
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleGenerateReport('quarterly')}
                        disabled={!selectedClient || generateReportMutation.isPending}
                      >
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Generate Quarterly
                      </Button>
                      <Button 
                        className="w-full"
                        onClick={() => handleSendReport('quarterly')}
                        disabled={!selectedClient || sendReportMutation.isPending}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Quarterly
                      </Button>
                    </div>
                  </div>
                </div>

                {!selectedClient && (
                  <div className="mt-6 p-4 bg-muted rounded-lg text-center">
                    <p className="text-muted-foreground">
                      Please select a client from the Client Management tab to generate reports
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Total Clients</span>
                    <Badge variant="outline">{stats.totalClients}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Active Subscriptions</span>
                    <Badge variant="default">{stats.activeClients}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Monthly Revenue</span>
                    <Badge variant="secondary">RM {stats.monthlyRevenue?.toLocaleString()}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Reports Generated</span>
                    <Badge variant="outline">{stats.reportsThisMonth}</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    System Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Management
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="h-4 w-4 mr-2" />
                    View All Reports
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}