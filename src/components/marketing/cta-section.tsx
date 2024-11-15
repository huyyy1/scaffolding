import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { CTAContent } from "@/types/cms";

interface CTASectionProps {
  content?: CTAContent;
}

const defaultContent: CTAContent = {
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
};

export function CTASection({ content = defaultContent }: CTASectionProps) {
  return (
    <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {content.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          {content.description}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href={content.primaryCTA.href}>
            <Button size="lg">{content.primaryCTA.text}</Button>
          </Link>
          <Link href={content.secondaryCTA.href}>
            <Button variant="outline" size="lg">
              {content.secondaryCTA.text}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}