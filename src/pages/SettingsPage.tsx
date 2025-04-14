
import React from "react";
import { Settings, Bell, MapPin, ShoppingBag, CreditCard, HelpCircle, LogOut, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const SettingsPage: React.FC = () => {
  return (
    <div className="pb-20 pt-16">
      <div className="px-4 py-6">
        <h1 className="text-2xl font-poppins font-bold flex items-center">
          <Settings className="mr-2 text-saveit-bright-blue" size={24} />
          Settings
        </h1>
        <p className="text-gray-400 mt-1">Customize your app experience</p>
        
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-3">Account</h2>
          
          <Card className="bg-saveit-card-bg border-white/10 p-4">
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-full bg-saveit-accent-purple/20 flex items-center justify-center">
                <span className="text-xl font-medium text-saveit-accent-purple">JS</span>
              </div>
              
              <div className="ml-3">
                <h3 className="font-medium">John Smith</h3>
                <p className="text-xs text-gray-400">john.smith@example.com</p>
              </div>
              
              <Button variant="outline" size="sm" className="ml-auto border-white/10 text-xs">
                Edit
              </Button>
            </div>
          </Card>
        </div>
        
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-3">Notifications</h2>
          
          <Card className="bg-saveit-card-bg border-white/10 divide-y divide-white/5">
            <div className="p-4 flex items-center justify-between">
              <div className="flex-1">
                <Label htmlFor="price-alerts" className="font-medium">Price Alerts</Label>
                <p className="text-xs text-gray-400 mt-1">Get notifications when prices drop</p>
              </div>
              <Switch id="price-alerts" defaultChecked />
            </div>
            
            <div className="p-4 flex items-center justify-between">
              <div className="flex-1">
                <Label htmlFor="deal-notifications" className="font-medium">Deal Notifications</Label>
                <p className="text-xs text-gray-400 mt-1">Receive alerts about special offers</p>
              </div>
              <Switch id="deal-notifications" defaultChecked />
            </div>
            
            <div className="p-4 flex items-center justify-between">
              <div className="flex-1">
                <Label htmlFor="platform-updates" className="font-medium">Platform Updates</Label>
                <p className="text-xs text-gray-400 mt-1">Notifications about platform changes</p>
              </div>
              <Switch id="platform-updates" />
            </div>
          </Card>
        </div>
        
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-3">Platform Preferences</h2>
          
          <Card className="bg-saveit-card-bg border-white/10 p-4">
            <div className="space-y-4">
              <div>
                <Label className="text-gray-400 text-xs">Preferred Platforms</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  <div className="bg-saveit-card-bg/80 border border-white/10 rounded-lg px-3 py-2 flex items-center">
                    <img
                      src="https://play-lh.googleusercontent.com/-yzJJR9Q0YxneFNF7LX7NzT09wtHgKp9femGCKt3Ffu3CqQPhBQe7z8jQQT_t7E5Ug=s96-rw"
                      alt="Blinkit"
                      className="w-5 h-5 rounded-full mr-2"
                    />
                    <span className="text-sm">Blinkit</span>
                  </div>
                  
                  <div className="bg-saveit-card-bg/80 border border-white/10 rounded-lg px-3 py-2 flex items-center">
                    <img
                      src="https://play-lh.googleusercontent.com/mKrI0y8S0v6X4weEj0z6xklKKCFw58m3J2jbX_S2EGLjYyx0jGx4LBNk0ssjOTW0iLc=w240-h480-rw"
                      alt="Zepto"
                      className="w-5 h-5 rounded-full mr-2"
                    />
                    <span className="text-sm">Zepto</span>
                  </div>
                  
                  <div className="bg-saveit-card-bg/80 border border-white/10 rounded-lg px-3 py-2 flex items-center">
                    <img
                      src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA=w240-h480-rw"
                      alt="Swiggy"
                      className="w-5 h-5 rounded-full mr-2"
                    />
                    <span className="text-sm">Swiggy</span>
                  </div>
                  
                  <Button variant="outline" size="sm" className="border-dashed border-white/20 h-9">
                    + Add
                  </Button>
                </div>
              </div>
              
              <div>
                <Label htmlFor="autosave-mode" className="font-medium">AI Auto-Save Mode</Label>
                <p className="text-xs text-gray-400 mt-1">
                  Let AI automatically suggest the best platform for each purchase
                </p>
                <div className="mt-2">
                  <Switch id="autosave-mode" defaultChecked />
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-3">App Settings</h2>
          
          <Card className="bg-saveit-card-bg border-white/10 divide-y divide-white/5">
            <div className="p-4 flex items-center">
              <MapPin size={18} className="text-gray-400" />
              <span className="ml-3">Delivery Locations</span>
              <ChevronRight size={18} className="text-gray-400 ml-auto" />
            </div>
            
            <div className="p-4 flex items-center">
              <ShoppingBag size={18} className="text-gray-400" />
              <span className="ml-3">Shopping Preferences</span>
              <ChevronRight size={18} className="text-gray-400 ml-auto" />
            </div>
            
            <div className="p-4 flex items-center">
              <CreditCard size={18} className="text-gray-400" />
              <span className="ml-3">Payment Methods</span>
              <ChevronRight size={18} className="text-gray-400 ml-auto" />
            </div>
            
            <div className="p-4 flex items-center">
              <Bell size={18} className="text-gray-400" />
              <span className="ml-3">Notification Settings</span>
              <ChevronRight size={18} className="text-gray-400 ml-auto" />
            </div>
          </Card>
        </div>
        
        <div className="mt-8">
          <Card className="bg-saveit-card-bg border-white/10 divide-y divide-white/5">
            <div className="p-4 flex items-center">
              <HelpCircle size={18} className="text-gray-400" />
              <span className="ml-3">Help & Support</span>
              <ChevronRight size={18} className="text-gray-400 ml-auto" />
            </div>
            
            <div className="p-4 flex items-center">
              <LogOut size={18} className="text-red-500" />
              <span className="ml-3 text-red-500">Log Out</span>
            </div>
          </Card>
        </div>
        
        <Separator className="my-8 bg-white/10" />
        
        <div className="text-center">
          <p className="text-xs text-gray-400">SaveIt.io v1.0.0</p>
          <p className="text-xs text-gray-500 mt-1">© 2023 SaveIt Technologies</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
