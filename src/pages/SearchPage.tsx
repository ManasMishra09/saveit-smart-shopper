
import React, { useState } from "react";
import { Search, Filter, ArrowDown, ArrowUp, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock search results
const mockSearchResults = [
  {
    id: 1,
    name: "Amul Milk (1L)",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    prices: {
      blinkit: 68,
      zepto: 65,
      swiggy: 72
    }
  },
  {
    id: 2,
    name: "English Breakfast Tea (25 bags)",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    prices: {
      blinkit: 125,
      zepto: 130,
      swiggy: 120
    }
  },
  {
    id: 3,
    name: "Nescafe Gold Coffee (100g)",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    prices: {
      blinkit: 395,
      zepto: 380,
      swiggy: 410
    }
  },
  {
    id: 4,
    name: "Cadbury Dairy Milk (150g)",
    image: "https://images.unsplash.com/photo-1623858757827-bfd6963dc607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    prices: {
      blinkit: 140,
      zepto: 145,
      swiggy: 135
    }
  },
];

const platforms = [
  {
    id: "blinkit",
    name: "Blinkit",
    logo: "https://play-lh.googleusercontent.com/-yzJJR9Q0YxneFNF7LX7NzT09wtHgKp9femGCKt3Ffu3CqQPhBQe7z8jQQT_t7E5Ug=s96-rw"
  },
  {
    id: "zepto",
    name: "Zepto",
    logo: "https://play-lh.googleusercontent.com/mKrI0y8S0v6X4weEj0z6xklKKCFw58m3J2jbX_S2EGLjYyx0jGx4LBNk0ssjOTW0iLc=w240-h480-rw"
  },
  {
    id: "swiggy",
    name: "Swiggy",
    logo: "https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA=w240-h480-rw"
  }
];

