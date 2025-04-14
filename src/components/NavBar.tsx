
import React from "react";
import { Link } from "react-router-dom";
import SaveItLogo from "./SaveItLogo";
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-saveit-dark-bg/90 backdrop-blur-md border-b border-white/10 px-4 py-3">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <SaveItLogo size="sm" />
        </Link>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-saveit-accent-purple rounded-full text-[10px] flex items-center justify-center">
              3
            </span>
          </Button>
          
          <Button variant="ghost" size="icon" className="text-white">
            <User size={20} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
