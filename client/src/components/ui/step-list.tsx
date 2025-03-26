import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StepListProps {
  steps: {
    title: string;
    content: ReactNode;
    terminal?: string;
  }[];
  className?: string;
}

export function StepList({ steps, className }: StepListProps) {
  return (
    <ol className={cn("pl-0 space-y-4", className)}>
      {steps.map((step, index) => (
        <li key={index} className="counter-increment-step relative pl-10">
          <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">
            {index + 1}
          </div>
          <div>
            <p className="font-medium mb-1">{step.title}</p>
            <div className="text-muted-foreground text-sm">
              {step.content}
              {step.terminal && (
                <div className="mt-2 bg-[#1e1e1e] rounded-lg p-3 text-gray-200 font-mono">
                  <span className="text-green-500">$ </span>
                  {step.terminal}
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default StepList;
