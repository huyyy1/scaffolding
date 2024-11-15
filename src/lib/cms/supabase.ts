import { createClient } from '@supabase/supabase-js';
import type { 
  HeroContent, 
  ServiceContent, 
  TestimonialContent, 
  CTAContent,
  CityContent 
} from '@/types/cms';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getHeroContent(): Promise<HeroContent> {
  // If Supabase is not configured, return default content
  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      title: "Professional Cleaning Services for Your Home",
      description: "Experience the difference with SimplyMaid. Our professional cleaners deliver exceptional service, making your space spotless and comfortable.",
      primaryCTA: {
        text: "Book Now",
        href: "/booking",
      },
      secondaryCTA: {
        text: "Learn More",
        href: "/services",
      },
    };
  }

  const { data, error } = await supabase
    .from('hero_content')
    .select('*')
    .single();

  if (error) {
    console.error('Error fetching hero content:', error);
    throw error;
  }

  return data;
}

// Rest of the file remains unchanged