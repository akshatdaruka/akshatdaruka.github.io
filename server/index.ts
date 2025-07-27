import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes.js";
import { log } from "./log.js";
import { serveStatic } from "./prod-server.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    log(`${req.method} ${req.originalUrl} ${res.statusCode} in ${Date.now() - start}ms`);
  });
  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  if (process.env.NODE_ENV === "development") {
    const { setupVite } = await import("./dev-server.js");
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = 5000;
  server.listen({ port, host: "0.0.0.0" }, () => {
    log(`serving on port ${port}`);
  });
})();
