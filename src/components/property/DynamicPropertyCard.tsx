
import { useState } from "react";
import { Heart, Star, MapPin, Users, Bed, Bath } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Property } from "@/hooks/useProperties";
import { useFavorites, useToggleFavorite } from "@/hooks/useFavorites";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface DynamicPropertyCardProps {
  property: Property;
}

const DynamicPropertyCard = ({ property }: DynamicPropertyCardProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { data: favorites } = useFavorites();
  const toggleFavorite = useToggleFavorite();

  const isFavorite = favorites?.some(fav => fav.property_id === property.id) || false;
  const averageRating = property.reviews?.length 
    ? property.reviews.reduce((sum, review) => sum + review.rating, 0) / property.reviews.length 
    : 0;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      navigate('/auth');
      return;
    }
    toggleFavorite.mutate({ propertyId: property.id, isFavorite });
  };

  const handleCardClick = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={handleCardClick}>
      <div className="relative overflow-hidden">
        <img
          src={property.images[0] || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop'}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-3 right-3 rounded-full p-2 ${
            isFavorite ? "text-red-500" : "text-white"
          } hover:bg-white/20`}
          onClick={handleFavoriteClick}
          disabled={toggleFavorite.isPending}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
        </Button>
        
        <div className="absolute bottom-3 left-3">
          <Badge className="bg-white/90 text-black hover:bg-white">
            ${property.price_per_night}/night
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-1">
            {property.title}
          </h3>
          {averageRating > 0 && (
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{averageRating.toFixed(1)}</span>
              <span className="text-sm text-muted-foreground">({property.reviews?.length})</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <p className="text-sm">{property.location}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{property.max_guests}</span>
            </div>
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {amenity}
            </Badge>
          ))}
          {property.amenities.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{property.amenities.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DynamicPropertyCard;
