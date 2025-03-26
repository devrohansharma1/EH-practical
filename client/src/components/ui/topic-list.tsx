import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TopicListProps {
  topics: ReactNode[];
  className?: string;
}

export function TopicList({ topics, className }: TopicListProps) {
  return (
    <ul className={cn("pl-5 space-y-2", className)}>
      {topics.map((topic, index) => (
        <li key={index} className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary before:font-bold">
          {topic}
        </li>
      ))}
    </ul>
  );
}

export default TopicList;