const categoriesFilter = [
  "Dairy", "Groceries", "Fruits", "Vegetables", "Beverages", "Snacks"
];

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(platforms.map(p => p.id));
  
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(prev => prev.filter(c => c !== category));
    } else {
      setSelectedCategories(prev => [...prev, category]);
    }
  };
  
  const togglePlatform = (platformId: string) => {
    if (selectedPlatforms.includes(platformId)) {
      setSelectedPlatforms(prev => prev.filter(p => p !== platformId));
    } else {
      setSelectedPlatforms(prev => [...prev, platformId]);
    }
  };
  
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
  
  // Get the price difference percentage between best and worst prices
  const getPriceDifferencePercent = (prices: Record<string, number>) => {
    const pricesArray = Object.values(prices);
    const minPrice = Math.min(...pricesArray);
    const maxPrice = Math.max(...pricesArray);
    return Math.round(((maxPrice - minPrice) / maxPrice) * 100);
  };
  
  return (
    <div className="pb-20 pt-16">
      <div className="px-4 py-6">
        <h1 className="text-2xl font-poppins font-bold">
          <span className="gradient-text">Search</span> Products
        </h1>
        <p className="text-gray-400 mt-1">Find and compare across platforms</p>
        
        <div className="mt-6">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search size={18} />
            </div>
            
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for products..."
              className="pl-10 pr-10 bg-saveit-card-bg border-white/10 text-white"
            />
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} />
            </Button>
          </div>
          
          {showFilters && (
            <div className="mt-3 p-3 bg-saveit-card-bg rounded-lg border border-white/10 animate-slide-up">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Filter by</h3>
                <Button variant="ghost" size="sm" className="text-gray-400 h-7 px-2 py-0">
                  <X size={14} onClick={() => setShowFilters(false)} />
                </Button>
              </div>
              
              <div className="mt-3">
                <h4 className="text-xs text-gray-400">Categories</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {categoriesFilter.map((category) => (
                    <Badge
                      key={category}
                      className={`cursor-pointer ${
                        selectedCategories.includes(category)
                          ? "bg-saveit-accent-purple hover:bg-saveit-accent-purple/80"
                          : "bg-saveit-dark-bg border border-white/10 hover:bg-saveit-dark-bg/80"
                      }`}
                      onClick={() => toggleCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-3">
                <h4 className="text-xs text-gray-400">Platforms</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {platforms.map((platform) => (
                    <Badge
                      key={platform.id}
                      className={`cursor-pointer flex items-center gap-1 ${
                        selectedPlatforms.includes(platform.id)
                          ? "bg-saveit-bright-blue/20 text-saveit-bright-blue hover:bg-saveit-bright-blue/30"
                          : "bg-saveit-dark-bg border border-white/10 hover:bg-saveit-dark-bg/80"
                      }`}
                      onClick={() => togglePlatform(platform.id)}
                    >
                      <img 
                        src={platform.logo} 
                        alt={platform.name}
                        className="w-4 h-4 rounded-full"
                      />
                      {platform.name}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-3 flex justify-between">
                <Button variant="outline" size="sm" className="text-xs border-white/10">
                  Reset filters
                </Button>
                <Button size="sm" className="text-xs bg-saveit-accent-purple hover:bg-saveit-accent-purple/80">
                  Apply filters
                </Button>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-6">
          <Tabs defaultValue="grid">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">24 results</span>
              <TabsList className="bg-saveit-card-bg">
                <TabsTrigger value="grid" className="text-xs px-3">Grid</TabsTrigger>
                <TabsTrigger value="list" className="text-xs px-3">List</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="grid" className="mt-4">
              <div className="grid grid-cols-2 gap-3">
                {mockSearchResults.map((product) => {
                  const bestPlatform = getBestPlatformForProduct(product.prices);
                  const priceDiff = getPriceDifferencePercent(product.prices);
                  
                  return (
                    <Card key={product.id} className="overflow-hidden bg-saveit-card-bg border-white/10">
                      <div className="aspect-square bg-gray-800 relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        {priceDiff > 5 && (
                          <Badge className="absolute top-2 right-2 bg-saveit-accent-purple">
                            {priceDiff}% diff
                          </Badge>
                        )}
                      </div>
                      
                      <div className="p-3">
                        <h3 className="font-medium text-sm line-clamp-1">{product.name}</h3>
                        
                        <div className="mt-2">
                          {bestPlatform && (
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <img 
                                  src={bestPlatform.logo} 
                                  alt={bestPlatform.name}
                                  className="w-5 h-5 rounded-full"
                                />
                                <span className="ml-1 text-xs">
                                  {bestPlatform.name}
                                </span>
                              </div>
                              <span className="text-saveit-neon-green font-medium">
                                ₹{product.prices[bestPlatform.id as keyof typeof product.prices]}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="w-full mt-2 text-xs font-normal border-white/10"
                        >
                          Compare all
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="list" className="mt-4 space-y-3">
              {mockSearchResults.map((product) => {
                const bestPlatform = getBestPlatformForProduct(product.prices);
                
                return (
                  <Card key={product.id} className="p-3 bg-saveit-card-bg border-white/10">
                    <div className="flex">
                      <div className="w-16 h-16 bg-gray-800 rounded-md overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="ml-3 flex-1">
                        <h3 className="font-medium text-sm">{product.name}</h3>
                        
                        <div className="mt-1 space-y-1">
                          {Object.entries(product.prices).map(([platformId, price]) => {
                            const platform = platforms.find(p => p.id === platformId);
                            const isBest = bestPlatform?.id === platformId;
                            
                            return (
                              <div key={platformId} className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <img 
                                    src={platform?.logo || ''} 
                                    alt={platform?.name || ''}
                                    className="w-4 h-4 rounded-full"
                                  />
                                  <span className="ml-1 text-xs text-gray-400">
                                    {platform?.name}
                                  </span>
                                </div>
                                <span className={`text-xs font-medium ${isBest ? 'text-saveit-neon-green' : 'text-white'}`}>
                                  {isBest && <ArrowDown size={12} className="inline mr-1" />}
                                  ₹{price}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      
                      <Button 
                        size="sm" 
                        className="self-center ml-2 bg-saveit-accent-purple hover:bg-saveit-accent-purple/80 text-xs h-8"
                      >
                        Compare
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
