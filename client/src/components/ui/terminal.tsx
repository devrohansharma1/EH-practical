import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TerminalProps {
  command: string;
  className?: string;
}

export function Terminal({ command, className }: TerminalProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={cn("relative group mb-4", className)}>
      <div className="bg-[#1e1e1e] rounded-lg p-4 text-gray-200 font-mono relative">
        <span className="text-green-500">$ </span>
        {command}
        <Button
          onClick={copyToClipboard}
          size="sm"
          variant="secondary"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
    </div>
  );
}

export default Terminal;
