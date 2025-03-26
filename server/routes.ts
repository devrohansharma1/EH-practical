import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for lab content
  app.get("/api/labs", async (req, res) => {
    try {
      const labs = await storage.getAllLabs();
      res.json(labs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch labs" });
    }
  });

  app.get("/api/labs/:id", async (req, res) => {
    try {
      const lab = await storage.getLabById(req.params.id);
      if (!lab) {
        return res.status(404).json({ message: "Lab not found" });
      }
      res.json(lab);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch lab" });
    }
  });

  // API route for resources
  app.get("/api/resources", async (req, res) => {
    try {
      const resources = await storage.getAllResources();
      res.json(resources);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch resources" });
    }
  });

  // API route for lab feedback
  app.post("/api/feedback", async (req, res) => {
    try {
      const { labId, rating, comments } = req.body;
      if (!labId || !rating) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      const feedback = await storage.saveFeedback({ labId, rating, comments });
      res.status(201).json(feedback);
    } catch (error) {
      res.status(500).json({ message: "Failed to save feedback" });
    }
  });

  // Create the HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
