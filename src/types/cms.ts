export interface HeroContent {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}

export interface ServiceContent {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  popular: boolean;
}

export interface TestimonialContent {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface CTAContent {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}

export interface CityContent {
  id: string;
  name: string;
  state: string;
  slug: string;
  metaDescription: string;
  basePrice: number;
  popularServices: string[];
  features: string[];
  suburbs: string[];
}