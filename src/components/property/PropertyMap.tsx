
import React from 'react';
import Map from '@/components/Map';
import { Property } from '@/hooks/useProperties';

interface PropertyMapProps {
  property: Property;
  height?: string;
}

const PropertyMap: React.FC<PropertyMapProps> = ({ property, height = "300px" }) => {
  // Default coordinates for properties without specific lat/lng
  const defaultCoordinates = {
    // Default to Mumbai coordinates
    latitude: 19.0760,
    longitude: 72.8777
  };

  const coordinates = {
    latitude: property.latitude || defaultCoordinates.latitude,
    longitude: property.longitude || defaultCoordinates.longitude
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Location</h3>
      <Map
        latitude={coordinates.latitude}
        longitude={coordinates.longitude}
        zoom={12}
        height={height}
        showMarker={true}
        markerTitle={property.title}
      />
      <p className="text-sm text-muted-foreground">
        📍 {property.location}
      </p>
    </div>
  );
};

export default PropertyMap;
