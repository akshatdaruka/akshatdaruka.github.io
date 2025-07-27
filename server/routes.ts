import { z } from 'zod';
import { insertContactSchema, contacts } from './shared/schema.js';
import { db } from './db.js';

export function registerRoutes(app) {
  app.post('/api/contact', async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const [newContact] = await db
        .insert(contacts)
        .values(contactData)
        .returning();
      
      console.log(`🔔 NEW CONTACT SAVED: ${newContact.name} (${newContact.email})`);

      res.json({
        success: true,
        message: 'Message sent successfully!',
        id: newContact.id,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: 'Invalid form data', errors: error.errors });
      }
      console.error('Contact form database error:', error);
      return res.status(500).json({ success: false, message: 'Failed to send message' });
    }
  });
  
  return app;
}
