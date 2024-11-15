/**
 * Suburb-specific Page
 * Displays cleaning services and information for specific suburbs.
 * 
 * Route: /cities/[city]/[suburb]
 * Example: /cities/sydney/bondi
 * 
 * Features:
 * - Dynamic pricing based on location
 * - Local cleaner profiles
 * - Suburb-specific content
 * - SEO optimization
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities } from "@/lib/content/cities";

interface Props {
  params: {
    city: string;
    suburb: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = cities.find((c) => 
    c.name.toLowerCase() === params.city.toLowerCase()
  );
  
  if (!city) return notFound();
  
  const suburb = city.suburbs.find((s) => 
    s.toLowerCase() === params.suburb.toLowerCase()
  );
  
  if (!suburb) return notFound();

  return {
    title: `Cleaning Services in ${suburb}, ${city.name} | SimplyMaid`,
    description: `Professional home and office cleaning services in ${suburb}, ${city.name}. Book trusted local cleaners with SimplyMaid.`,
  };
}

export async function generateStaticParams() {
  return cities.flatMap((city) =>
    city.suburbs.map((suburb) => ({
      city: city.name.toLowerCase(),
      suburb: suburb.toLowerCase(),
    }))
  );
}

export default function SuburbPage({ params }: Props) {
  const city = cities.find((c) => 
    c.name.toLowerCase() === params.city.toLowerCase()
  );
  
  if (!city) return notFound();
  
  const suburb = city.suburbs.find((s) => 
    s.toLowerCase() === params.suburb.toLowerCase()
  );
  
  if (!suburb) return notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        Cleaning Services in {suburb}, {city.name}
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {city.popularServices.map((service) => (
          <div key={service} className="p-6 rounded-lg bg-card">
            <h2 className="text-xl font-semibold mb-4">{service}</h2>
            <p className="text-muted-foreground mb-4">
              Professional {service.toLowerCase()} services in {suburb}.
            </p>
            <p className="text-2xl font-bold mb-4">
              From ${city.basePrice}
            </p>
            {/* Add booking button and more details */}
          </div>
        ))}
      </div>
    </div>
  );
}