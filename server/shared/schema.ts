import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contacts, {
  // Add validation rules here
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name cannot be longer than 100 characters." }),
  
  email: z.string()
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email cannot be longer than 100 characters." }),
    
  subject: z.string()
    .min(5, { message: "Subject must be at least 5 characters." })
    .max(300, { message: "Subject cannot be longer than 300 characters." }),
    
  message: z.string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(5000, { message: "Message cannot be longer than 5000 characters." }),

}).omit({
  id: true,
  createdAt: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
