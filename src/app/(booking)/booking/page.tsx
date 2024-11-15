"use client";

import { useBookingStore } from '@/lib/store/booking-store';
import { ServiceSelection } from '@/components/booking/service-selection';
import { DateTimeSelection } from '@/components/booking/datetime-selection';
import { LocationDetails } from '@/components/booking/location-details';
import { Extras } from '@/components/booking/extras';
import { Summary } from '@/components/booking/summary';

interface BookingPageProps {
  steps?: {
    service?: boolean;
    datetime?: boolean;
    location?: boolean;
    extras?: boolean;
    summary?: boolean;
  };
  className?: string;
  heading?: {
    title: string;
    description: string;
  };
}

export default function BookingPage({
  steps = {
    service: true,
    datetime: true,
    location: true,
    extras: true,
    summary: true,
  },
  className,
  heading = {
    title: "Book Your Cleaning Service",
    description: "Complete the form below to schedule your cleaning service",
  },
}: BookingPageProps) {
  const step = useBookingStore((state) => state.step);

  return (
    <div className={cn("container mx-auto px-4 py-8", className)}>
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{heading.title}</h1>
          <p className="mt-2 text-muted-foreground">
            {heading.description}
          </p>
        </div>

        {steps.service && step === 1 && <ServiceSelection />}
        {steps.datetime && step === 2 && <DateTimeSelection />}
        {steps.location && step === 3 && <LocationDetails />}
        {steps.extras && step === 4 && <Extras />}
        {steps.summary && step === 5 && <Summary />}
      </div>
    </div>
  );
}