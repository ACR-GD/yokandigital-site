import { useState, useEffect } from "react";

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    const adminAuth = localStorage.getItem("adminAuthenticated");
    const loginTime = localStorage.getItem("adminLoginTime");
    
    if (adminAuth === "true" && loginTime) {
      // Check if login is still valid (24 hours)
      const loginDate = new Date(loginTime);
      const now = new Date();
      const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 3600);
      
      if (hoursDiff < 24) {
        setIsAuthenticated(true);
      } else {
        // Session expired, clear auth
        localStorage.removeItem("adminAuthenticated");
        localStorage.removeItem("adminLoginTime");
        setIsAuthenticated(false);
      }
    }
    
    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("adminAuthenticated");
    localStorage.removeItem("adminLoginTime");
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    isLoading,
    logout,
    checkAuthStatus
  };
}