import express from 'express';
import { registerRoutes } from './routes.js';
import { serveStatic } from './prod-server.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

registerRoutes(app);

serveStatic(app);

export default app;
