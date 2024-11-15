/**
 * Content Dashboard
 * Manage and generate content for the platform.
 * 
 * Route: /dashboard/content
 * 
 * Features:
 * - AI content generation
 * - Content editing
 * - SEO optimization tools
 * - Content performance metrics
 */

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { generateCityContent, generateCleaningGuide } from "@/lib/ai/openai";

export default function ContentDashboard() {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const generateContent = async (type: "city" | "guide", prompt: string) => {
    setLoading(true);
    try {
      const generated = type === "city" 
        ? await generateCityContent(prompt)
        : await generateCleaningGuide(prompt);
      setContent(generated || "");
    } catch (error) {
      console.error("Error generating content:", error);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Content Management</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="p-6 bg-card rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Generate City Content</h2>
          <Input
            placeholder="Enter city name"
            className="mb-4"
          />
          <Button
            onClick={() => generateContent("city", "Sydney")}
            disabled={loading}
          >
            Generate
          </Button>
        </div>

        <div className="p-6 bg-card rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Generate Cleaning Guide</h2>
          <Input
            placeholder="Enter guide topic"
            className="mb-4"
          />
          <Button
            onClick={() => generateContent("guide", "Kitchen Deep Cleaning")}
            disabled={loading}
          >
            Generate
          </Button>
        </div>
      </div>

      {content && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Generated Content</h3>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[300px]"
          />
        </div>
      )}
    </div>
  );
}