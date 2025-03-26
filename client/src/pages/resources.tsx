import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: "tool" | "script" | "document" | "template";
  fileSize: string;
  downloadUrl: string;
  icon: string;
}

const resources: Resource[] = [
  {
    id: "reconnaissance-tools",
    title: "Reconnaissance Tools Package",
    description: "A collection of command-line tools for reconnaissance including Whois clients, DNS lookup utilities, and web scraping tools.",
    type: "tool",
    fileSize: "15.2 MB",
    downloadUrl: "#",
    icon: "ri-spy-line"
  },
  {
    id: "cryptool-setup",
    title: "CrypTool Setup Guide",
    description: "Step-by-step installation guide for CrypTool with examples of encryption and decryption methods.",
    type: "document",
    fileSize: "3.5 MB",
    downloadUrl: "#",
    icon: "ri-lock-password-line"
  },
  {
    id: "keylogger-script",
    title: "Python Keylogger Script",
    description: "Educational keylogger script in Python with detailed code comments explaining how it works.",
    type: "script",
    fileSize: "1.2 MB",
    downloadUrl: "#",
    icon: "ri-keyboard-box-line"
  },
  {
    id: "network-scan-script",
    title: "Network Scanner Script",
    description: "CLI script to detect and profile wireless networks with comprehensive output formatting.",
    type: "script",
    fileSize: "2.8 MB",
    downloadUrl: "#",
    icon: "ri-wifi-line"
  },
  {
    id: "dos-batch",
    title: "DoS Attack Demonstration Batch File",
    description: "Educational batch script demonstrating DoS attack patterns for learning purposes.",
    type: "script",
    fileSize: "0.5 MB",
    downloadUrl: "#",
    icon: "ri-error-warning-line"
  },
  {
    id: "wireshark-filters",
    title: "Wireshark Filters Collection",
    description: "A comprehensive collection of Wireshark display filters for security analysis.",
    type: "document",
    fileSize: "1.7 MB",
    downloadUrl: "#",
    icon: "ri-radar-line"
  },
  {
    id: "dvwa-setup",
    title: "DVWA Setup Guide",
    description: "Instructions for setting up Damn Vulnerable Web App (DVWA) for XSS attack practice.",
    type: "document",
    fileSize: "4.2 MB",
    downloadUrl: "#",
    icon: "ri-code-box-line"
  },
  {
    id: "security-report-template",
    title: "Security Assessment Report Template",
    description: "Professional template for documenting security findings and vulnerabilities.",
    type: "template",
    fileSize: "2.1 MB",
    downloadUrl: "#",
    icon: "ri-file-text-line"
  }
];

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case "tool": return "bg-blue-500/10 text-blue-500";
      case "script": return "bg-green-500/10 text-green-500";
      case "document": return "bg-amber-500/10 text-amber-500";
      case "template": return "bg-purple-500/10 text-purple-500";
      default: return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <>
      <Header title="Resources" hasNotifications={false} />
      
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Resources & Downloads</h1>
          <p className="text-muted-foreground mb-6">
            Download tools, scripts, and documentation to support your ethical hacking lab work.
          </p>
          
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search resources by name, description, or type..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="border-border">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className={`p-2 rounded-md ${getTypeColor(resource.type)}`}>
                    <i className={`${resource.icon} text-lg`}></i>
                  </div>
                  <span className="text-xs uppercase font-semibold text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                    {resource.type}
                  </span>
                </div>
                <CardTitle className="mt-4">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-2 flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  <i className="ri-file-size-line mr-1"></i> {resource.fileSize}
                </div>
                <Button size="sm">
                  <i className="ri-download-line mr-2"></i>
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">No resources found</h3>
            <p className="text-muted-foreground">
              No resources match your search criteria. Try using different keywords.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
