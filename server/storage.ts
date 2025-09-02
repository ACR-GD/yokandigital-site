import { 
  users,
  contacts,
  consultations,
  seoAudits,
  speedTests,
  clients,
  reports,
  metrics,
  reportSchedules,
  type User, 
  type InsertUser, 
  type Contact, 
  type InsertContact,
  type Consultation,
  type InsertConsultation,
  type SeoAudit,
  type InsertSeoAudit,
  type SpeedTest,
  type InsertSpeedTest,
  type Client,
  type InsertClient,
  type Report,
  type InsertReport,
  type Metric,
  type InsertMetric,
  type ReportSchedule,
  type InsertReportSchedule
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  createSeoAudit(audit: InsertSeoAudit): Promise<SeoAudit>;
  createSpeedTest(test: InsertSpeedTest): Promise<SpeedTest>;
  getContacts(): Promise<Contact[]>;
  getConsultations(): Promise<Consultation[]>;
  
  // Client management
  createClient(client: InsertClient): Promise<Client>;
  getClient(id: string): Promise<Client | undefined>;
  getClients(): Promise<Client[]>;
  updateClient(id: string, updates: Partial<InsertClient>): Promise<Client>;
  
  // Report management
  createReport(report: InsertReport): Promise<Report>;
  getClientReports(clientId: string): Promise<Report[]>;
  
  // Metrics management
  addMetrics(metrics: InsertMetric[]): Promise<Metric[]>;
  getClientMetrics(clientId: string): Promise<Metric[]>;
  
  // Schedule management
  createReportSchedule(schedule: InsertReportSchedule): Promise<ReportSchedule>;
  getClientSchedules(clientId: string): Promise<ReportSchedule[]>;
  
  // Client deletion
  deleteClient(id: string): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const [consultation] = await db
      .insert(consultations)
      .values(insertConsultation)
      .returning();
    return consultation;
  }

  async createSeoAudit(insertAudit: InsertSeoAudit): Promise<SeoAudit> {
    // Simulate SEO audit results
    const results = {
      metaTags: Math.random() > 0.5 ? "good" : "needs_improvement",
      headings: Math.random() > 0.5 ? "good" : "needs_improvement", 
      images: Math.random() > 0.5 ? "good" : "needs_improvement",
      links: Math.random() > 0.5 ? "good" : "needs_improvement"
    };
    
    const score = Math.floor(Math.random() * 40 + 60).toString(); // 60-100 score
    
    const [audit] = await db
      .insert(seoAudits)
      .values({
        ...insertAudit,
        results,
        score
      })
      .returning();
    return audit;
  }

  async createSpeedTest(insertTest: InsertSpeedTest): Promise<SpeedTest> {
    // Simulate speed test results
    const loadTime = (Math.random() * 3 + 1).toFixed(2) + "s"; // 1-4 seconds
    const performanceScore = Math.floor(Math.random() * 40 + 60).toString(); // 60-100 score
    const recommendations = [
      "Optimize images",
      "Minify CSS and JavaScript", 
      "Enable compression",
      "Leverage browser caching"
    ];
    
    const [test] = await db
      .insert(speedTests)
      .values({
        ...insertTest,
        loadTime,
        performanceScore,
        recommendations
      })
      .returning();
    return test;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }

  async getConsultations(): Promise<Consultation[]> {
    return await db.select().from(consultations);
  }

  // Client management methods
  async createClient(insertClient: InsertClient): Promise<Client> {
    const [client] = await db
      .insert(clients)
      .values({
        ...insertClient,
        status: 'active',
        createdAt: new Date(),
        startDate: new Date(),
        nextReportDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
      })
      .returning();
    return client;
  }

  async getClient(id: string): Promise<Client | undefined> {
    const [client] = await db.select().from(clients).where(eq(clients.id, id));
    return client || undefined;
  }

  async getClients(): Promise<Client[]> {
    return await db.select().from(clients);
  }

  async updateClient(id: string, updates: Partial<InsertClient>): Promise<Client> {
    const [client] = await db
      .update(clients)
      .set(updates)
      .where(eq(clients.id, id))
      .returning();
    return client;
  }

  // Report management methods
  async createReport(insertReport: InsertReport): Promise<Report> {
    const [report] = await db
      .insert(reports)
      .values({
        ...insertReport,
        generatedAt: new Date(),
        emailSent: false
      })
      .returning();
    return report;
  }

  async getClientReports(clientId: string): Promise<Report[]> {
    return await db.select().from(reports).where(eq(reports.clientId, clientId));
  }

  // Metrics management methods
  async addMetrics(insertMetrics: InsertMetric[]): Promise<Metric[]> {
    const metricsWithTimestamp = insertMetrics.map(metric => ({
      ...metric,
      recordedAt: new Date()
    }));
    
    return await db
      .insert(metrics)
      .values(metricsWithTimestamp)
      .returning();
  }

  async getClientMetrics(clientId: string): Promise<Metric[]> {
    return await db.select().from(metrics).where(eq(metrics.clientId, clientId));
  }

  // Schedule management methods
  async createReportSchedule(insertSchedule: InsertReportSchedule): Promise<ReportSchedule> {
    const [schedule] = await db
      .insert(reportSchedules)
      .values({
        ...insertSchedule,
        createdAt: new Date(),
        nextRun: new Date() // This should be calculated properly based on frequency
      })
      .returning();
    return schedule;
  }

  async getClientSchedules(clientId: string): Promise<ReportSchedule[]> {
    return await db.select().from(reportSchedules).where(eq(reportSchedules.clientId, clientId));
  }

  // Client deletion method
  async deleteClient(id: string): Promise<boolean> {
    const result = await db.delete(clients).where(eq(clients.id, id));
    return result.rowCount > 0;
  }
}

export const storage = new DatabaseStorage();
