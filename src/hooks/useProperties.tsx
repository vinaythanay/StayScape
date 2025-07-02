
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  price_per_night: number;
  max_guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  images: string[];
  latitude?: number;
  longitude?: number;
  available: boolean;
  host_id: string;
  created_at: string;
  reviews?: Review[];
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  guest_id: string;
  created_at: string;
  profiles?: {
    full_name: string;
  };
}

export const useProperties = (filters?: {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  guests?: number;
}) => {
  return useQuery({
    queryKey: ['properties', filters],
    queryFn: async () => {
      console.log('Fetching properties with filters:', filters);
      
      try {
        let query = supabase
          .from('properties')
          .select(`
            *,
            reviews:reviews(
              id,
              rating,
              comment,
              guest_id,
              created_at
            )
          `)
          .eq('available', true);

        if (filters?.location) {
          query = query.ilike('location', `%${filters.location}%`);
        }
        if (filters?.minPrice) {
          query = query.gte('price_per_night', filters.minPrice);
        }
        if (filters?.maxPrice) {
          query = query.lte('price_per_night', filters.maxPrice);
        }
        if (filters?.guests) {
          query = query.gte('max_guests', filters.guests);
        }

        const { data, error } = await query;
        
        console.log('Properties query result:', { data, error });
        
        if (error) {
          console.error('Properties query error:', error);
          throw error;
        }
        
        // Transform the data to match our Property interface
        const transformedData = data?.map(property => ({
          ...property,
          reviews: property.reviews || []
        })) || [];
        
        console.log('Transformed properties data:', transformedData);
        
        return transformedData as Property[];
      } catch (error) {
        console.error('Error in useProperties:', error);
        throw error;
      }
    },
    retry: 1,
    retryDelay: 1000,
  });
};

export const useProperty = (id: string) => {
  return useQuery({
    queryKey: ['property', id],
    queryFn: async () => {
      console.log('Fetching property with id:', id);
      
      const { data, error } = await supabase
        .from('properties')
        .select(`
          *,
          reviews:reviews(
            id,
            rating,
            comment,
            guest_id,
            created_at
          )
        `)
        .eq('id', id)
        .single();

      console.log('Property query result:', { data, error });
      
      if (error) {
        console.error('Property query error:', error);
        throw error;
      }
      
      // Transform the data to match our Property interface
      const transformedData = {
        ...data,
        reviews: data.reviews || []
      };
      
      return transformedData as Property;
    },
  });
};

export const useCreateProperty = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (propertyData: Omit<Property, 'id' | 'created_at' | 'host_id'>) => {
      const { data, error } = await supabase
        .from('properties')
        .insert([propertyData])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['properties'] });
      toast({
        title: "Success!",
        description: "Property created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create property",
        variant: "destructive",
      });
      console.error('Create property error:', error);
    },
  });
};
