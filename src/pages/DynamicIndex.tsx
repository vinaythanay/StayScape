
import { useState } from "react";
import { useProperties } from "@/hooks/useProperties";
import DynamicPropertyCard from "@/components/property/DynamicPropertyCard";
import PropertyFilters from "@/components/property/PropertyFilters";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DynamicIndex = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<{
    location?: string;
    minPrice?: number;
    maxPrice?: number;
    guests?: number;
  }>({});

  const { data: properties, isLoading, error, refetch } = useProperties(filters);

  console.log('DynamicIndex render:', { properties, isLoading, error });

  // Check if any search filters are active
  const isSearchActive = Object.keys(filters).some(key => filters[key as keyof typeof filters]);

  // Always show only 6 properties (featured or search results)
  const displayProperties = properties?.slice(0, 6);

  const handleFiltersChange = (newFilters: typeof filters) => {
    console.log('Filters changed:', newFilters);
    setFilters(newFilters);
  };

  const handleRetry = () => {
    console.log('Retrying properties fetch...');
    refetch();
  };

  const handleStartExploring = () => {
    // Scroll to properties section
    const propertiesSection = document.getElementById('properties-section');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBecomeHost = () => {
    // Navigate to contact page for host inquiries
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Hero onStartJourney={handleStartExploring} />
      
      {/* Search Filters */}
      <section className="container mx-auto px-4 py-8">
        <PropertyFilters onFiltersChange={handleFiltersChange} />
      </section>
      
      {/* Properties Section */}
      <section id="properties-section" className="container mx-auto px-4 pb-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isSearchActive ? 'Search Results' : 'Featured Properties'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {displayProperties?.length 
              ? `${isSearchActive ? 'Found' : 'Showing'} ${displayProperties.length} amazing places to stay`
              : isSearchActive 
                ? 'Discover unique places to stay based on your search'
                : 'Discover unique places to stay around the world'
            }
          </p>
        </div>
        
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-64 w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-destructive mb-4">
              Failed to load properties
              {error.message && (
                <span className="block text-sm text-muted-foreground mt-2">
                  Error: {error.message}
                </span>
              )}
            </p>
            <Button onClick={handleRetry}>Try Again</Button>
          </div>
        )}

        {displayProperties && displayProperties.length === 0 && !isLoading && !error && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No properties found matching your criteria</p>
            <Button onClick={() => setFilters({})}>Clear Filters</Button>
          </div>
        )}
        
        {displayProperties && displayProperties.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProperties.map((property) => (
              <DynamicPropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About StayFinder</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connecting travelers with unique accommodations across India since our founding. 
              We believe every journey deserves the perfect stay.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <p className="text-muted-foreground">Properties Listed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <p className="text-muted-foreground">Happy Guests</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.8</div>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
            </div>
            <Button onClick={() => navigate('/about')} variant="outline" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions? Need help with your booking? We're here to assist you 24/7.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-muted-foreground">+91 1800-123-4567</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-muted-foreground">support@stayfinder.com</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-muted-foreground">Available 24/7</p>
              </div>
            </div>
            <Button onClick={() => navigate('/contact')} size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of travelers who trust StayFinder for their perfect accommodations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-3"
              onClick={handleStartExploring}
            >
              Start Exploring
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600"
              onClick={handleBecomeHost}
            >
              Become a Host
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicIndex;
