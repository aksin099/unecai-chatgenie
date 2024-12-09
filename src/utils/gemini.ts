import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDIMCJnXTMOzyK86VUHeSPHyUTQKAw5xfE");

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