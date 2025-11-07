import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  website: text("website"),
  noWebsite: boolean("no_website").default(false),
  service: text("service").notNull(),
  projectDetails: text("project_details"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const consultations = pgTable("consultations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  scheduledDate: timestamp("scheduled_date"),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const seoAudits = pgTable("seo_audits", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  url: text("url").notNull(),
  results: jsonb("results"),
  score: text("score"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const speedTests = pgTable("speed_tests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  url: text("url").notNull(),
  loadTime: text("load_time"),
  performanceScore: text("performance_score"),
  recommendations: jsonb("recommendations"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const clients = pgTable("clients", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  website: text("website"),
  businessType: text("business_type"),
  package: text("package"), // starter, business, enterprise
  monthlyFee: integer("monthly_fee"),
  status: text("status").default("active"), // active, inactive, suspended
  startDate: timestamp("start_date").defaultNow(),
  nextReportDate: timestamp("next_report_date"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const reports = pgTable("reports", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  clientId: varchar("client_id").notNull().references(() => clients.id),
  reportType: text("report_type").notNull(), // weekly, monthly, quarterly
  title: text("title").notNull(),
  generatedAt: timestamp("generated_at").defaultNow(),
  emailSent: boolean("email_sent").default(false),
  emailSentAt: timestamp("email_sent_at"),
  data: jsonb("data"), // Contains all the metrics and analytics data
});

export const metrics = pgTable("metrics", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  clientId: varchar("client_id").notNull().references(() => clients.id),
  metricType: text("metric_type").notNull(), // website_traffic, seo_rankings, social_engagement, conversion_rate
  metricName: text("metric_name").notNull(), // organic_traffic, page_views, bounce_rate, etc.
  value: text("value").notNull(), // Can be number, percentage, or text
  previousValue: text("previous_value"), // For comparison
  changePercentage: text("change_percentage"), // +25%, -10%, etc.
  recordedAt: timestamp("recorded_at").defaultNow(),
  source: text("source"), // google_analytics, search_console, facebook, etc.
});

export const reportSchedules = pgTable("report_schedules", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  clientId: varchar("client_id").notNull().references(() => clients.id),
  frequency: text("frequency").notNull(), // weekly, monthly, quarterly
  dayOfWeek: integer("day_of_week"), // 0-6 for weekly reports
  dayOfMonth: integer("day_of_month"), // 1-31 for monthly reports
  time: text("time").default("09:00"), // HH:MM format
  isActive: boolean("is_active").default(true),
  lastRun: timestamp("last_run"),
  nextRun: timestamp("next_run"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  featuredImage: text("featured_image"),
  publishDate: timestamp("publish_date").notNull(),
  readTime: text("read_time").notNull(),
  tags: text("tags").array().notNull(),
  author: text("author").notNull().default("Yokan Digital Team"),
  isPublished: boolean("is_published").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export const insertConsultationSchema = createInsertSchema(consultations).omit({
  id: true,
  createdAt: true,
  scheduledDate: true,
  status: true,
});

export const insertSeoAuditSchema = createInsertSchema(seoAudits).omit({
  id: true,
  createdAt: true,
  results: true,
  score: true,
});

export const insertSpeedTestSchema = createInsertSchema(speedTests).omit({
  id: true,
  createdAt: true,
  loadTime: true,
  performanceScore: true,
  recommendations: true,
});

export const insertClientSchema = createInsertSchema(clients).omit({
  id: true,
  createdAt: true,
  startDate: true,
});

export const insertReportSchema = createInsertSchema(reports).omit({
  id: true,
  generatedAt: true,
  emailSent: true,
  emailSentAt: true,
});

export const insertMetricSchema = createInsertSchema(metrics).omit({
  id: true,
  recordedAt: true,
});

export const insertReportScheduleSchema = createInsertSchema(reportSchedules).omit({
  id: true,
  createdAt: true,
  lastRun: true,
  nextRun: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertConsultation = z.infer<typeof insertConsultationSchema>;
export type Consultation = typeof consultations.$inferSelect;
export type InsertSeoAudit = z.infer<typeof insertSeoAuditSchema>;
export type SeoAudit = typeof seoAudits.$inferSelect;
export type InsertSpeedTest = z.infer<typeof insertSpeedTestSchema>;
export type SpeedTest = typeof speedTests.$inferSelect;
export type InsertClient = z.infer<typeof insertClientSchema>;
export type Client = typeof clients.$inferSelect;
export type InsertReport = z.infer<typeof insertReportSchema>;
export type Report = typeof reports.$inferSelect;
export type InsertMetric = z.infer<typeof insertMetricSchema>;
export type Metric = typeof metrics.$inferSelect;
export type InsertReportSchedule = z.infer<typeof insertReportScheduleSchema>;
export type ReportSchedule = typeof reportSchedules.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
