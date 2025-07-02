
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from '@/hooks/use-toast';

export const useFavorites = () => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ['favorites', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await (supabase as any)
        .from('favorites')
        .select(`
          *,
          properties:property_id(*)
        `)
        .eq('user_id', user.id);

      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });
};

export const useToggleFavorite = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ propertyId, isFavorite }: { propertyId: string; isFavorite: boolean }) => {
      if (!user) throw new Error('User not authenticated');

      if (isFavorite) {
        // Remove from favorites
        const { error } = await (supabase as any)
          .from('favorites')
          .delete()
          .eq('user_id', user.id)
          .eq('property_id', propertyId);
        
        if (error) throw error;
      } else {
        // Add to favorites
        const { error } = await (supabase as any)
          .from('favorites')
          .insert([{ user_id: user.id, property_id: propertyId }]);
        
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update favorites",
        variant: "destructive",
      });
      console.error('Toggle favorite error:', error);
    },
  });
};
