import { 
  Lab, 
  LabFeedback, 
  Resource, 
  InsertLabFeedback 
} from "@shared/schema";

export interface IStorage {
  getAllLabs(): Promise<Lab[]>;
  getLabById(id: string): Promise<Lab | undefined>;
  getAllResources(): Promise<Resource[]>;
  saveFeedback(feedback: InsertLabFeedback): Promise<LabFeedback>;
}

export class MemStorage implements IStorage {
  private labs: Map<string, Lab>;
  private resources: Resource[];
  private feedback: LabFeedback[];
  private currentFeedbackId: number;

  constructor() {
    this.labs = new Map();
    this.resources = [];
    this.feedback = [];
    this.currentFeedbackId = 1;

    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample labs would be initialized here
    // For now, they are stored client-side in lib/labs.ts
    
    // Sample resources
    this.resources = [
      {
        id: "reconnaissance-tools",
        title: "Reconnaissance Tools Package",
        description: "A collection of command-line tools for reconnaissance including Whois clients, DNS lookup utilities, and web scraping tools.",
        type: "tool",
        fileSize: "15.2 MB",
        downloadUrl: "/downloads/reconnaissance-tools.zip",
        icon: "ri-spy-line"
      },
      {
        id: "cryptool-setup",
        title: "CrypTool Setup Guide",
        description: "Step-by-step installation guide for CrypTool with examples of encryption and decryption methods.",
        type: "document",
        fileSize: "3.5 MB",
        downloadUrl: "/downloads/cryptool-setup.pdf",
        icon: "ri-lock-password-line"
      },
      {
        id: "keylogger-script",
        title: "Python Keylogger Script",
        description: "Educational keylogger script in Python with detailed code comments explaining how it works.",
        type: "script",
        fileSize: "1.2 MB",
        downloadUrl: "/downloads/keylogger-script.zip",
        icon: "ri-keyboard-box-line"
      }
    ];
  }

  async getAllLabs(): Promise<Lab[]> {
    // In a real implementation, this would fetch from a database
    // For now, we'll return an empty array as labs are stored client-side
    return Array.from(this.labs.values());
  }

  async getLabById(id: string): Promise<Lab | undefined> {
    return this.labs.get(id);
  }

  async getAllResources(): Promise<Resource[]> {
    return this.resources;
  }

  async saveFeedback(insertFeedback: InsertLabFeedback): Promise<LabFeedback> {
    const id = this.currentFeedbackId++;
    const feedback: LabFeedback = { ...insertFeedback, id };
    this.feedback.push(feedback);
    return feedback;
  }
}

export const storage = new MemStorage();
