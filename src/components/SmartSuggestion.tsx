
import React from "react";
import { Lightbulb, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SmartSuggestionProps {
  title: string;
  description: string;
  type: 'tip' | 'alert' | 'info';
  className?: string;
}

const SmartSuggestion: React.FC<SmartSuggestionProps> = ({
  title,
  description,
  type,
  className
}) => {
  const typeStyles = {
    tip: "bg-gradient-to-r from-saveit-neon-green/20 to-saveit-bright-blue/20 border-saveit-neon-green/30",
    alert: "bg-red-500/20 border-red-500/30",
    info: "bg-saveit-accent-purple/20 border-saveit-accent-purple/30"
  };
  
  const iconColors = {
    tip: "text-saveit-neon-green",
    alert: "text-red-500",
    info: "text-saveit-accent-purple"
  };
  
  return (
    <Card className={cn(
      "border rounded-lg p-4",
      typeStyles[type],
      className
    )}>
      <div className="flex items-start">
        <div className={cn(
          "p-2 rounded-full",
          type === 'tip' ? "bg-saveit-neon-green/20" : 
          type === 'alert' ? "bg-red-500/20" : 
          "bg-saveit-accent-purple/20"
        )}>
          <Lightbulb size={20} className={iconColors[type]} />
        </div>
        
        <div className="ml-3 flex-1">
          <h3 className="font-medium text-white">{title}</h3>
          <p className="text-sm text-gray-300 mt-1">{description}</p>
        </div>
        
        <Button variant="ghost" size="sm" className="text-gray-400">
          <X size={18} />
        </Button>
      </div>
    </Card>
  );
};

export default SmartSuggestion;
