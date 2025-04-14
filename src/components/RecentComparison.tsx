
import React from "react";
import { ArrowDown, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface RecentComparisonProps {
  title: string;
  image: string;
  bestPrice: {
    platform: string;
    platformIcon: string;
    price: number;
    discount?: number;
  };
  worstPrice: {
    platform: string;
    platformIcon: string;
    price: number;
  };
  className?: string;
}

const RecentComparison: React.FC<RecentComparisonProps> = ({
  title,
  image,
  bestPrice,
  worstPrice,
  className
}) => {
  const saving = worstPrice.price - bestPrice.price;
  const savingPercentage = Math.round((saving / worstPrice.price) * 100);
  
  return (
    <Card className={cn(
      "glass-card overflow-hidden",
      className
    )}>
      <div className="flex items-center p-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden bg-white/10">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="ml-3 flex-1">
          <h3 className="font-medium text-white text-sm">{title}</h3>
          
          <div className="flex items-center mt-1">
            <div className="flex items-center">
              <img 
                src={bestPrice.platformIcon} 
                alt={bestPrice.platform}
                className="w-5 h-5 rounded-full"
              />
              <span className="ml-1 text-saveit-neon-green font-medium text-sm">
                ₹{bestPrice.price}
              </span>
              {bestPrice.discount && (
                <span className="ml-1 text-[10px] text-saveit-neon-green">
                  (-{bestPrice.discount}%)
                </span>
              )}
            </div>
            
            <ArrowDown className="mx-2 text-gray-400" size={14} />
            
            <div className="flex items-center">
              <img 
                src={worstPrice.platformIcon} 
                alt={worstPrice.platform}
                className="w-5 h-5 rounded-full"
              />
              <span className="ml-1 text-gray-400 font-medium text-sm line-through">
                ₹{worstPrice.price}
              </span>
            </div>
          </div>
        </div>
        
        <div className="bg-saveit-accent-purple/20 px-2 py-1 rounded-lg flex items-center">
          <TrendingDown size={14} className="text-saveit-accent-purple" />
          <span className="ml-1 text-xs font-medium text-saveit-accent-purple">
            {savingPercentage}% off
          </span>
        </div>
      </div>
    </Card>
  );
};

export default RecentComparison;
