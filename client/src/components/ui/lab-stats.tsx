import { Clock, BarChart2, Wrench } from "lucide-react";

interface LabStatsProps {
  duration: string;
  difficulty: string;
  tools: string;
}

export function LabStats({ duration, difficulty, tools }: LabStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-dark-800 rounded-lg p-4 border border-border">
        <div className="flex items-center space-x-2 mb-2">
          <Clock className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-medium">Duration</h3>
        </div>
        <p className="text-sm text-muted-foreground">{duration}</p>
      </div>
      <div className="bg-dark-800 rounded-lg p-4 border border-border">
        <div className="flex items-center space-x-2 mb-2">
          <BarChart2 className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-medium">Difficulty</h3>
        </div>
        <p className="text-sm text-muted-foreground">{difficulty}</p>
      </div>
      <div className="bg-dark-800 rounded-lg p-4 border border-border">
        <div className="flex items-center space-x-2 mb-2">
          <Wrench className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-medium">Tools Required</h3>
        </div>
        <p className="text-sm text-muted-foreground">{tools}</p>
      </div>
    </div>
  );
}

export default LabStats;
