
import React, { useEffect, useState } from "react";
import SaveItLogo from "./SaveItLogo";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Trigger animation after a small delay
    const animationTimer = setTimeout(() => {
      setAnimate(true);
    }, 300);
    
    // Complete the splash screen after timeout
    const completionTimer = setTimeout(() => {
      onComplete();
    }, 2500);
    
    return () => {
      clearTimeout(animationTimer);
      clearTimeout(completionTimer);
    };
  }, [onComplete]);
  
  return (
    <div className="fixed inset-0 bg-saveit-dark-bg z-50 flex flex-col items-center justify-center">
      <div className={`transform transition-all duration-700 ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        <SaveItLogo size="xl" animated />
      </div>
      
      <div className={`mt-6 transition-all duration-700 delay-300 ${
        animate ? "opacity-100" : "opacity-0"
      }`}>
        <h2 className="text-xl font-poppins font-medium text-white">
          Compare Smart. <span className="text-saveit-neon-green">Save Big.</span>
        </h2>
      </div>
      
      <div className={`mt-12 transition-all duration-700 delay-500 ${
        animate ? "opacity-100" : "opacity-0"
      }`}>
        <div className="w-16 h-1 bg-gradient-to-r from-saveit-neon-green to-saveit-bright-blue rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default SplashScreen;
