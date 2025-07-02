
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  height?: string;
  showMarker?: boolean;
  markerTitle?: string;
}

const Map: React.FC<MapProps> = ({ 
  latitude, 
  longitude, 
  zoom = 10, 
  height = '400px',
  showMarker = true,
  markerTitle = 'Location'
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);
  const [userToken, setUserToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState(false);

  const initializeMap = async (token: string) => {
    if (!mapContainer.current) return;

    try {
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [longitude, latitude],
        zoom: zoom,
        attributionControl: true,
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Wait for map to load before adding marker
      map.current.on('load', () => {
        console.log('Map loaded successfully');
        setMapError(null);
        
        // Add marker if requested
        if (showMarker && map.current) {
          marker.current = new mapboxgl.Marker({ 
            color: '#3B82F6',
            scale: 1.2 
          })
            .setLngLat([longitude, latitude])
            .setPopup(
              new mapboxgl.Popup({ 
                offset: 25,
                closeButton: false,
                closeOnClick: false 
              })
                .setHTML(`<div class="font-semibold text-sm p-1">${markerTitle}</div>`)
            )
            .addTo(map.current);
        }
      });

      // Handle map errors
      map.current.on('error', (e) => {
        console.error('Map error:', e);
        setMapError('Invalid Mapbox token. Please enter a valid token.');
        setShowTokenInput(true);
      });

    } catch (error) {
      console.error('Map initialization error:', error);
      setMapError('Failed to initialize map.');
      setShowTokenInput(true);
    }
  };

  useEffect(() => {
    // Check if user has provided a token
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      initializeMap(savedToken);
    } else {
      setMapError('Mapbox token required');
      setShowTokenInput(true);
    }

    // Cleanup
    return () => {
      marker.current?.remove();
      map.current?.remove();
    };
  }, [latitude, longitude, zoom, showMarker, markerTitle]);

  const handleTokenSubmit = () => {
    if (userToken.trim()) {
      localStorage.setItem('mapbox_token', userToken.trim());
      setShowTokenInput(false);
      initializeMap(userToken.trim());
    }
  };

  if (mapError && showTokenInput) {
    return (
      <div 
        className="w-full rounded-lg border flex items-center justify-center bg-gray-50" 
        style={{ height }}
      >
        <Card className="w-full max-w-md mx-4">
          <CardHeader>
            <CardTitle>Mapbox Token Required</CardTitle>
            <CardDescription>
              Please enter your Mapbox public token to display satellite maps
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="text"
              placeholder="pk.eyJ1Ij..."
              value={userToken}
              onChange={(e) => setUserToken(e.target.value)}
              className="font-mono text-sm"
            />
            <Button 
              onClick={handleTokenSubmit}
              className="w-full"
              disabled={!userToken.trim()}
            >
              Load Map
            </Button>
            <p className="text-xs text-muted-foreground">
              Get your free token at{' '}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (mapError) {
    return (
      <div 
        className="w-full rounded-lg border flex items-center justify-center bg-gray-100" 
        style={{ height }}
      >
        <div className="text-center p-4">
          <p className="text-gray-600 mb-2">Map Error</p>
          <p className="text-sm text-gray-500">{mapError}</p>
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2"
            onClick={() => setShowTokenInput(true)}
          >
            Update Token
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={mapContainer} 
      className="w-full rounded-lg overflow-hidden shadow-lg border" 
      style={{ height }}
    />
  );
};

export default Map;
