import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { TestimonialContent } from "@/types/cms";

interface TestimonialsProps {
  testimonials?: TestimonialContent[];
}

const defaultTestimonials: TestimonialContent[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "The best cleaning service I've ever used. Professional, thorough, and reliable.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Business Owner",
    content: "Outstanding commercial cleaning service. They've transformed our office space.",
    avatar: "https://i.pravatar.cc/150?u=michael",
    rating: 5,
  },
  {
    id: "3",
    name: "Emma Davis",
    role: "Apartment Resident",
    content: "Consistent quality and attention to detail. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=emma",
    rating: 5,
  },
];

export function Testimonials({ testimonials = defaultTestimonials }: TestimonialsProps) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            What our customers say
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col justify-between rounded-2xl bg-card p-8"
              >
                <div className="flex items-center gap-x-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-4 text-lg leading-6 text-card-foreground">
                  {testimonial.content}
                </p>
                <div className="mt-6 flex items-center gap-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-card-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}