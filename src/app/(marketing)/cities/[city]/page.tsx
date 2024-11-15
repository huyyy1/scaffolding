import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/lib/cms/supabase";

interface Props {
  params: {
    city: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = await getCityBySlug(params.city);
  
  if (!city) return notFound();

  return {
    title: `Cleaning Services in ${city.name} | SimplyMaid`,
    description: city.metaDescription,
    openGraph: {
      title: `Cleaning Services in ${city.name} | SimplyMaid`,
      description: city.metaDescription,
      type: "website",
      url: `https://simplymaid.com/cities/${params.city}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const city = await getCityBySlug(params.city);
  
  if (!city) return notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        Cleaning Services in {city.name}
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {city.popularServices.map((service) => (
          <div key={service} className="p-6 rounded-lg bg-card">
            <h2 className="text-xl font-semibold mb-4">{service}</h2>
            <p className="text-muted-foreground mb-4">
              Professional {service.toLowerCase()} services in {city.name}.
            </p>
            <p className="text-2xl font-bold mb-4">
              From ${city.basePrice}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us in {city.name}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {city.features.map((feature) => (
            <div key={feature} className="flex items-start gap-4">
              <svg
                className="h-6 w-6 text-primary flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}