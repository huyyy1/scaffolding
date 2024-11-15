import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateCityContent(city: string) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a professional content writer specializing in cleaning services.",
      },
      {
        role: "user",
        content: `Generate SEO-optimized content about cleaning services in ${city}. Include:
          - Local cleaning needs and challenges
          - Popular services in the area
          - Specific cleaning tips for local conditions
          - Why professional cleaning is important in ${city}`,
      },
    ],
    model: "gpt-4-turbo-preview",
  });

  return completion.choices[0].message.content;
}

export async function generateCleaningGuide(topic: string) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are an expert in cleaning techniques and best practices.",
      },
      {
        role: "user",
        content: `Create a comprehensive cleaning guide about ${topic}. Include:
          - Step-by-step instructions
          - Required materials
          - Professional tips
          - Common mistakes to avoid
          - When to call professionals`,
      },
    ],
    model: "gpt-4-turbo-preview",
  });

  return completion.choices[0].message.content;
}