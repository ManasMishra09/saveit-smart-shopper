
import React from "react";
import { Search, Mic } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-full">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <Search size={18} />
      </div>
      <Input 
        type="text" 
        placeholder="Search for items to compare..." 
        className="pl-10 pr-10 py-6 bg-saveit-card-bg border-white/10 text-white"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <Button variant="ghost" size="icon" className="text-saveit-bright-blue">
          <Mic size={18} />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
