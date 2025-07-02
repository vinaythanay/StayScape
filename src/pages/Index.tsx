
import { useState } from "react";
import { Search, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PropertyCard from "@/components/PropertyCard";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SearchFilters from "@/components/SearchFilters";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data for featured properties
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Beachfront Villa",
      location: "Malibu, California",
      price: 450,
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
      amenities: ["WiFi", "Pool", "Kitchen", "Parking"]
    },
    {
      id: 2,
      title: "Cozy Mountain Cabin",
      location: "Aspen, Colorado",
      price: 280,
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c85a?w=500&h=300&fit=crop",
      amenities: ["WiFi", "Fireplace", "Kitchen", "Hot Tub"]
    },
    {
      id: 3,
      title: "Downtown Luxury Loft",
      location: "New York, NY",
      price: 320,
      rating: 4.7,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop",
      amenities: ["WiFi", "Gym", "Rooftop", "Concierge"]
    },
    {
      id: 4,
      title: "Charming Countryside Cottage",
      location: "Tuscany, Italy",
      price: 180,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop",
      amenities: ["WiFi", "Garden", "Kitchen", "Wine Cellar"]
    },
    {
      id: 5,
      title: "Ocean View Penthouse",
      location: "Miami Beach, Florida",
      price: 520,
      rating: 4.8,
      reviews: 94,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=300&fit=crop",
      amenities: ["WiFi", "Pool", "Spa", "Ocean View"]
    },
    {
      id: 6,
      title: "Historic Brownstone",
      location: "Boston, Massachusetts",
      price: 240,
      rating: 4.6,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop",
      amenities: ["WiFi", "Kitchen", "Library", "Garden"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Search Filters */}
      <SearchFilters />
      
      {/* Featured Properties Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover unique places to stay around the world, carefully selected for exceptional experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join millions of travelers who trust StayFinder for their perfect accommodations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Start Exploring
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600">
              Become a Host
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
