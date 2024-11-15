import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getServices } from "@/lib/cms/supabase";
import type { ServiceContent } from "@/types/cms";

// Force static rendering for marketing pages
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: "Our Services | SimplyMaid",
  description: "Professional cleaning services for homes and businesses. Choose from our range of cleaning services tailored to your needs.",
  openGraph: {
    title: "Our Services | SimplyMaid",
    description: "Professional cleaning services for homes and businesses. Choose from our range of cleaning services tailored to your needs.",
    type: "website",
    url: "https://simplymaid.com/services",
  },
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Cleaning Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose from our range of professional cleaning services. All our
            services come with our satisfaction guarantee.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: ServiceContent }) {
  return (
    <div
      className={`rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 ${
        service.popular
          ? "bg-primary text-primary-foreground ring-primary"
          : "bg-card"
      }`}
    >
      <h3
        className={`text-lg font-semibold leading-8 ${
          service.popular ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {service.name}
      </h3>
      <p className="mt-4 text-sm leading-6">{service.description}</p>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-4xl font-bold tracking-tight">{service.price}</span>
      </p>
      <ul
        className={`mt-8 space-y-3 text-sm leading-6 ${
          service.popular
            ? "text-primary-foreground/90"
            : "text-muted-foreground"
        }`}
      >
        {service.features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <svg
              className={`h-6 w-5 flex-none ${
                service.popular ? "text-primary-foreground" : "text-primary"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link href="/booking" className="mt-8 block">
        <Button
          variant={service.popular ? "secondary" : "default"}
          className="w-full"
        >
          Book Now
        </Button>
      </Link>
    </div>
  );
}