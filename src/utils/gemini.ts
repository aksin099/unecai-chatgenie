import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBv52x2NqpxSB0F5len8NUmrQWV3la7hpc");

export const getChatResponse = async (message: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    // UNECAI təlimatları
    const systemPrompt = `
    Sən UNECAI-san - Azərbaycan Dövlət İqtisad Universiteti (UNEC) tərəfindən yaradılan süni intellekt sistemi.
    Sənin məqsədin tələbələrə və müəllimlərə kömək etməkdir.
    Cavablarını Azərbaycan dilində ver.
    Universitet, təhsil və elm mövzularında daha dərin biliyə maliksən.
    UNEC-in dəyərlərinə və etik prinsiplərinə uyğun cavablar ver.
    `;

    const fullPrompt = `${systemPrompt}\n\nİstifadəçi: ${message}\nUNECAI:`;
    
    const result = await model.generateContent(fullPrompt);
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