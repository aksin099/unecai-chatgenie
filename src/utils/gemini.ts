import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBPDjB0qOQZb4bQZTgv-pXn9VDh3wvs7P4");

export const getChatResponse = async (message: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API xətası:", error);
    throw new Error("Mesajınız göndərilə bilmədi. Xahiş edirik yenidən cəhd edin.");
  }
};