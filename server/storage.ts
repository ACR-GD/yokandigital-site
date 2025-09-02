import { 
  users,
  contacts,
  consultations,
  seoAudits,
  speedTests,
  type User, 
  type InsertUser, 
  type Contact, 
  type InsertContact,
  type Consultation,
  type InsertConsultation,
  type SeoAudit,
  type InsertSeoAudit,
  type SpeedTest,
  type InsertSpeedTest
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
}

export const storage = new DatabaseStorage();
