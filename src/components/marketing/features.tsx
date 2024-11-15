import {
  Shield,
  Clock,
  UserCheck,
  Sparkles,
  ThumbsUp,
  Heart,
} from "lucide-react";

interface Feature {
  name: string;
  description: string;
  icon: React.ElementType;
}

interface FeaturesProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    name: "Trusted & Verified",
    description: "All cleaners are background checked and verified",
    icon: Shield,
  },
  {
    name: "Flexible Scheduling",
    description: "Book cleanings at times that suit you",
    icon: Clock,
  },
  {
    name: "Professional Staff",
    description: "Experienced and trained cleaning professionals",
    icon: UserCheck,
  },
  {
    name: "Quality Service",
    description: "Thorough cleaning with attention to detail",
    icon: Sparkles,
  },
  {
    name: "Satisfaction Guaranteed",
    description: "100% satisfaction or we'll re-clean for free",
    icon: ThumbsUp,
  },
  {
    name: "Customer Care",
    description: "Dedicated support for all your needs",
    icon: Heart,
  },
];

export function Features({ features = defaultFeatures }: FeaturesProps) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Why Choose Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need in a cleaning service
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Professional cleaning services tailored to your needs. We provide
            reliable, thorough, and efficient cleaning solutions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon
                    className="h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}