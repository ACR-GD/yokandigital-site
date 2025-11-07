import { Router, Request } from "express";

const router = Router();

// Extend Express Request type to include session
interface SessionRequest extends Request {
  session?: {
    isAdmin?: boolean;
    username?: string;
  };
}

// Simple admin authentication (for development/testing)
// In production, this should use proper password hashing and session management
router.post("/admin/login", async (req: SessionRequest, res) => {
  try {
    const { username, password } = req.body;
    
    // Simple credential check (for development)
    if (username === "admin" && password === "admin123") {
      // Set session to indicate logged in
      if (!req.session) {
        req.session = {};
      }
      req.session.isAdmin = true;
      req.session.username = username;
      
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, error: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({ success: false, error: "Login failed" });
  }
});

// Check admin authentication status
router.get("/admin/check", async (req: SessionRequest, res) => {
  try {
    const isAdmin = req.session?.isAdmin === true;
    res.json({ success: true, isAuthenticated: isAdmin });
  } catch (error) {
    console.error("Error checking admin auth:", error);
    res.status(500).json({ success: false, error: "Failed to check authentication" });
  }
});

// Admin logout
router.post("/admin/logout", async (req: SessionRequest, res) => {
  try {
    if (req.session) {
      req.session.isAdmin = false;
      req.session.username = undefined;
    }
    res.json({ success: true, message: "Logout successful" });
  } catch (error) {
    console.error("Error during admin logout:", error);
    res.status(500).json({ success: false, error: "Logout failed" });
  }
});

export default router;
