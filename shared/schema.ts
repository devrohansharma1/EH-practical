import { pgTable, text, serial, integer, boolean, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Lab schema
export const labs = pgTable("labs", {
  id: varchar("id").primaryKey(),
  number: integer("number").notNull(),
  title: text("title").notNull(),
  shortTitle: text("short_title").notNull(),
  icon: text("icon").notNull(),
  duration: text("duration").notNull(),
  difficulty: text("difficulty").notNull(),
  tools: text("tools").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull() // JSON stringified content
});

export type Lab = typeof labs.$inferSelect;

// Resource schema
export const resources = pgTable("resources", {
  id: varchar("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(),
  fileSize: text("file_size").notNull(),
  downloadUrl: text("download_url").notNull(),
  icon: text("icon").notNull()
});

export type Resource = typeof resources.$inferSelect;

// Lab feedback schema
export const labFeedback = pgTable("lab_feedback", {
  id: serial("id").primaryKey(),
  labId: varchar("lab_id").notNull(),
  rating: integer("rating").notNull(),
  comments: text("comments")
});

export const insertLabFeedbackSchema = createInsertSchema(labFeedback).pick({
  labId: true,
  rating: true,
  comments: true
});

export type InsertLabFeedback = z.infer<typeof insertLabFeedbackSchema>;
export type LabFeedback = typeof labFeedback.$inferSelect;

// User schema (kept from original)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
