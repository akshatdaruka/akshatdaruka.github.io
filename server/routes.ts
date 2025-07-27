// server/routes.ts
import { createServer } from 'http';
import { z } from 'zod';
import { insertContactSchema } from '@shared/schema';
import { db } from './db.js'; // Use our new database connection
import { contacts } from '@shared/schema'; // Import the contacts table schema

export async function registerRoutes(app) {
  // API Route to handle new contact form submissions
  app.post('/api/contact', async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);

      // Insert data into the database
      const [newContact] = await db
        .insert(contacts)
        .values(contactData)
        .returning();

      console.log('\n🔔 NEW CONTACT MESSAGE SAVED TO DATABASE:');
      console.log('────────────────────────────────────────────');
      console.log(`👤 From: ${newContact.name} (${newContact.email})`);
      console.log(`✉️ Subject: ${newContact.subject}`);
      console.log(`💬 Message: ${newContact.message}`);
      console.log(`⏰ Time: ${newContact.createdAt.toLocaleString()}`);
      console.log('────────────────────────────────────────────\n');

      res.json({
        success: true,
        message: 'Message sent successfully!',
        id: newContact.id,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: 'Invalid form data',
          errors: error.errors,
        });
      } else {
        console.error('Contact form database error:', error);
        res.status(500).json({
          success: false,
          message: 'Failed to send message',
        });
      }
    }
  });

  // You can add other API routes here in the future if needed

  const httpServer = createServer(app);
  return httpServer;
}
