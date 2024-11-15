import { Metadata } from 'next';
import { Hero } from '@/components/marketing/hero';
import { Features } from '@/components/marketing/features';
import { Testimonials } from '@/components/marketing/testimonials';
import { CTASection } from '@/components/marketing/cta-section';

// Force static rendering for marketing pages
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

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

// Default content for static rendering
const defaultContent = {
  hero: {
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
  },
  features: [
    {
      name: "Trusted & Verified",
      description: "All cleaners are background checked and verified",
      icon: "Shield",
    },
    {
      name: "Flexible Scheduling",
      description: "Book cleanings at times that suit you",
      icon: "Clock",
    },
    {
      name: "Professional Staff",
      description: "Experienced and trained cleaning professionals",
      icon: "UserCheck",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "The best cleaning service I've ever used. Professional, thorough, and reliable.",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      rating: 5,
    },
  ],
  cta: {
    title: "Ready for a cleaner space?",
    description: "Book your cleaning service today and experience the difference of professional cleaning.",
    primaryCTA: {
      text: "Book Now",
      href: "/booking",
    },
    secondaryCTA: {
      text: "Learn More",
      href: "/services",
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero content={defaultContent.hero} />
      <Features features={defaultContent.features} />
      <Testimonials testimonials={defaultContent.testimonials} />
      <CTASection content={defaultContent.cta} />
    </main>
  );
}