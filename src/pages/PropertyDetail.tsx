
import { useState } from "react";
import { ArrowLeft, Star, Heart, Share, MapPin, Users, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";

const PropertyDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Mock property data
  const property = {
    id: 1,
    title: "Modern Beachfront Villa with Infinity Pool",
    location: "Malibu, California",
    price: 450,
    rating: 4.9,
    reviews: 127,
    host: "Sarah Johnson",
    hostImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    ],
    description: "Escape to this stunning beachfront villa featuring panoramic ocean views, modern luxury amenities, and direct beach access. Perfect for a romantic getaway or family vacation.",
    amenities: [
      "Free WiFi", "Ocean View", "Private Pool", "Beach Access", 
      "Full Kitchen", "Parking", "Air Conditioning", "Hot Tub",
      "Workspace", "TV", "Washer & Dryer", "Patio"
    ],
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    rules: [
      "Check-in after 3:00 PM",
      "Check-out before 11:00 AM", 
      "No smoking",
      "No pets allowed",
      "No parties or events"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to listings
        </Button>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-medium">{property.rating}</span>
                <span className="mx-1">·</span>
                <span>{property.reviews} reviews</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {property.location}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`h-4 w-4 mr-2 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                Save
              </Button>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 rounded-xl overflow-hidden">
          <div className="relative">
            <img
              src={property.images[selectedImage]}
              alt={property.title}
              className="w-full h-96 lg:h-[500px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(1, 5).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${property.title} ${index + 2}`}
                className="w-full h-44 lg:h-[240px] object-cover cursor-pointer hover:opacity-90 transition-opacity rounded-lg"
                onClick={() => setSelectedImage(index + 1)}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Host Info */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Hosted by {property.host}
                </h2>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <span>{property.guests} guests</span>
                  <span>·</span>
                  <span>{property.bedrooms} bedrooms</span>
                  <span>·</span>
                  <span>{property.bathrooms} bathrooms</span>
                </div>
              </div>
              <img
                src={property.hostImage}
                alt={property.host}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold mb-4">About this place</h3>
              <p className="text-muted-foreground leading-relaxed">
                {property.description}
              </p>
            </div>

            <Separator />

            {/* Amenities */}
            <div>
              <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* House Rules */}
            <div>
              <h3 className="text-xl font-semibold mb-4">House rules</h3>
              <div className="space-y-2">
                {property.rules.map((rule, index) => (
                  <p key={index} className="text-muted-foreground">{rule}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 p-6 shadow-xl">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold">${property.price}</span>
                    <span className="text-muted-foreground"> night</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{property.rating}</span>
                    <span className="text-muted-foreground ml-1">({property.reviews})</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Check-in</label>
                      <input
                        type="date"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Check-out</label>
                      <input
                        type="date"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Guests</label>
                    <select className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary">
                      <option>1 guest</option>
                      <option>2 guests</option>
                      <option>3 guests</option>
                      <option>4 guests</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3">
                  Reserve
                </Button>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  You won't be charged yet
                </p>

                <div className="mt-6 space-y-2">
                  <div className="flex justify-between">
                    <span>${property.price} × 5 nights</span>
                    <span>${property.price * 5}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning fee</span>
                    <span>$75</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>$180</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${(property.price * 5) + 75 + 180}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
