import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = "plaintext", className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={cn("relative group code-block mb-4", className)}>
      <div className="syntax-highlight bg-[#1e1e1e] rounded-lg p-4 text-gray-200 overflow-x-auto">
        <pre className="text-sm font-mono whitespace-pre-wrap break-words">
          {code}
        </pre>
      </div>
      <Button
        onClick={copyToClipboard}
        size="sm"
        variant="secondary"
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? (
          <>
            <i className="ri-check-line mr-1"></i> Copied
          </>
        ) : (
          <>
            <i className="ri-file-copy-line mr-1"></i> Copy
          </>
        )}
      </Button>
    </div>
  );
}

export default CodeBlock;
