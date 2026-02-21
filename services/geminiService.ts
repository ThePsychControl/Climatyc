
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const getPolicyAdvice = async (userPrompt: string) => {
  const ai = getAIClient();
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are the Climatyc Policy & Research Advisor. 
    Climatyc is a professional youth-led climate organization that focuses on:
    1. Action (Audits, practical implementation)
    2. Research (Data collection, documentation)
    3. Policy (Legislative writing, white papers)
    4. Diplomacy (MUN-style summits, negotiations)

    Your goal is to help students turn their general climate interest into specific, documented work. 
    Avoid generic activist slogans. Instead, suggest specific research methodologies, policy frameworks (like the Paris Agreement or local laws), or audit structures. 
    Be professional, academic, yet encouraging to young researchers.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to the Climate Advisor. Please check your connection.";
  }
};
