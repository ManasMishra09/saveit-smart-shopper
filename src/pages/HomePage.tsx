
import React from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";
import RecentComparison from "@/components/RecentComparison";
import SmartSuggestion from "@/components/SmartSuggestion";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  // Mock data - in a real app this would come from an API
  const recentComparisons = [
    {
      id: 1,
      title: "Organic Banana (6 pcs)",
      image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      bestPrice: {
        platform: "Blinkit",
        platformIcon: "https://play-lh.googleusercontent.com/-yzJJR9Q0YxneFNF7LX7NzT09wtHgKp9femGCKt3Ffu3CqQPhBQe7z8jQQT_t7E5Ug=s96-rw",
        price: 75,
        discount: 12
      },
      worstPrice: {
        platform: "Swiggy",
        platformIcon: "https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA=w240-h480-rw",
        price: 95
      }
    },
    {
      id: 2,
      title: "Amul Butter (500g)",
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      bestPrice: {
        platform: "Zepto",
        platformIcon: "https://play-lh.googleusercontent.com/mKrI0y8S0v6X4weEj0z6xklKKCFw58m3J2jbX_S2EGLjYyx0jGx4LBNk0ssjOTW0iLc=w240-h480-rw",
        price: 245
      },
      worstPrice: {
        platform: "Swiggy",
        platformIcon: "https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA=w240-h480-rw",
        price: 275
      }
    }
  ];

  const smartSuggestions = [
    {
      id: 1,
      title: "Save 15% on your grocery order",
      description: "Add 2 more items to your cart to avoid the ₹50 delivery fee on Blinkit.",
      type: "tip" as const
    },
    {
      id: 2,
      title: "Price drop alert!",
      description: "The coffee beans you frequently buy are now 20% off on Zepto.",
      type: "info" as const
    }
  ];

  const trendingItems = [
    "Milk", "Bread", "Eggs", "Rice", "Coffee", "Onions"
  ];

  return (
    <div className="pb-20 pt-16">
      <div className="px-4 py-6">
        <h1 className="text-2xl font-poppins font-bold">
          <span className="gradient-text">Smart</span> Comparisons
        </h1>
        <p className="text-gray-400 mt-1">Compare prices across platforms & save money</p>
        
        <div className="mt-6">
          <SearchBar />
        </div>
        
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Trending Searches</h2>
            <Button variant="ghost" className="text-gray-400" size="sm">
              See all
            </Button>
          </div>
          
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {trendingItems.map((item, index) => (
              <Link 
                to={`/search?q=${item}`} 
                key={index}
                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-saveit-card-bg border border-white/10 text-sm flex items-center"
              >
                <TrendingUp size={14} className="mr-1 text-saveit-bright-blue" />
                {item}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Smart Suggestions</h2>
            <Button variant="ghost" className="text-gray-400" size="sm">
              <ArrowRight size={16} />
            </Button>
          </div>
          
          <div className="mt-3 space-y-3">
            {smartSuggestions.map((suggestion) => (
              <SmartSuggestion
                key={suggestion.id}
                title={suggestion.title}
                description={suggestion.description}
                type={suggestion.type}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Recent Comparisons</h2>
            <Link to="/cart">
              <Button variant="ghost" className="text-gray-400" size="sm">
                See all
              </Button>
            </Link>
          </div>
          
          <div className="mt-3 space-y-3">
            {recentComparisons.map((comparison) => (
              <RecentComparison
                key={comparison.id}
                title={comparison.title}
                image={comparison.image}
                bestPrice={comparison.bestPrice}
                worstPrice={comparison.worstPrice}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <Card className="bg-gradient-to-r from-saveit-neon-green/20 to-saveit-bright-blue/20 border-none p-4">
            <h3 className="font-medium">Saved This Month</h3>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold gradient-text">₹1,243</span>
              <span className="ml-2 text-sm text-saveit-neon-green">+12% vs last month</span>
            </div>
            <p className="text-xs text-gray-300 mt-1">Based on 18 purchases across 4 platforms</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
