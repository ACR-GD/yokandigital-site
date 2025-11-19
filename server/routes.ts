import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";
import { MailService } from '@sendgrid/mail';
import { readFileSync } from "fs";
import { join } from "path";
import { 
  insertContactSchema, 
  insertConsultationSchema, 
  insertSeoAuditSchema,
  insertSpeedTestSchema,
  newsletterSubscriptionSchema
} from "@shared/schema";
import reportsRouter from "./routes/reports";
import blogRouter from "./routes/blog";
import authRouter from "./routes/auth";
import chatRouter from "./routes/chat";

const sgMail = new MailService();
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Register auth routes
  app.use("/api", authRouter);
  
  // Register reporting routes
  app.use("/api/reports", reportsRouter);
  
  // Register blog routes
  app.use("/api/blog", blogRouter);
  
  // Register chat routes
  app.use("/api/chat", chatRouter);
  
  // Quick contact form (simplified)
  app.post("/api/quick-contact", async (req, res) => {
    try {
      const { name, contact, message } = req.body;
      
      // Send email notification
      const mailService = sgMail;
      await mailService.send({
        to: 'hello@yokandigital.com',
        from: 'hello@yokandigital.com',
        subject: `Quick Contact from ${name}`,
        text: `Name: ${name}\nContact: ${contact}\nMessage: ${message || 'No message provided'}`,
        html: `
          <h2>Quick Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Contact:</strong> ${contact}</p>
          <p><strong>Message:</strong> ${message || 'No message provided'}</p>
        `
      });
      
      res.json({ success: true });
    } catch (error) {
      console.error('Quick contact error:', error);
      res.status(400).json({ 
        success: false, 
        error: "Failed to send message" 
      });
    }
  });

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

  // Newsletter subscription
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = newsletterSubscriptionSchema.parse(req.body);
      const apiToken = process.env.MAILERLITE_API_TOKEN;

      if (!apiToken) {
        console.error('MailerLite API token not configured');
        return res.status(500).json({ 
          success: false, 
          error: "Newsletter service not configured" 
        });
      }

      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: validatedData.email,
          ...(validatedData.name && {
            fields: {
              name: validatedData.name
            }
          })
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('MailerLite API error:', errorData);
        return res.status(response.status).json({ 
          success: false, 
          error: "Failed to subscribe to newsletter" 
        });
      }

      const data = await response.json();

      // Send welcome email with ebook
      try {
        const ebookPath = join(process.cwd(), 'attached_assets', 'yokan-digital-marketing-guide.pdf');
        const ebookContent = readFileSync(ebookPath);
        const ebookBase64 = ebookContent.toString('base64');

        await sgMail.send({
          to: validatedData.email,
          from: 'hello@yokandigital.com',
          subject: 'Welcome to Yokan Digital - Your Free Marketing Guide Inside! 🎁',
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                .button { display: inline-block; background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
                .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🎉 Welcome to Yokan Digital!</h1>
                  <p style="font-size: 18px; margin: 10px 0 0 0;">Your Free Digital Marketing Guide is Attached</p>
                </div>
                <div class="content">
                  <p>Hi ${validatedData.name || 'there'},</p>
                  
                  <p>Thank you for subscribing to our newsletter! We're excited to have you join our community of forward-thinking business owners in Malaysia.</p>
                  
                  <p><strong>As promised, here's your FREE ebook:</strong></p>
                  <p style="background: white; padding: 15px; border-left: 4px solid #9333ea; margin: 20px 0;">
                    📘 <strong>"Your Guide to Digital Marketing in Labuan"</strong><br>
                    <span style="color: #6b7280;">A comprehensive guide covering SEO, social media, paid advertising, email marketing, and web design strategies for Malaysian businesses.</span>
                  </p>
                  
                  <p>In this guide, you'll discover:</p>
                  <ul>
                    <li>How to dominate local search results in Malaysia</li>
                    <li>Social media strategies that actually work</li>
                    <li>Paid advertising tactics for maximum ROI</li>
                    <li>Email marketing best practices</li>
                    <li>And much more!</li>
                  </ul>
                  
                  <p><strong>🎁 SPECIAL OFFER FOR LABUAN BUSINESSES:</strong></p>
                  <p style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 15px; border-radius: 5px; margin: 20px 0;">
                    If you're a Labuan business without a website, we're offering a <strong>FREE custom website + AI chatbot</strong> (worth RM5,000+) until December 31, 2025. No strings attached!
                  </p>
                  
                  <p>Ready to transform your digital presence?</p>
                  <a href="https://yokandigital.com/labuan-digital-marketing" class="button">Learn More About Our Free Offer</a>
                  
                  <p>Have questions? Just reply to this email - we'd love to hear from you!</p>
                  
                  <p>Best regards,<br>
                  <strong>The Yokan Digital Team</strong><br>
                  <em>Alone we go faster, together we go further</em></p>
                </div>
                <div class="footer">
                  <p>Yokan Digital - Malaysian Web Design & SEO Agency<br>
                  📧 hello@yokandigital.com | 📱 WhatsApp: +601139765116</p>
                  <p style="font-size: 12px; margin-top: 20px;">
                    You're receiving this email because you subscribed to our newsletter at yokandigital.com
                  </p>
                </div>
              </div>
            </body>
            </html>
          `,
          attachments: [
            {
              content: ebookBase64,
              filename: 'Yokan-Digital-Marketing-Guide.pdf',
              type: 'application/pdf',
              disposition: 'attachment'
            }
          ]
        });
      } catch (emailError) {
        console.error('Failed to send welcome email:', emailError);
        // Don't fail the subscription if email fails
      }

      res.json({ 
        success: true, 
        message: "Successfully subscribed to newsletter",
        subscriber: data.data 
      });
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      res.status(400).json({ 
        success: false, 
        error: "Invalid subscription data provided" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
