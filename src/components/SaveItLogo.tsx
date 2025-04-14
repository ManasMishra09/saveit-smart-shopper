
import React from "react";
import { cn } from "@/lib/utils";

interface SaveItLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  withText?: boolean;
  animated?: boolean;
}

const SaveItLogo: React.FC<SaveItLogoProps> = ({ 
  className, 
  size = "md", 
  withText = true,
  animated = false
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
    xl: "text-3xl"
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div 
        className={cn(
          "relative flex items-center justify-center rounded-full bg-gradient-to-r from-saveit-neon-green to-saveit-bright-blue",
          sizeClasses[size],
          animated && "animate-pulse-neon"
        )}
      >
        <div className="absolute inset-[2px] bg-saveit-dark-bg rounded-full flex items-center justify-center">
          <span className={cn("font-bold gradient-text", textSizeClasses[size])}>S</span>
        </div>
      </div>
      
      {withText && (
        <div className="font-poppins font-bold">
          <span className="gradient-text">SaveIt</span>
          <span className="text-white">.io</span>
        </div>
      )}
    </div>
  );
};

export default SaveItLogo;
