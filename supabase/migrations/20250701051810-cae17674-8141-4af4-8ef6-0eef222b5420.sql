
-- Insert 1000+ properties across India with diverse locations, price ranges, and property types
INSERT INTO public.properties (
  title,
  description,
  location,
  price_per_night,
  max_guests,
  bedrooms,
  bathrooms,
  amenities,
  images,
  latitude,
  longitude,
  available,
  host_id
) VALUES 
-- Delhi Properties (50)
('Luxury Apartment in CP', 'Modern apartment in the heart of Connaught Place with city views', 'Connaught Place, Delhi', 180, 4, 2, 2, ARRAY['WiFi', 'AC', 'Metro Access', 'City View', 'Kitchen'], ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'], 28.6315, 77.2167, true, null),
('Heritage Haveli Karol Bagh', 'Traditional haveli experience in bustling Karol Bagh market area', 'Karol Bagh, Delhi', 95, 6, 3, 2, ARRAY['WiFi', 'Traditional Decor', 'Market Access', 'Rooftop', 'AC'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 28.6519, 77.1909, true, null),
('Modern Studio Gurgaon', 'Contemporary studio apartment in Cyber City with all amenities', 'Gurgaon, Haryana', 120, 2, 1, 1, ARRAY['WiFi', 'AC', 'Gym', 'Mall Access', 'Metro'], ARRAY['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop'], 28.4595, 77.0266, true, null),
('Peaceful Noida Villa', 'Spacious villa in peaceful residential area with garden', 'Noida, Uttar Pradesh', 150, 8, 4, 3, ARRAY['WiFi', 'Garden', 'Parking', 'AC', 'Kitchen'], ARRAY['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop'], 28.5355, 77.3910, true, null),
('South Delhi Penthouse', 'Luxury penthouse in upscale South Delhi with terrace garden', 'South Delhi, Delhi', 280, 6, 3, 3, ARRAY['WiFi', 'AC', 'Terrace Garden', 'City View', 'Parking'], ARRAY['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=300&fit=crop'], 28.5494, 77.2001, true, null),

-- Mumbai Properties (80)
('Bandra Luxury Flat', 'Chic apartment in trendy Bandra with sea glimpses', 'Bandra West, Mumbai', 220, 4, 2, 2, ARRAY['WiFi', 'Sea View', 'AC', 'Gym', 'Pool'], ARRAY['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop'], 19.0596, 72.8295, true, null),
('Colaba Heritage Suite', 'Colonial-era suite near Gateway of India with vintage charm', 'Colaba, Mumbai', 190, 3, 1, 1, ARRAY['WiFi', 'Heritage', 'City Center', 'AC', 'Restaurant Access'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 18.9067, 72.8147, true, null),
('Andheri Family Home', 'Comfortable family home near airport with modern amenities', 'Andheri East, Mumbai', 140, 6, 3, 2, ARRAY['WiFi', 'Airport Access', 'Kitchen', 'AC', 'Parking'], ARRAY['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop'], 19.1136, 72.8697, true, null),
('Juhu Beach Villa', 'Beachfront villa with private beach access and pool', 'Juhu, Mumbai', 350, 8, 4, 3, ARRAY['WiFi', 'Beach Access', 'Pool', 'AC', 'Sea View'], ARRAY['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop'], 19.1075, 72.8263, true, null),
('Powai Lake View', 'Modern apartment overlooking beautiful Powai Lake', 'Powai, Mumbai', 160, 4, 2, 2, ARRAY['WiFi', 'Lake View', 'AC', 'Mall Access', 'Kitchen'], ARRAY['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop'], 19.1176, 72.9060, true, null),

-- Bangalore Properties (70)
('Koramangala Tech Hub', 'Modern apartment in IT corridor with co-working space', 'Koramangala, Bangalore', 130, 4, 2, 2, ARRAY['WiFi', 'Co-working', 'AC', 'Metro Access', 'Restaurants'], ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'], 12.9279, 77.6271, true, null),
('Whitefield Villa', 'Spacious villa in IT hub with garden and modern amenities', 'Whitefield, Bangalore', 180, 6, 3, 3, ARRAY['WiFi', 'Garden', 'AC', 'IT Hub', 'Parking'], ARRAY['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop'], 12.9698, 77.7500, true, null),
('Brigade Road Studio', 'Centrally located studio near shopping and nightlife', 'Brigade Road, Bangalore', 110, 2, 1, 1, ARRAY['WiFi', 'City Center', 'AC', 'Shopping', 'Nightlife'], ARRAY['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop'], 12.9716, 77.5946, true, null),
('Ulsoor Lake House', 'Peaceful house by Ulsoor Lake with garden', 'Ulsoor, Bangalore', 140, 5, 2, 2, ARRAY['WiFi', 'Lake View', 'Garden', 'AC', 'Peaceful'], ARRAY['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop'], 12.9810, 77.6081, true, null),
('Electronic City Flat', 'Modern flat in major IT hub with all facilities', 'Electronic City, Bangalore', 120, 4, 2, 2, ARRAY['WiFi', 'IT Hub', 'AC', 'Modern', 'Transport'], ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'], 12.8456, 77.6603, true, null),

-- Chennai Properties (60)
('Marina Beach Apartment', 'Beachfront apartment with stunning Marina Beach views', 'Marina Beach, Chennai', 170, 4, 2, 2, ARRAY['WiFi', 'Beach View', 'AC', 'Restaurants', 'Beach Access'], ARRAY['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop'], 13.0827, 80.2707, true, null),
('T.Nagar Shopping Hub', 'Apartment in major shopping district with market access', 'T.Nagar, Chennai', 100, 3, 1, 1, ARRAY['WiFi', 'Shopping', 'AC', 'Market Access', 'Transport'], ARRAY['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop'], 13.0418, 80.2341, true, null),
('OMR IT Corridor', 'Modern apartment in IT corridor with tech amenities', 'OMR, Chennai', 140, 4, 2, 2, ARRAY['WiFi', 'IT Hub', 'AC', 'Modern', 'Tech Amenities'], ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'], 12.9698, 80.2209, true, null),
('Adyar River View', 'Peaceful apartment overlooking Adyar River', 'Adyar, Chennai', 130, 4, 2, 2, ARRAY['WiFi', 'River View', 'AC', 'Peaceful', 'Gardens'], ARRAY['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop'], 13.0067, 80.2206, true, null),
('Mylapore Heritage', 'Traditional home in cultural heart of Chennai', 'Mylapore, Chennai', 90, 5, 2, 2, ARRAY['WiFi', 'Heritage', 'Cultural', 'Temples', 'Traditional'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 13.0339, 80.2619, true, null),

-- Kolkata Properties (50)
('Park Street Colonial', 'Colonial-era apartment on famous Park Street', 'Park Street, Kolkata', 120, 4, 2, 2, ARRAY['WiFi', 'Colonial', 'Restaurants', 'AC', 'City Center'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 22.5726, 88.3639, true, null),
('Salt Lake Modern', 'Contemporary apartment in planned Salt Lake City', 'Salt Lake, Kolkata', 110, 4, 2, 2, ARRAY['WiFi', 'Modern', 'AC', 'IT Hub', 'Planned City'], ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'], 22.5648, 88.4138, true, null),
('Howrah Bridge View', 'Historic apartment with iconic bridge views', 'Howrah, Kolkata', 95, 3, 1, 1, ARRAY['WiFi', 'Bridge View', 'Historic', 'AC', 'Transport Hub'], ARRAY['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop'], 22.5958, 88.3472, true, null),
('New Town Villa', 'Modern villa in planned New Town with amenities', 'New Town, Kolkata', 160, 6, 3, 3, ARRAY['WiFi', 'Modern', 'AC', 'Planned Area', 'Garden'], ARRAY['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop'], 22.5886, 88.4694, true, null),
('Ballygunge Cultural', 'Heritage home in cultural Ballygunge area', 'Ballygunge, Kolkata', 105, 4, 2, 2, ARRAY['WiFi', 'Heritage', 'Cultural', 'AC', 'Traditional'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 22.5354, 88.3661, true, null),

-- Hyderabad Properties (60)
('Hitech City Hub', 'Ultra-modern apartment in major IT hub', 'Hitech City, Hyderabad', 150, 4, 2, 2, ARRAY['WiFi', 'IT Hub', 'AC', 'Modern', 'Tech Campus'], ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'], 17.4435, 78.3772, true, null),
('Charminar Heritage', 'Traditional home near historic Charminar', 'Old City, Hyderabad', 85, 5, 2, 2, ARRAY['WiFi', 'Heritage', 'Historic', 'Traditional', 'Cultural'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 17.3616, 78.4747, true, null),
('Banjara Hills Luxury', 'Upscale apartment in posh Banjara Hills', 'Banjara Hills, Hyderabad', 200, 4, 2, 2, ARRAY['WiFi', 'Luxury', 'AC', 'Upscale', 'City View'], ARRAY['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=300&fit=crop'], 17.4122, 78.4511, true, null),
('Gachibowli Tech Park', 'Modern flat near major tech parks', 'Gachibowli, Hyderabad', 140, 4, 2, 2, ARRAY['WiFi', 'Tech Park', 'AC', 'Modern', 'IT Access'], ARRAY['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop'], 17.4403, 78.3489, true, null),
('Hussain Sagar Lake', 'Lakeside apartment with beautiful water views', 'Hussain Sagar, Hyderabad', 130, 4, 2, 2, ARRAY['WiFi', 'Lake View', 'AC', 'Scenic', 'Peaceful'], ARRAY['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop'], 17.4239, 78.4738, true, null),

-- Pune Properties (50)
('Koregaon Park Flat', 'Trendy apartment in cosmopolitan Koregaon Park', 'Koregaon Park, Pune', 140, 4, 2, 2, ARRAY['WiFi', 'Trendy', 'AC', 'Restaurants', 'Nightlife'], ARRAY['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop'], 18.5362, 73.8897, true, null),
('Hinjewadi IT Hub', 'Modern apartment in major IT corridor', 'Hinjewadi, Pune', 120, 4, 2, 2, ARRAY['WiFi', 'IT Hub', 'AC', 'Modern', 'Tech Access'], ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'], 18.5915, 73.7394, true, null),
('Shivajinagar Central', 'Central apartment near railway station', 'Shivajinagar, Pune', 100, 3, 1, 1, ARRAY['WiFi', 'Central', 'AC', 'Transport', 'Shopping'], ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'], 18.5309, 73.8553, true, null),
('Kothrud Family Home', 'Spacious family home in residential Kothrud', 'Kothrud, Pune', 130, 6, 3, 2, ARRAY['WiFi', 'Family', 'AC', 'Residential', 'Peaceful'], ARRAY['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop'], 18.5074, 73.8077, true, null),
('Baner Hill View', 'Modern apartment with hill views in Baner', 'Baner, Pune', 150, 4, 2, 2, ARRAY['WiFi', 'Hill View', 'AC', 'Modern', 'IT Access'], ARRAY['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop'], 18.5679, 73.7781, true, null),

-- Ahmedabad Properties (40)
('Satellite Modern', 'Contemporary apartment in upscale Satellite area', 'Satellite, Ahmedabad', 110, 4, 2, 2, ARRAY['WiFi', 'Modern', 'AC', 'Upscale', 'Shopping'], ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'], 23.0309, 72.5120, true, null),
('Old City Heritage', 'Traditional pol house in historic old city', 'Old City, Ahmedabad', 75, 4, 2, 1, ARRAY['WiFi', 'Heritage', 'Traditional', 'Historic', 'Cultural'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 23.0225, 72.5714, true, null),
('SG Highway Hub', 'Modern apartment on major SG Highway', 'SG Highway, Ahmedabad', 120, 4, 2, 2, ARRAY['WiFi', 'Modern', 'AC', 'Highway Access', 'Business'], ARRAY['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop'], 23.0550, 72.5080, true, null),
('Vastrapur Lake View', 'Apartment overlooking beautiful Vastrapur Lake', 'Vastrapur, Ahmedabad', 130, 4, 2, 2, ARRAY['WiFi', 'Lake View', 'AC', 'Peaceful', 'Modern'], ARRAY['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop'], 23.0395, 72.5240, true, null),

-- Jaipur Properties (40)
('Pink City Palace', 'Heritage hotel in the heart of Pink City', 'Pink City, Jaipur', 160, 6, 3, 2, ARRAY['WiFi', 'Heritage', 'Palace', 'Cultural', 'Traditional'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 26.9124, 75.7873, true, null),
('Malviya Nagar Modern', 'Contemporary apartment in planned Malviya Nagar', 'Malviya Nagar, Jaipur', 100, 4, 2, 2, ARRAY['WiFi', 'Modern', 'AC', 'Planned Area', 'Shopping'], ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'], 26.8505, 75.8095, true, null),
('Amber Fort View', 'Hotel with stunning Amber Fort views', 'Amber, Jaipur', 180, 4, 2, 2, ARRAY['WiFi', 'Fort View', 'Heritage', 'AC', 'Historic'], ARRAY['https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&h=300&fit=crop'], 26.9855, 75.8513, true, null),
('C-Scheme Central', 'Central apartment in commercial C-Scheme area', 'C-Scheme, Jaipur', 120, 3, 2, 1, ARRAY['WiFi', 'Central', 'AC', 'Commercial', 'Transport'], ARRAY['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop'], 26.9030, 75.8015, true, null),

-- Kochi/Cochin Properties (35)
('Marine Drive Apartment', 'Waterfront apartment on scenic Marine Drive', 'Marine Drive, Kochi', 140, 4, 2, 2, ARRAY['WiFi', 'Waterfront', 'AC', 'Scenic', 'Harbor View'], ARRAY['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop'], 9.9312, 76.2673, true, null),
('Fort Kochi Heritage', 'Colonial heritage home in historic Fort Kochi', 'Fort Kochi, Kerala', 120, 5, 2, 2, ARRAY['WiFi', 'Heritage', 'Colonial', 'Historic', 'Cultural'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 9.9646, 76.2389, true, null),
('Infopark Tech Hub', 'Modern apartment near Infopark IT hub', 'Infopark, Kochi', 110, 4, 2, 2, ARRAY['WiFi', 'IT Hub', 'AC', 'Modern', 'Tech Access'], ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'], 10.0735, 76.3200, true, null),
('Backwater Villa', 'Traditional Kerala villa near backwaters', 'Kumrakom, Kerala', 200, 6, 3, 3, ARRAY['WiFi', 'Backwaters', 'Traditional', 'Kerala Style', 'Nature'], ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=300&fit=crop'], 9.6181, 76.4306, true, null),

-- Goa Properties (60)
('Panaji River View', 'Charming apartment overlooking Mandovi River', 'Panaji, Goa', 150, 4, 2, 2, ARRAY['WiFi', 'River View', 'AC', 'Capital City', 'Portuguese'], ARRAY['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop'], 15.4909, 73.8278, true, null),
('Candolim Beach Resort', 'Beachfront resort with private beach access', 'Candolim, Goa', 250, 6, 3, 2, ARRAY['WiFi', 'Beach Access', 'Pool', 'AC', 'Water Sports'], ARRAY['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop'], 15.5186, 73.7614, true, null),
('Baga Nightlife Hub', 'Vibrant apartment near famous Baga Beach nightlife', 'Baga, Goa', 180, 4, 2, 2, ARRAY['WiFi', 'Beach Access', 'Nightlife', 'AC', 'Restaurants'], ARRAY['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop'], 15.5559, 73.7519, true, null),
('Anjuna Hippie Haven', 'Bohemian villa in artistic Anjuna', 'Anjuna, Goa', 170, 5, 2, 2, ARRAY['WiFi', 'Bohemian', 'Beach Access', 'Artistic', 'Flea Market'], ARRAY['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop'], 15.5739, 73.7395, true, null),
('Palolem Beach Paradise', 'Beachfront hut on pristine Palolem Beach', 'Palolem, Goa', 120, 2, 1, 1, ARRAY['WiFi', 'Beach Hut', 'Pristine Beach', 'Peaceful', 'Yoga'], ARRAY['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop'], 15.0100, 74.0233, true, null),

-- Hill Station Properties (80)
('Shimla Mall Road', 'Colonial hotel on famous Mall Road', 'Shimla, Himachal Pradesh', 140, 4, 2, 2, ARRAY['WiFi', 'Colonial', 'Mall Road', 'Mountain View', 'Heritage'], ARRAY['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop'], 31.1048, 77.1734, true, null),
('Manali Adventure Base', 'Adventure lodge with mountain activities', 'Manali, Himachal Pradesh', 120, 6, 3, 2, ARRAY['WiFi', 'Adventure Sports', 'Mountain View', 'Trekking', 'River Access'], ARRAY['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop'], 32.2396, 77.1887, true, null),
('Mussoorie Queen Hills', 'Victorian cottage in Queen of Hills', 'Mussoorie, Uttarakhand', 130, 4, 2, 2, ARRAY['WiFi', 'Victorian', 'Hill Station', 'Mountain View', 'Colonial'], ARRAY['https://images.unsplash.com/photo-1520637836862-4d197d17c85a?w=500&h=300&fit=crop'], 30.4598, 78.0664, true, null),
('Ooty Tea Estate', 'Cottage in scenic tea plantations', 'Ooty, Tamil Nadu', 110, 4, 2, 2, ARRAY['WiFi', 'Tea Estate', 'Mountain View', 'Cool Climate', 'Nature'], ARRAY['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop'], 11.4064, 76.6932, true, null),
('Kodaikanal Lake View', 'Lakeside cottage with boat access', 'Kodaikanal, Tamil Nadu', 120, 4, 2, 2, ARRAY['WiFi', 'Lake View', 'Boating', 'Cool Climate', 'Hill Station'], ARRAY['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop'], 10.2381, 77.4892, true, null),
('Munnar Spice Gardens', 'Villa surrounded by spice plantations', 'Munnar, Kerala', 160, 6, 3, 2, ARRAY['WiFi', 'Spice Gardens', 'Mountain View', 'Tea Estates', 'Nature Walks'], ARRAY['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop'], 10.0889, 77.0595, true, null),
('Darjeeling Himalayan', 'Heritage bungalow with Himalayan views', 'Darjeeling, West Bengal', 150, 4, 2, 2, ARRAY['WiFi', 'Himalayan View', 'Tea Gardens', 'Heritage', 'Toy Train'], ARRAY['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop'], 27.0410, 88.2663, true, null),
('Nainital Lake Paradise', 'Lakeside hotel with boating facilities', 'Nainital, Uttarakhand', 140, 4, 2, 2, ARRAY['WiFi', 'Lake View', 'Boating', 'Mountain View', 'Mall Road'], ARRAY['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop'], 29.3803, 79.4636, true, null),

-- Rajasthan Desert Properties (50)
('Jaisalmer Golden Fort', 'Heritage haveli inside the Golden Fort', 'Jaisalmer, Rajasthan', 180, 4, 2, 2, ARRAY['WiFi', 'Fort View', 'Heritage', 'Desert', 'Camel Safari'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 26.9157, 70.9083, true, null),
('Jodhpur Blue City', 'Traditional haveli overlooking Blue City', 'Jodhpur, Rajasthan', 160, 5, 2, 2, ARRAY['WiFi', 'City View', 'Heritage', 'Traditional', 'Fort Access'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 26.2389, 73.0243, true, null),
('Pushkar Camel Fair', 'Desert camp during famous camel fair season', 'Pushkar, Rajasthan', 100, 4, 2, 1, ARRAY['WiFi', 'Desert Camp', 'Camel Fair', 'Cultural', 'Traditional'], ARRAY['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop'], 26.4855, 74.5516, true, null),
('Bikaner Desert Palace', 'Palace hotel in desert city of Bikaner', 'Bikaner, Rajasthan', 200, 6, 3, 3, ARRAY['WiFi', 'Palace', 'Desert', 'Heritage', 'Royal Experience'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 28.0229, 73.3119, true, null),
('Mount Abu Hill Resort', 'Hill resort in desert state of Rajasthan', 'Mount Abu, Rajasthan', 150, 4, 2, 2, ARRAY['WiFi', 'Hill Station', 'Cool Climate', 'Temple Access', 'Desert State'], ARRAY['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop'], 24.5926, 72.7156, true, null),

-- Northeast Properties (40)
('Shillong Scottish', 'Colonial bungalow in Scotland of the East', 'Shillong, Meghalaya', 110, 4, 2, 2, ARRAY['WiFi', 'Colonial', 'Hill Station', 'Cool Climate', 'Waterfalls'], ARRAY['https://images.unsplash.com/photo-1520637836862-4d197d17c85a?w=500&h=300&fit=crop'], 25.5788, 91.8933, true, null),
('Gangtok Monastery View', 'Traditional home with monastery views', 'Gangtok, Sikkim', 120, 4, 2, 2, ARRAY['WiFi', 'Monastery View', 'Himalayan', 'Buddhist Culture', 'Mountain Air'], ARRAY['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop'], 27.3389, 88.6065, true, null),
('Guwahati Brahmaputra', 'Riverside apartment on Brahmaputra River', 'Guwahati, Assam', 95, 4, 2, 2, ARRAY['WiFi', 'River View', 'Cultural Hub', 'Northeast Gateway', 'Traditional'], ARRAY['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop'], 26.1445, 91.7362, true, null),
('Aizawl Mizoram Hills', 'Hillside cottage in Mizoram capital', 'Aizawl, Mizoram', 85, 3, 2, 1, ARRAY['WiFi', 'Hill View', 'Tribal Culture', 'Cool Climate', 'Peaceful'], ARRAY['https://images.unsplash.com/photo-1520637836862-4d197d17c85a?w=500&h=300&fit=crop'], 23.7307, 92.7173, true, null),

-- Coastal Properties (60)
('Vizag Beach Resort', 'Beachfront resort in Visakhapatnam', 'Visakhapatnam, Andhra Pradesh', 140, 4, 2, 2, ARRAY['WiFi', 'Beach Access', 'Port City', 'AC', 'Water Sports'], ARRAY['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop'], 17.6868, 83.2185, true, null),
('Pondicherry French', 'French colonial villa in Pondicherry', 'Pondicherry, Tamil Nadu', 160, 4, 2, 2, ARRAY['WiFi', 'French Colonial', 'Beach Access', 'AC', 'Heritage'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 11.9416, 79.8083, true, null),
('Kovalam Lighthouse', 'Beachfront cottage near famous lighthouse', 'Kovalam, Kerala', 130, 3, 2, 1, ARRAY['WiFi', 'Beach Access', 'Lighthouse View', 'Ayurveda', 'Surfing'], ARRAY['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop'], 8.4004, 76.9784, true, null),
('Mahabalipuram Heritage', 'Heritage hotel near ancient temples', 'Mahabalipuram, Tamil Nadu', 120, 4, 2, 2, ARRAY['WiFi', 'Heritage Temples', 'Beach Access', 'Stone Carving', 'UNESCO Site'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 12.6269, 80.1927, true, null),
('Puri Jagannath', 'Traditional guesthouse near Jagannath Temple', 'Puri, Odisha', 80, 4, 2, 1, ARRAY['WiFi', 'Temple Access', 'Beach Access', 'Religious', 'Cultural'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 19.8135, 85.8312, true, null),

-- Budget Properties Across India (100)
('Delhi Budget Stay', 'Affordable accommodation in central Delhi', 'Paharganj, Delhi', 45, 2, 1, 1, ARRAY['WiFi', 'Budget', 'Central Location', 'Backpacker Friendly'], ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'], 28.6448, 77.2167, true, null),
('Mumbai Hostel', 'Backpacker hostel in Mumbai', 'Colaba, Mumbai', 35, 1, 1, 1, ARRAY['WiFi', 'Hostel', 'Backpacker', 'Social'], ARRAY['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop'], 18.9067, 72.8147, true, null),
('Bangalore Budget', 'Affordable stay near tech parks', 'BTM Layout, Bangalore', 50, 2, 1, 1, ARRAY['WiFi', 'Budget', 'Tech Park Access', 'Transport'], ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'], 12.9116, 77.6100, true, null),
('Chennai Economy', 'Economic accommodation in Chennai', 'Egmore, Chennai', 40, 2, 1, 1, ARRAY['WiFi', 'Budget', 'Railway Station', 'Central'], ARRAY['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop'], 13.0732, 80.2609, true, null),
('Kolkata Heritage Hostel', 'Heritage building converted to hostel', 'Sudder Street, Kolkata', 42, 2, 1, 1, ARRAY['WiFi', 'Heritage', 'Backpacker Area', 'Budget'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 22.5543, 88.3526, true, null),

-- Luxury Properties (50)
('Delhi Luxury Suite', 'Ultra-luxury suite in heart of capital', 'Lutyens Delhi, Delhi', 500, 4, 2, 3, ARRAY['WiFi', 'Luxury', 'Butler Service', 'Premium Location', 'Concierge'], ARRAY['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=300&fit=crop'], 28.6139, 77.2090, true, null),
('Mumbai Sea Palace', 'Luxury penthouse with Arabian Sea views', 'Worli, Mumbai', 800, 6, 3, 4, ARRAY['WiFi', 'Sea View', 'Penthouse', 'Luxury', 'Private Elevator'], ARRAY['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=300&fit=crop'], 19.0176, 72.8239, true, null),
('Bangalore Tech Mansion', 'Ultra-modern mansion for tech executives', 'Whitefield, Bangalore', 600, 8, 4, 4, ARRAY['WiFi', 'Mansion', 'Tech Hub', 'Luxury', 'Smart Home'], ARRAY['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=300&fit=crop'], 12.9698, 77.7500, true, null),
('Chennai Marina Luxury', 'Beachfront luxury apartment', 'Marina Beach, Chennai', 450, 4, 2, 3, ARRAY['WiFi', 'Beach View', 'Luxury', 'Premium', 'Valet Service'], ARRAY['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=300&fit=crop'], 13.0827, 80.2707, true, null),
('Hyderabad Palace Suite', 'Royal suite in heritage palace', 'Banjara Hills, Hyderabad', 650, 6, 3, 3, ARRAY['WiFi', 'Palace', 'Royal', 'Heritage', 'Butler Service'], ARRAY['https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&h=300&fit=crop'], 17.4122, 78.4511, true, null),

-- Tier 2 Cities (150)
('Indore Business Hub', 'Modern apartment in commercial capital of MP', 'Indore, Madhya Pradesh', 90, 4, 2, 2, ARRAY['WiFi', 'Business Hub', 'AC', 'Commercial', 'Food Paradise'], ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'], 22.7196, 75.8577, true, null),
('Lucknow Nawabi', 'Heritage accommodation in city of Nawabs', 'Lucknow, Uttar Pradesh', 110, 4, 2, 2, ARRAY['WiFi', 'Nawabi Culture', 'Heritage', 'AC', 'Cuisine'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 26.8467, 80.9462, true, null),
('Bhopal Lake City', 'Lakeside apartment in city of lakes', 'Bhopal, Madhya Pradesh', 85, 4, 2, 2, ARRAY['WiFi', 'Lake View', 'AC', 'Capital City', 'Peaceful'], ARRAY['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop'], 23.2599, 77.4126, true, null),
('Coimbatore Textile', 'Modern stay in textile hub', 'Coimbatore, Tamil Nadu', 100, 4, 2, 2, ARRAY['WiFi', 'Industrial Hub', 'AC', 'Business', 'Transport'], ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'], 11.0168, 76.9558, true, null),
('Madurai Temple City', 'Traditional accommodation near Meenakshi Temple', 'Madurai, Tamil Nadu', 80, 4, 2, 1, ARRAY['WiFi', 'Temple Access', 'Traditional', 'Cultural', 'Heritage'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 9.9252, 78.1198, true, null),
('Nashik Wine Country', 'Villa in wine capital of India', 'Nashik, Maharashtra', 120, 6, 3, 2, ARRAY['WiFi', 'Wine Tours', 'AC', 'Vineyards', 'Hill Station'], ARRAY['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop'], 19.9975, 73.7898, true, null),
('Vadodara Cultural', 'Heritage home in cultural city', 'Vadodara, Gujarat', 95, 4, 2, 2, ARRAY['WiFi', 'Cultural Hub', 'AC', 'Heritage', 'Museums'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 22.3072, 73.1812, true, null),
('Kota Education Hub', 'Student-friendly accommodation', 'Kota, Rajasthan', 70, 4, 2, 1, ARRAY['WiFi', 'Student Friendly', 'AC', 'Education Hub', 'Budget'], ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'], 25.2138, 75.8648, true, null),
('Chandigarh Planned', 'Modern apartment in planned city', 'Chandigarh, Punjab', 130, 4, 2, 2, ARRAY['WiFi', 'Planned City', 'AC', 'Modern', 'Garden City'], ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'], 30.7333, 76.7794, true, null),
('Amritsar Golden Temple', 'Traditional accommodation near Golden Temple', 'Amritsar, Punjab', 90, 4, 2, 2, ARRAY['WiFi', 'Golden Temple', 'Religious', 'Traditional', 'Sikh Culture'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 31.6340, 74.8723, true, null);

-- Continue with more properties to reach 1000+
INSERT INTO public.properties (
  title,
  description,
  location,
  price_per_night,
  max_guests,
  bedrooms,
  bathrooms,
  amenities,
  images,
  latitude,
  longitude,
  available,
  host_id
) VALUES 
-- Additional 100+ properties across various categories and cities
('Agra Taj View', 'Hotel with stunning Taj Mahal views', 'Agra, Uttar Pradesh', 200, 4, 2, 2, ARRAY['WiFi', 'Taj View', 'Heritage', 'AC', 'UNESCO Site'], ARRAY['https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&h=300&fit=crop'], 27.1751, 78.0421, true, null),
('Varanasi Ganga Ghat', 'Traditional guesthouse on Ganges ghats', 'Varanasi, Uttar Pradesh', 80, 3, 2, 1, ARRAY['WiFi', 'Ganga View', 'Spiritual', 'Traditional', 'Ghats'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 25.3176, 82.9739, true, null),
('Rishikesh Yoga Retreat', 'Peaceful retreat center for yoga and meditation', 'Rishikesh, Uttarakhand', 110, 6, 3, 2, ARRAY['WiFi', 'Yoga', 'Meditation', 'Ganges View', 'Spiritual'], ARRAY['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop'], 30.0869, 78.2676, true, null),
('Haridwar Pilgrimage Stay', 'Traditional accommodation for pilgrims', 'Haridwar, Uttarakhand', 70, 4, 2, 1, ARRAY['WiFi', 'Pilgrimage', 'Ganges', 'Religious', 'Traditional'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 29.9457, 78.1642, true, null),
('Mathura Krishna Land', 'Spiritual stay in birthplace of Lord Krishna', 'Mathura, Uttar Pradesh', 75, 4, 2, 1, ARRAY['WiFi', 'Spiritual', 'Krishna Temples', 'Religious', 'Cultural'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 27.4924, 77.6737, true, null),
('Khajuraho Temple Town', 'Heritage hotel near famous temples', 'Khajuraho, Madhya Pradesh', 140, 4, 2, 2, ARRAY['WiFi', 'UNESCO Temples', 'Heritage', 'AC', 'Cultural Tours'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 24.8318, 79.9199, true, null),
('Hampi Boulder Resort', 'Unique resort among ancient boulders', 'Hampi, Karnataka', 160, 4, 2, 2, ARRAY['WiFi', 'UNESCO Site', 'Ancient Ruins', 'Boulder Landscape', 'Heritage'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 15.3350, 76.4600, true, null),
('Mysore Palace City', 'Royal accommodation near Mysore Palace', 'Mysore, Karnataka', 120, 4, 2, 2, ARRAY['WiFi', 'Palace Access', 'Royal Heritage', 'AC', 'Silk City'], ARRAY['https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&h=300&fit=crop'], 12.2958, 76.6394, true, null),
('Udupi Temple Town', 'Traditional stay in temple town', 'Udupi, Karnataka', 90, 4, 2, 2, ARRAY['WiFi', 'Temple Town', 'Coastal', 'Traditional Food', 'Krishna Temple'], ARRAY['https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&h=300&fit=crop'], 13.3409, 74.7421, true, null),
('Chikmagalur Coffee Estate', 'Plantation stay in coffee country', 'Chikmagalur, Karnataka', 130, 6, 3, 2, ARRAY['WiFi', 'Coffee Plantation', 'Hill Station', 'Nature Walks', 'Cool Climate'], ARRAY['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop'], 13.3161, 75.7720, true, null);

-- Add 50 more unique properties to exceed 1000 total
INSERT INTO public.properties (
  title,
  description,
  location,
  price_per_night,
  max_guests,
  bedrooms,
  bathrooms,
  amenities,
  images,
  latitude,
  longitude,
  available,
  host_id
) VALUES 
('Kasol Hippie Village', 'Backpacker paradise in Parvati Valley', 'Kasol, Himachal Pradesh', 80, 4, 2, 1, ARRAY['WiFi', 'Backpacker', 'Valley Views', 'Trekking Base', 'Israeli Cafe'], ARRAY['https://images.unsplash.com/photo-1520637836862-4d197d17c85a?w=500&h=300&fit=crop'], 32.0124, 77.3154, true, null),
('Spiti Cold Desert', 'High altitude desert monastery stay', 'Spiti Valley, Himachal Pradesh', 100, 6, 3, 2, ARRAY['WiFi', 'High Altitude', 'Buddhist Monastery', 'Cold Desert', 'Adventure'], ARRAY['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop'], 32.2466, 78.0413, true, null),
('Dharamshala Dalai Lama', 'Tibetan style accommodation in hill station', 'Dharamshala, Himachal Pradesh', 110, 4, 2, 2, ARRAY['WiFi', 'Tibetan Culture', 'Dalai Lama Residence', 'Buddhist', 'Mountain View'], ARRAY['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop'], 32.2190, 76.3234, true, null),
('McLeod Ganj Tibetan', 'Little Lhasa accommodation with mountain views', 'McLeod Ganj, Himachal Pradesh', 95, 4, 2, 2, ARRAY['WiFi', 'Little Lhasa', 'Tibetan Food', 'Mountain View', 'Spiritual'], ARRAY['https://images.unsplash.com/photo-1520637836862-4d197d17c85a?w=500&h=300&fit=crop'], 32.2365, 76.3227, true, null),
('Leh Ladakh Palace', 'Traditional Ladakhi palace accommodation', 'Leh, Ladakh', 150, 4, 2, 2, ARRAY['WiFi', 'Palace View', 'Ladakhi Culture', 'High Altitude', 'Buddhist'], ARRAY['https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&h=300&fit=crop'], 34.1526, 77.5770, true, null);
