/**
 * Cleaning Guide Page
 * Displays comprehensive cleaning guides and tips.
 * 
 * Route: /guides/[slug]
 * Example: /guides/deep-cleaning-kitchen
 * 
 * Features:
 * - AI-generated content
 * - Rich media integration
 * - Related guides
 * - SEO optimization
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateCleaningGuide } from "@/lib/ai/openai";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} - Cleaning Guide | SimplyMaid`,
    description: `Professional cleaning guide for ${title.toLowerCase()}. Expert tips, techniques, and best practices.`,
  };
}

const guides = [
  "deep-cleaning-kitchen",
  "bathroom-sanitization",
  "carpet-care",
  // Add more guides
];

export async function generateStaticParams() {
  return guides.map((slug) => ({
    slug,
  }));
}

export default async function GuidePage({ params }: Props) {
  if (!guides.includes(params.slug)) {
    return notFound();
  }

  const title = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const content = await generateCleaningGuide(title);

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose prose-lg mx-auto">
        <h1>{title}</h1>
        <div className="mt-6">{content}</div>
      </article>
    </div>
  );
}