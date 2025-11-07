import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";
import { 
  insertContactSchema, 
  insertConsultationSchema, 
  insertSeoAuditSchema,
  insertSpeedTestSchema
} from "@shared/schema";
import reportsRouter from "./routes/reports";
import blogRouter from "./routes/blog";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Register reporting routes
  app.use("/api/reports", reportsRouter);
  
  // Register blog routes
  app.use("/api/blog", blogRouter);
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Send email notification
      const emailSent = await sendContactEmail({
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        website: validatedData.website || undefined,
        noWebsite: validatedData.noWebsite || undefined,
        service: validatedData.service,
        projectDetails: validatedData.projectDetails || undefined
      });
      
      res.json({ 
        success: true, 
        contact, 
        emailSent 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(400).json({ 
        success: false, 
        error: "Invalid contact data provided" 
      });
    }
  });

  // Consultation booking
  app.post("/api/consultation", async (req, res) => {
    try {
      const validatedData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(validatedData);
      res.json({ success: true, consultation });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: "Invalid consultation data provided" 
      });
    }
  });

  // SEO Audit tool
  app.post("/api/seo-audit", async (req, res) => {
    try {
      const validatedData = insertSeoAuditSchema.parse(req.body);
      const audit = await storage.createSeoAudit(validatedData);
      res.json({ success: true, audit });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: "Invalid URL provided for SEO audit" 
      });
    }
  });

  // Speed Test tool
  app.post("/api/speed-test", async (req, res) => {
    try {
      const validatedData = insertSpeedTestSchema.parse(req.body);
      const test = await storage.createSpeedTest(validatedData);
      res.json({ success: true, test });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: "Invalid URL provided for speed test" 
      });
    }
  });

  // Get contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({ success: true, contacts });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Failed to retrieve contacts" 
      });
    }
  });

  // Get consultations (for admin purposes)  
  app.get("/api/consultations", async (req, res) => {
    try {
      const consultations = await storage.getConsultations();
      res.json({ success: true, consultations });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Failed to retrieve consultations" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
