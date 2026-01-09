import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // Use a fallback to current directory if __dirname is not available (CJS vs ESM)
  const rootDir = process.cwd();
  const distPath = path.resolve(rootDir, "dist");
  
  if (!fs.existsSync(distPath)) {
    console.error(`Could not find the build directory: ${distPath}`);
  }

  app.use(express.static(distPath));

  app.use("*", (_req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send("Not Found");
    }
  });
}
