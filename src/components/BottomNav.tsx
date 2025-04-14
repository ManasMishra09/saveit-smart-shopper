
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, ShoppingCart, LineChart, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/search", label: "Search", icon: Search },
  { path: "/cart", label: "Compare", icon: ShoppingCart },
  { path: "/insights", label: "Insights", icon: LineChart },
  { path: "/settings", label: "Settings", icon: Settings },
];

const BottomNav: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-saveit-card-bg/90 backdrop-blur-md border-t border-white/10">
      <div className="grid grid-cols-5 py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link 
              to={item.path} 
              key={item.path}
              className="flex flex-col items-center justify-center"
            >
              <div 
                className={cn(
                  "p-2 rounded-full transition-all",
                  isActive 
                    ? "bg-gradient-to-r from-saveit-neon-green to-saveit-bright-blue text-saveit-dark-bg" 
                    : "text-gray-400"
                )}
              >
                <item.icon size={20} />
              </div>
              <span className={cn(
                "text-[10px] mt-1",
                isActive ? "text-white" : "text-gray-400"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
