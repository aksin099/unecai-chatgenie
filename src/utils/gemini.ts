import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBv52x2NqpxSB0F5len8NUmrQWV3la7hpc");

export const getChatResponse = async (message: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API xətası:", error);
    if (error instanceof Error && error.message.includes("API key")) {
      throw new Error("API açarı etibarsızdır. Zəhmət olmasa sistem administratoru ilə əlaqə saxlayın.");
    }
    throw new Error("Mesajınız göndərilə bilmədi. Xahiş edirik yenidən cəhd edin.");
  }
};