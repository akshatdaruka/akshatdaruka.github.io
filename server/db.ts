// server/db.ts
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from '../src/shared/schema.js';

// This checks if the DATABASE_URL is available in the environment secrets
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// This creates the database connection client using the general-purpose Neon driver
const sql = neon(process.env.DATABASE_URL);

// Use this object to send Drizzle queries to your DB, now with the correct driver
export const db = drizzle(sql, { schema });
