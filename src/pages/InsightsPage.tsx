
import React from "react";
import { LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from "recharts";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ChevronRight, TrendingUp } from "lucide-react";
import SmartSuggestion from "@/components/SmartSuggestion";

// Mock data for price history
const priceHistoryData = [
  { date: "Jan", blinkit: 82, zepto: 78, swiggy: 90 },
  { date: "Feb", blinkit: 85, zepto: 80, swiggy: 88 },
  { date: "Mar", blinkit: 79, zepto: 77, swiggy: 85 },
  { date: "Apr", blinkit: 76, zepto: 75, swiggy: 82 },
  { date: "May", blinkit: 78, zepto: 77, swiggy: 83 },
  { date: "Jun", blinkit: 75, zepto: 73, swiggy: 80 },
];

// Mock data for spending by platform
const platformSpendingData = [
  { name: "Blinkit", spending: 3245, color: "#1EE2C7" },
  { name: "Zepto", spending: 2850, color: "#8B5CF6" },
  { name: "Swiggy", spending: 1520, color: "#FFA500" },
];

// Mock data for frequently purchased items
const frequentItems = [
  { name: "Milk", count: 12, avgPrice: 68, bestPlatform: "Blinkit" },
  { name: "Bread", count: 8, avgPrice: 45, bestPlatform: "Zepto" },
  { name: "Eggs", count: 6, avgPrice: 82, bestPlatform: "Blinkit" },
  { name: "Coffee", count: 4, avgPrice: 375, bestPlatform: "Swiggy" },
];

const InsightsPage: React.FC = () => {
  return (
    <div className="pb-20 pt-16">
      <div className="px-4 py-6">
        <h1 className="text-2xl font-poppins font-bold">
          <span className="gradient-text">Price</span> Insights
        </h1>
        <p className="text-gray-400 mt-1">Track prices & analyze your spending</p>
        
        <div className="mt-6">
          <SmartSuggestion
            title="Smart Insight"
            description="Milk prices have dropped 8% on Zepto compared to last month. Consider stocking up now."
            type="info"
          />
        </div>
        
        <div className="mt-6">
          <Card className="p-4 bg-saveit-card-bg">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Price History</h3>
              <Badge className="bg-saveit-neon-green/20 text-saveit-neon-green hover:bg-saveit-neon-green/30">
                Last 6 Months
              </Badge>
            </div>
            
            <div className="mt-3 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={priceHistoryData}
                  margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#808080" 
                    tick={{fill: '#808080'}}
                  />
                  <YAxis 
                    stroke="#808080" 
                    tick={{fill: '#808080'}}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1E1E1E', 
                      border: 'none',
                      borderRadius: '8px',
                      color: 'white'
                    }} 
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="blinkit" 
                    stroke="#1EE2C7" 
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="zepto" 
                    stroke="#8B5CF6" 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="swiggy" 
                    stroke="#FFA500" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-3 flex items-center justify-between text-sm">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-[#1EE2C7] mr-1"></div>
                  <span className="text-gray-400">Blinkit</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-[#8B5CF6] mr-1"></div>
                  <span className="text-gray-400">Zepto</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-[#FFA500] mr-1"></div>
                  <span className="text-gray-400">Swiggy</span>
                </div>
              </div>
              <span className="text-xs text-saveit-neon-green">
                <ArrowDown size={12} className="inline mr-1" />
                8% avg. price decrease
              </span>
            </div>
          </Card>
        </div>
        
        <div className="mt-6">
          <Card className="p-4 bg-saveit-card-bg">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Your Spending by Platform</h3>
              <Badge className="bg-saveit-bright-blue/20 text-saveit-bright-blue hover:bg-saveit-bright-blue/30">
                This Month
              </Badge>
            </div>
            
            <div className="mt-3 h-52">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={platformSpendingData}
                  margin={{
                    top: 20,
                    right: 10,
                    bottom: 20,
                    left: 10,
                  }}
                >
                  <CartesianGrid stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="name" 
                    scale="band" 
                    stroke="#808080" 
                    tick={{fill: '#808080'}}
                  />
                  <YAxis 
                    stroke="#808080" 
                    tick={{fill: '#808080'}}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1E1E1E', 
                      border: 'none',
                      borderRadius: '8px',
                      color: 'white'
                    }} 
                  />
                  <Bar 
                    dataKey="spending" 
                    barSize={40} 
                    fill="url(#colorGradient)"
                    radius={[4, 4, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#39FF14" stopOpacity={0.8}/>
                      <stop offset="100%" stopColor="#00FFFF" stopOpacity={0.5}/>
                    </linearGradient>
                  </defs>
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-3 text-sm text-gray-400">
              <p>Total spending: <span className="text-white font-medium">₹7,615</span></p>
              <p>Savings vs. market average: <span className="text-saveit-neon-green font-medium">₹1,243 (16%)</span></p>
            </div>
          </Card>
        </div>
        
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Frequently Purchased</h3>
            <span className="text-xs text-gray-400">Last 3 months</span>
          </div>
          
          <div className="mt-3 space-y-3">
            {frequentItems.map((item, index) => (
              <Card key={index} className="p-3 bg-saveit-card-bg flex items-center justify-between">
                <div>
                  <div className="flex items-center">
                    <span className="font-medium">{item.name}</span>
                    <Badge className="ml-2 bg-saveit-accent-purple/20 text-saveit-accent-purple text-xs">
                      {item.count}x
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    Avg. price: ₹{item.avgPrice}
                  </p>
                </div>
                
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-400">Best deals on:</span>
                  <div className="flex items-center mt-1">
                    <TrendingUp size={14} className="text-saveit-neon-green mr-1" />
                    <span className="text-saveit-neon-green text-sm">{item.bestPlatform}</span>
                    <ChevronRight size={16} className="text-gray-400 ml-1" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;
