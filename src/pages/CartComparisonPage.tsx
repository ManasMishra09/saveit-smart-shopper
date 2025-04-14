
import React, { useState } from "react";
import { ArrowDownUp, ShoppingCart, Plus, Minus, Trash2, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SmartSuggestion from "@/components/SmartSuggestion";

const platforms = [
  {
    id: "blinkit",
    name: "Blinkit",
    logo: "https://play-lh.googleusercontent.com/-yzJJR9Q0YxneFNF7LX7NzT09wtHgKp9femGCKt3Ffu3CqQPhBQe7z8jQQT_t7E5Ug=s96-rw",
    delivery: 35,
    minOrder: 150,
    eta: "10-15 min"
  },
  {
    id: "zepto",
    name: "Zepto",
    logo: "https://play-lh.googleusercontent.com/mKrI0y8S0v6X4weEj0z6xklKKCFw58m3J2jbX_S2EGLjYyx0jGx4LBNk0ssjOTW0iLc=w240-h480-rw",
    delivery: 25,
    minOrder: 199,
    eta: "8-13 min"
  },
  {
    id: "swiggy",
    name: "Swiggy",
    logo: "https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA=w240-h480-rw",
    delivery: 45,
    minOrder: 99,
    eta: "15-20 min"
  }
];

const initialCartItems = [
  {
    id: 1,
    name: "Organic Banana (6 pcs)",
    image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    quantity: 1,
    prices: {
      blinkit: 75,
      zepto: 82,
      swiggy: 95
    }
  },
  {
    id: 2,
    name: "Amul Butter (500g)",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    quantity: 1,
    prices: {
      blinkit: 255,
      zepto: 245,
      swiggy: 275
    }
  },
  {
    id: 3,
    name: "Brown Eggs (6 pcs)",
    image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    quantity: 2,
    prices: {
      blinkit: 85,
      zepto: 78,
      swiggy: 82
    }
  },
];

const CartComparisonPage: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  
  const updateItemQuantity = (id: number, type: 'increment' | 'decrement') => {
    setCartItems(prev => 
      prev.map(item => {
        if (item.id === id) {
          const newQuantity = type === 'increment' ? item.quantity + 1 : Math.max(1, item.quantity - 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };
  
  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  // Calculate totals for each platform
  const calculateTotals = () => {
    return platforms.map(platform => {
      const subtotal = cartItems.reduce((sum, item) => (
        sum + (item.prices[platform.id as keyof typeof item.prices] * item.quantity)
      ), 0);
      
      const delivery = subtotal >= platform.minOrder ? 0 : platform.delivery;
      const total = subtotal + delivery;
      
      return {
        ...platform,
        subtotal,
        delivery: delivery,
        total,
        belowMinimum: subtotal < platform.minOrder
      };
    }).sort((a, b) => a.total - b.total);
  };
  
  const platformTotals = calculateTotals();
  const bestPlatform = platformTotals[0];
  const worstPlatform = platformTotals[platformTotals.length - 1];
  const savings = worstPlatform.total - bestPlatform.total;
  
  // Find the best platform for each product
  const getBestPlatformForProduct = (prices: Record<string, number>) => {
    let bestPrice = Infinity;
    let bestPlatformId = "";
    
    Object.entries(prices).forEach(([platformId, price]) => {
      if (price < bestPrice) {
        bestPrice = price;
        bestPlatformId = platformId;
      }
    });
    
    return platforms.find(p => p.id === bestPlatformId);
  };
  
  return (
    <div className="pb-20 pt-16">
      <div className="px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-poppins font-bold flex items-center">
            <ShoppingCart className="mr-2 text-saveit-neon-green" size={24} />
            Cart Comparison
          </h1>
          <span className="bg-saveit-accent-purple/20 text-saveit-accent-purple px-2 py-1 rounded-md text-sm">
            {cartItems.length} items
          </span>
        </div>
        
        <div className="mt-6">
          <SmartSuggestion
            title="Best Value Alert!"
            description={`Order from ${bestPlatform.name} to save ₹${savings} compared to ${worstPlatform.name}.`}
            type="tip"
          />
        </div>
        
        <div className="mt-6">
          <Tabs defaultValue="comparison">
            <TabsList className="w-full grid grid-cols-2 bg-saveit-card-bg">
              <TabsTrigger value="comparison">Platform Comparison</TabsTrigger>
              <TabsTrigger value="items">Your Items</TabsTrigger>
            </TabsList>
            
            <TabsContent value="comparison" className="mt-4">
              <div className="space-y-4">
                {platformTotals.map((platform, index) => (
                  <Card 
                    key={platform.id}
                    className={`p-4 ${index === 0 ? 'bg-gradient-to-r from-saveit-neon-green/20 to-saveit-bright-blue/20 border-saveit-neon-green/30' : 'bg-saveit-card-bg'}`}
                  >
                    <div className="flex items-center">
                      <div className="platform-logo">
                        <img src={platform.logo} alt={platform.name} className="w-8 h-8 object-contain" />
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{platform.name}</span>
                          {index === 0 && (
                            <span className="text-xs bg-saveit-neon-green text-saveit-dark-bg px-2 py-0.5 rounded-full">
                              Best Value
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-400 flex items-center mt-1">
                          <span>Delivery: {platform.eta}</span>
                          {platform.belowMinimum && (
                            <span className="ml-2 text-yellow-400">
                              (₹{platform.minOrder - platform.subtotal} away from free delivery)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-white/10">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Subtotal:</span>
                        <span>₹{platform.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-gray-400">Delivery fee:</span>
                        <span className={platform.delivery === 0 ? "text-saveit-neon-green" : ""}>
                          {platform.delivery === 0 ? "FREE" : `₹${platform.delivery.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="flex justify-between font-medium mt-2 pt-2 border-t border-white/5">
                        <span>Total:</span>
                        <span className={index === 0 ? "text-saveit-neon-green text-lg" : ""}>
                          ₹{platform.total.toFixed(2)}
                        </span>
                      </div>
                      
                      {index === 0 && savings > 0 && (
                        <div className="mt-2 bg-saveit-neon-green/10 rounded-md p-2 flex items-center justify-between">
                          <span className="text-xs text-saveit-neon-green">You're saving</span>
                          <span className="font-medium text-saveit-neon-green">₹{savings.toFixed(2)}</span>
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      className={`w-full mt-4 ${index === 0 
                        ? "bg-gradient-to-r from-saveit-neon-green to-saveit-bright-blue text-saveit-dark-bg" 
                        : "bg-saveit-card-bg border border-white/20"}`}
                    >
                      {index === 0 ? "Order Here (Best Deal)" : "Order Here"}
                      <ExternalLink size={16} className="ml-2" />
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="items" className="mt-4">
              <div className="space-y-4">
                {cartItems.map((item) => {
                  const bestPlatform = getBestPlatformForProduct(item.prices);
                  
                  return (
                    <Card key={item.id} className="p-4 bg-saveit-card-bg">
                      <div className="flex">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-white/10">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="ml-3 flex-1">
                          <div className="flex items-start justify-between">
                            <span className="font-medium text-sm">{item.name}</span>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-6 w-6 text-gray-400"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                          
                          <div className="flex items-center mt-2">
                            <div className="flex items-center border border-white/20 rounded-lg overflow-hidden">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-7 w-7 rounded-none text-gray-400 hover:text-white"
                                onClick={() => updateItemQuantity(item.id, 'decrement')}
                              >
                                <Minus size={14} />
                              </Button>
                              
                              <span className="w-8 text-center text-sm">{item.quantity}</span>
                              
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-7 w-7 rounded-none text-gray-400 hover:text-white"
                                onClick={() => updateItemQuantity(item.id, 'increment')}
                              >
                                <Plus size={14} />
                              </Button>
                            </div>
                            
                            {bestPlatform && (
                              <div className="ml-3 flex items-center">
                                <span className="text-xs text-gray-400">Best price on:</span>
                                <div className="flex items-center ml-1">
                                  <img 
                                    src={bestPlatform.logo} 
                                    alt={bestPlatform.name}
                                    className="w-4 h-4 rounded-full"
                                  />
                                  <span className="ml-1 text-xs text-saveit-neon-green">
                                    ₹{item.prices[bestPlatform.id as keyof typeof item.prices]}
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          <div className="mt-2">
                            <Button variant="outline" size="sm" className="text-xs h-7 border-white/10">
                              <ArrowDownUp size={12} className="mr-1" /> Compare prices
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
                
                <div className="mt-4 flex justify-center">
                  <Button className="bg-saveit-card-bg border border-white/20 text-sm font-normal">
                    <Plus size={16} className="mr-1" /> Add more items
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CartComparisonPage;
