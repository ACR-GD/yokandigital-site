import { 
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
import { randomUUID } from "crypto";

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

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private consultations: Map<string, Consultation>;
  private seoAudits: Map<string, SeoAudit>;
  private speedTests: Map<string, SpeedTest>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.consultations = new Map();
    this.seoAudits = new Map();
    this.speedTests = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const id = randomUUID();
    const consultation: Consultation = { 
      ...insertConsultation, 
      id, 
      scheduledDate: null,
      status: "pending",
      createdAt: new Date() 
    };
    this.consultations.set(id, consultation);
    return consultation;
  }

  async createSeoAudit(insertAudit: InsertSeoAudit): Promise<SeoAudit> {
    const id = randomUUID();
    
    // Simulate SEO audit results
    const results = {
      metaTags: Math.random() > 0.5 ? "good" : "needs_improvement",
      headings: Math.random() > 0.5 ? "good" : "needs_improvement", 
      images: Math.random() > 0.5 ? "good" : "needs_improvement",
      links: Math.random() > 0.5 ? "good" : "needs_improvement"
    };
    
    const score = Math.floor(Math.random() * 40 + 60).toString(); // 60-100 score
    
    const audit: SeoAudit = { 
      ...insertAudit, 
      id, 
      results,
      score,
      createdAt: new Date() 
    };
    this.seoAudits.set(id, audit);
    return audit;
  }

  async createSpeedTest(insertTest: InsertSpeedTest): Promise<SpeedTest> {
    const id = randomUUID();
    
    // Simulate speed test results
    const loadTime = (Math.random() * 3 + 1).toFixed(2) + "s"; // 1-4 seconds
    const performanceScore = Math.floor(Math.random() * 40 + 60).toString(); // 60-100 score
    const recommendations = [
      "Optimize images",
      "Minify CSS and JavaScript", 
      "Enable compression",
      "Leverage browser caching"
    ];
    
    const test: SpeedTest = { 
      ...insertTest, 
      id, 
      loadTime,
      performanceScore,
      recommendations,
      createdAt: new Date() 
    };
    this.speedTests.set(id, test);
    return test;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async getConsultations(): Promise<Consultation[]> {
    return Array.from(this.consultations.values());
  }
}

export const storage = new MemStorage();
