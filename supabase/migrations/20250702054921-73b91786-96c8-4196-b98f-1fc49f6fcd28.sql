
-- Add stripe_session_id column to bookings table for payment tracking
ALTER TABLE public.bookings 
ADD COLUMN stripe_session_id TEXT;
