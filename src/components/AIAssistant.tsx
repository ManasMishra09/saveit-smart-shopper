
import React, { useState } from "react";
import { Bot, X, Maximize2, Minimize2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState("");
  
  const toggleOpen = () => {
    if (isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(!isOpen);
    }
  };
  
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  
  const messages = [
    { 
      type: 'assistant', 
      content: "Hi there! I'm your SaveIt assistant. How can I help you compare and save today?" 
    },
    { 
      type: 'user', 
      content: "I want to buy groceries" 
    },
    { 
      type: 'assistant', 
      content: "Great! I can help you compare grocery prices across platforms. What items are you looking for?" 
    }
  ];
  
  return (
    <div className="fixed right-4 bottom-20 z-40">
      {isOpen && (
        <div className={cn(
          "bg-saveit-card-bg rounded-lg shadow-lg overflow-hidden w-[320px] transition-all duration-300",
          isMinimized ? "h-12" : "h-[400px]"
        )}>
          <div className="bg-gradient-to-r from-saveit-neon-green to-saveit-bright-blue p-3 flex items-center justify-between">
            <div className="flex items-center">
              <Bot size={18} className="text-saveit-dark-bg" />
              <span className="ml-2 font-medium text-saveit-dark-bg">SaveIt Assistant</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 text-saveit-dark-bg hover:text-saveit-dark-bg/80" 
                onClick={toggleMinimize}
              >
                {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 text-saveit-dark-bg hover:text-saveit-dark-bg/80" 
                onClick={toggleOpen}
              >
                <X size={14} />
              </Button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              <div className="p-4 h-[300px] overflow-y-auto flex flex-col gap-3">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "max-w-[80%] p-3 rounded-lg",
                      message.type === 'assistant' 
                        ? "bg-saveit-card-bg border border-white/10 self-start animate-slide-up" 
                        : "bg-saveit-accent-purple self-end"
                    )}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                ))}
              </div>
              
              <div className="p-3 border-t border-white/10 flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="bg-saveit-dark-bg border-white/10"
                />
                
                <Button className="bg-gradient-to-r from-saveit-neon-green to-saveit-bright-blue text-saveit-dark-bg">
                  <Send size={16} />
                </Button>
              </div>
            </>
          )}
        </div>
      )}
      
      <Button 
        onClick={toggleOpen}
        className={cn(
          "rounded-full h-14 w-14 shadow-lg transition-transform hover:scale-105",
          !isOpen && "bg-gradient-to-r from-saveit-neon-green to-saveit-bright-blue text-saveit-dark-bg"
        )}
      >
        <Bot size={24} />
      </Button>
    </div>
  );
};

export default AIAssistant;
