import { Metadata } from 'next';
import { Hero } from '@/components/marketing/hero';
import { Features } from '@/components/marketing/features';
import { Testimonials } from '@/components/marketing/testimonials';
import { CTASection } from '@/components/marketing/cta-section';
import { 
  getHeroContent, 
  getFeatures, 
  getTestimonials, 
  getCTAContent 
} from '@/lib/cms/supabase';

// Force static rendering for marketing pages
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

interface HomePageProps {
  metadata?: Metadata;
  sections?: {
    hero?: boolean;
    features?: boolean;
    testimonials?: boolean;
    cta?: boolean;
  };
}

export const metadata: Metadata = {
  title: 'SimplyMaid - Professional Home Cleaning Services',
  description: 'Experience exceptional cleaning services with SimplyMaid. Book professional cleaners for your home or office today.',
  openGraph: {
    title: 'SimplyMaid - Professional Home Cleaning Services',
    description: 'Experience exceptional cleaning services with SimplyMaid. Book professional cleaners for your home or office today.',
    type: 'website',
    url: 'https://simplymaid.com',
  },
};

export default async function Home({ 
  sections = {
    hero: true,
    features: true,
    testimonials: true,
    cta: true,
  }
}: HomePageProps) {
  // Fetch content only if section is enabled
  const [heroContent, features, testimonials, ctaContent] = await Promise.all([
    sections.hero ? getHeroContent().catch(() => null) : null,
    sections.features ? getFeatures().catch(() => null) : null,
    sections.testimonials ? getTestimonials().catch(() => null) : null,
    sections.cta ? getCTAContent().catch(() => null) : null,
  ]);

  return (
    <>
      {sections.hero && <Hero content={heroContent} />}
      {sections.features && features && <Features features={features} />}
      {sections.testimonials && testimonials && <Testimonials testimonials={testimonials} />}
      {sections.cta && ctaContent && <CTASection content={ctaContent} />}
    </>
  );
}