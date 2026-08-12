import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client safely
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// API Endpoint 1: Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// API Endpoint 2: Get AI Country & Language Insights
app.post("/api/gemini/country-insights", async (req, res) => {
  try {
    const { countryName, languages } = req.body;
    if (!countryName) {
      return res.status(400).json({ error: "countryName is required" });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.json({
        fallback: true,
        summary: `${countryName} has a rich linguistic tapestry. Check local language guidelines for travel or business.`,
        travelTips: ["Learn basic greetings in the primary language", "Respect regional dialect variations"],
        historicalContext: "Language distribution has been shaped by historical trade, geography, and migrations."
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `Provide a detailed linguistic guide for the country "${countryName}" (languages: ${JSON.stringify(languages || [])}).
Return JSON with the exact structure:
{
  "summary": "Brief 2-3 sentence overview of the linguistic landscape",
  "historicalContext": "1-2 sentences on how these languages came to be spoken here",
  "travelTips": ["Tip 1", "Tip 2", "Tip 3"],
  "codeSwitchingAndEtiquette": "Advice on polite communication, code-switching, or multi-lingual etiquette",
  "funLinguisticFacts": ["Fact 1", "Fact 2"]
}`,
      config: {
        responseMimeType: "application/json",
      },
    });

    const result = JSON.parse(response.text || "{}");
    res.json(result);
  } catch (error: any) {
    console.error("Error generating country insights:", error);
    res.status(500).json({ error: error.message || "Failed to generate AI insights" });
  }
});

// API Endpoint 2.5: Generate State/Provincial Language Percentage Breakdown
app.post("/api/gemini/state-languages", async (req, res) => {
  try {
    const { countryName, countryCode, subdivisionType } = req.body;
    if (!countryName) {
      return res.status(400).json({ error: "countryName is required" });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.json({
        subdivisionType: subdivisionType || "State/Province",
        states: [
          {
            stateName: `Capital Region (${countryName})`,
            capitalOrCity: "Capital City",
            populationEstimate: "Major Urban Area",
            primaryLanguage: "English",
            percentages: { "English": 75, "Spanish": 15, "French": 10 },
            notes: "Main administrative and commercial center with highest language diversity."
          },
          {
            stateName: `Interior Provinces`,
            capitalOrCity: "Regional Center",
            populationEstimate: "Rural & Suburban",
            primaryLanguage: "Spanish",
            percentages: { "Spanish": 70, "Quechua": 20, "English": 10 },
            notes: "Traditional language heritage preserved across rural communities."
          }
        ]
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `Provide a realistic state/provincial/cantonal language percentage breakdown for the country "${countryName}" (${countryCode}).
List 4 to 6 key states, provinces, cantons, departments, or regions of ${countryName}. For each state, include estimated language percentages (must sum to roughly 100%).

CRITICAL REQUIREMENT: Every language listed in "primaryLanguage", "secondaryLanguage", and keys of the "percentages" object MUST be the EXACT SPECIFIC NAME of a real spoken language (e.g. "Spanish", "Tagalog", "Swahili", "French", "Bhojpuri", "German", "Amharic", "Quechua", "Mandarin Chinese", "Arabic", "Navajo", etc.).
DO NOT use generic placeholder terms such as "Official Language", "National Language", "Official", "Indigenous Language", or "Native Language". Always specify the exact specific language name.

Return JSON with structure:
{
  "subdivisionType": "State" | "Province" | "Canton" | "Department" | "Region" | "Territory",
  "states": [
    {
      "stateName": "Name of state or province",
      "capitalOrCity": "Capital or largest city",
      "populationEstimate": "e.g. 2.5 Million",
      "primaryLanguage": "Specific language name (e.g. French)",
      "secondaryLanguage": "Specific language name (e.g. German)",
      "percentages": { "Specific Language Name 1": 70, "Specific Language Name 2": 20, "Specific Language Name 3": 10 },
      "notes": "1-2 sentences on linguistic context, local dialects, or speaker demographics"
    }
  ]
}`,
      config: {
        responseMimeType: "application/json",
      },
    });

    const result = JSON.parse(response.text || "{}");
    res.json(result);
  } catch (error: any) {
    console.error("Error generating state languages:", error);
    res.status(500).json({ error: error.message || "Failed to generate state languages" });
  }
});

// API Endpoint 3: Generate Custom Phrases
app.post("/api/gemini/phrases", async (req, res) => {
  try {
    const { country, language, situation } = req.body;
    if (!language) {
      return res.status(400).json({ error: "language is required" });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.status(500).json({ error: "Gemini API key is not configured" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `Generate 6 super practical phrases for a traveler or traveler in ${country || 'a country'} using ${language} for situation: "${situation || 'General travel & dining'}".
Return JSON as an array of objects with structure:
[
  {
    "english": "English phrase",
    "native": "Phrase in native script",
    "phonetic": "Easy to pronounce phonetic transliteration",
    "context": "When or how to use this phrase politely"
  }
]`,
      config: {
        responseMimeType: "application/json",
      },
    });

    const result = JSON.parse(response.text || "[]");
    res.json({ phrases: result });
  } catch (error: any) {
    console.error("Error generating phrases:", error);
    res.status(500).json({ error: error.message || "Failed to generate phrases" });
  }
});

// API Endpoint 4: Custom Quiz Generator
app.post("/api/gemini/quiz", async (req, res) => {
  try {
    const { region, difficulty } = req.body;
    const ai = getGeminiClient();
    if (!ai) {
      return res.status(500).json({ error: "Gemini API key is missing" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `Create a 5-question trivia quiz about languages spoken in countries in the region: "${region || 'Global'}", difficulty level: "${difficulty || 'medium'}".
Return JSON array of 5 questions with structure:
[
  {
    "id": 1,
    "question": "Which official language is spoken in X?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctIndex": 0,
    "explanation": "Interesting factual explanation"
  }
]`,
      config: {
        responseMimeType: "application/json",
      },
    });

    const questions = JSON.parse(response.text || "[]");
    res.json({ questions });
  } catch (error: any) {
    console.error("Error generating quiz:", error);
    res.status(500).json({ error: error.message || "Failed to generate quiz" });
  }
});

// API Endpoint 5: Gemini TTS audio generation
app.post("/api/gemini/tts", async (req, res) => {
  try {
    const { text, voiceName } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Text parameter is required" });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.status(500).json({ error: "Gemini API key is missing" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-tts-preview",
      contents: [{ parts: [{ text: `Say clearly: ${text}` }] }],
      config: {
        responseModalities: ["AUDIO" as any],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: voiceName || "Zephyr" },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      res.json({ audioBase64: base64Audio, mimeType: "audio/pcm" });
    } else {
      res.status(500).json({ error: "No audio data returned" });
    }
  } catch (error: any) {
    console.error("Error generating TTS:", error);
    res.status(500).json({ error: error.message || "TTS generation failed" });
  }
});

// API Endpoint 2.8: Search all job sites and recruitment portals for a country
app.post("/api/gemini/job-portals", async (req, res) => {
  try {
    const { countryName, countryCode, searchCategory } = req.body;
    if (!countryName) {
      return res.status(400).json({ error: "countryName is required" });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.json({
        fallback: true,
        countryName,
        portals: [
          {
            name: `Indeed ${countryName}`,
            url: `https://www.indeed.com`,
            category: "General",
            description: `Leading job aggregator serving job seekers and employers across ${countryName}.`,
            targetAudience: "All workforce levels and sectors"
          },
          {
            name: `LinkedIn Jobs (${countryName})`,
            url: `https://www.linkedin.com/jobs`,
            category: "Executive & Professional",
            description: `Primary professional networking and executive recruitment channel in ${countryName}.`,
            targetAudience: "Corporate, management, and tech candidates"
          },
          {
            name: `Glassdoor ${countryName}`,
            url: `https://www.glassdoor.com`,
            category: "General",
            description: `Job postings alongside salary data and company reviews for ${countryName}.`,
            targetAudience: "Mid-level and senior professionals"
          },
          {
            name: `Upwork Remote (${countryName})`,
            url: `https://www.upwork.com`,
            category: "Remote & Freelance",
            description: `Global freelance and remote talent sourcing platform heavily used in ${countryName}.`,
            targetAudience: "Freelancers, virtual assistants, software developers"
          }
        ]
      });
    }

    const categoryConstraint = searchCategory && searchCategory !== 'All' ? `specifically focusing on the "${searchCategory}" category` : '';

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `Search the web and provide a comprehensive list of 10 to 15 real, active job sites, local recruitment portals, niche job boards, executive search channels, government employment sites, and remote worker hubs operating in or serving "${countryName}" (${countryCode}) ${categoryConstraint}.

Include both major national portals and specialized local/niche recruitment boards.

Return JSON object with structure:
{
  "countryName": "${countryName}",
  "portals": [
    {
      "name": "Exact Name of Job Site or Portal",
      "url": "https://actual-website-url.com",
      "category": "General" | "Tech & IT" | "Executive & Professional" | "Remote & Freelance" | "Government" | "Niche & Industry",
      "description": "2-3 sentences explaining what this job site specializes in, its market coverage, and unique candidate pool.",
      "targetAudience": "e.g. Software engineers, BPO workers, Healthcare, Fresh graduates, Civil service"
    }
  ]
}`,
      config: {
        responseMimeType: "application/json",
      },
    });

    const result = JSON.parse(response.text || "{}");
    res.json(result);
  } catch (error: any) {
    console.error("Error fetching job portals:", error);
    res.status(500).json({ error: error.message || "Failed to search job portals" });
  }
});

// Attach Vite middleware for dev or serve production build
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
