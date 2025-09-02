import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock, User, Eye, EyeOff } from "lucide-react";
import Header from "@/components/header";
import { useLocation } from "wouter";

export default function AdminLogin() {
  const [, navigate] = useLocation();
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Simple admin credentials (in production, this would be handled by a proper auth system)
  const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "yokan2024"
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (
      credentials.username === ADMIN_CREDENTIALS.username &&
      credentials.password === ADMIN_CREDENTIALS.password
    ) {
      // Store authentication in localStorage
      localStorage.setItem("adminAuthenticated", "true");
      localStorage.setItem("adminLoginTime", new Date().toISOString());
      
      // Navigate to admin dashboard
      navigate("/admin");
    } else {
      setError("Invalid username or password");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    className="pl-10"
                    value={credentials.username}
                    onChange={(e) => setCredentials({
                      ...credentials,
                      username: e.target.value
                    })}
                    required
                    data-testid="input-username"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="pl-10 pr-10"
                    value={credentials.password}
                    onChange={(e) => setCredentials({
                      ...credentials,
                      password: e.target.value
                    })}
                    required
                    data-testid="input-password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={isLoading}
                data-testid="button-login"
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}