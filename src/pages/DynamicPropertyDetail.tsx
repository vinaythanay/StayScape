import { useParams } from "react-router-dom";
import { useProperty } from "@/hooks/useProperties";
import Navigation from "@/components/Navigation";
import PropertyMap from "@/components/property/PropertyMap";
import BookingForm from "@/components/booking/BookingForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Star, Users, Bed, Bath, Wifi, Car, Coffee, Tv, MapPin, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const DynamicPropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: property, isLoading, error } = useProperty(id || '');
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Skeleton className="h-96 w-full rounded-lg" />
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-20 w-full" />
            </div>
            <div className="space-y-6">
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
            <p className="text-muted-foreground">The property you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  const amenityIcons: Record<string, any> = {
    'WiFi': Wifi,
    'Parking': Car,
    'Kitchen': Coffee,
    'TV': Tv,
  };

  const handleFavorite = () => {
    toast({
      title: "Added to Favorites",
      description: "Property has been added to your favorites!",
    });
  };

  const averageRating = property.reviews && property.reviews.length > 0
    ? (property.reviews.reduce((sum, review) => sum + review.rating, 0) / property.reviews.length).toFixed(1)
    : 'New';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img
                  src={property.images?.[selectedImage] || 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop'}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {property.images && property.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${property.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Property Info */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.location}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {averageRating} {property.reviews && property.reviews.length > 0 && `(${property.reviews.length} reviews)`}
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleFavorite}
                  className="flex items-center"
                >
                  <Heart className="h-4 w-4 mr-1" />
                  Save
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {property.max_guests} guests
                </div>
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  {property.bedrooms} bedrooms
                </div>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  {property.bathrooms} bathrooms
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-muted-foreground">{property.description}</p>
              </div>
            </div>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities?.map((amenity) => {
                    const IconComponent = amenityIcons[amenity];
                    return (
                      <div key={amenity} className="flex items-center space-x-2">
                        {IconComponent && <IconComponent className="h-4 w-4" />}
                        <span className="text-sm">{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Location Map */}
            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
                <CardDescription>Explore the area around this property</CardDescription>
              </CardHeader>
              <CardContent>
                <PropertyMap property={property} height="400px" />
              </CardContent>
            </Card>

            {/* Reviews */}
            {property.reviews && property.reviews.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Reviews ({property.reviews.length})</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {property.reviews.slice(0, 3).map((review) => (
                    <div key={review.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {new Date(review.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm">{review.comment}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Booking Sidebar - Fixed spacing and positioning */}
          <div className="lg:sticky lg:top-8 space-y-6 h-fit">
            <BookingForm property={property} />

            <Card>
              <CardHeader>
                <CardTitle>Property Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Maximum Guests</span>
                  <Badge variant="secondary">{property.max_guests}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Bedrooms</span>
                  <Badge variant="secondary">{property.bedrooms}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Bathrooms</span>
                  <Badge variant="secondary">{property.bathrooms}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPropertyDetail;
