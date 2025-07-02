
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Globe, Heart, Award, Shield, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About StayFinder</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Connecting travelers with unique accommodations across India since our founding. 
            We believe every journey deserves the perfect stay.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To make travel accessible and memorable by connecting guests with hosts who 
              offer authentic, comfortable, and unique accommodations across India's diverse landscapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Authentic Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We curate unique stays that reflect local culture and hospitality, 
                  giving you authentic experiences wherever you go.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Trust & Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Your safety is our priority. All properties are verified and 
                  our 24/7 support ensures a secure booking experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Nationwide Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  From bustling metros to serene hill stations, we offer 
                  accommodations across 1000+ destinations in India.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <p className="text-muted-foreground">Properties Listed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Happy Guests</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">States Covered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.8</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on the foundation of trust, innovation, and community, 
              we strive to make every stay memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <Users className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Community First</h3>
                <p className="text-muted-foreground">
                  We believe in building strong relationships between hosts and guests, 
                  creating a community of travelers who care about each other.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Every property is carefully vetted to ensure it meets our high standards 
                  for cleanliness, safety, and guest satisfaction.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Our local teams across India ensure authentic experiences and 
                  provide insider knowledge about each destination.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Heart className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Sustainable Travel</h3>
                <p className="text-muted-foreground">
                  We promote responsible tourism that benefits local communities 
                  and preserves India's cultural and natural heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're looking for your next adventure or want to share your space with travelers, 
            we're here to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Start Your Journey
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

export default About;
