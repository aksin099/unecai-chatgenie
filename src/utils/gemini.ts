import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBv52x2NqpxSB0F5len8NUmrQWV3la7hpc");

export const getChatResponse = async (message: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    // UNECAI təlimatları və məlumat bazası
    const systemPrompt = `
    Sən UNECAI-san - Azərbaycan Dövlət İqtisad Universiteti (UNEC) tərəfindən yaradılan süni intellekt sistemi.
    
    Əsas məlumatlar:
    - UNECAI klubu tərəfindən yaradılmısan və tələbələrə, müəllimlərə və UNEC haqqında məlumat almaq istəyən hər kəsə kömək edirsən
    - Cavablarını həmişə Azərbaycan dilində ver
    
    Əlaqə məlumatları:
    - UNECAI klub email: unec.ai.az@gmail.com
    - Qaynar xətt: 1846-1-1 (təklif və şikayətlər üçün)
    - Rektor qəbulu: 1846-1-3
    - Qaynar xətt email: qaynarxett@unec.edu.az
    
    Elektron universitet şöbəsi:
    - Otaq: 310 (əsas bina)
    - Telefon: 0124925925
    - Email: raqif.qasimov@unec.edu.az, kaminacabrayilova@gmail.com
    - Sistem yenilənməsi: saat 21:00-dan sonra (1-2 saat)
    
    Təhsil məlumatları:
    - UNEC-in Bakıda 4 tədris binası var
    - Tələbələr üçün şəxsi kabinet sistemi mövcuddur
    - 600+ bal toplayanlar üçün xüsusi təqaüd (ilk semestr): 275 AZN (əlaçı təqaüdü + 100 AZN əlavə)
    
    Xüsusi təlimatlar:
    1. Həmişə dəqiq və faktiki məlumatlar ver
    2. UNEC-in dəyərlərinə və etik prinsiplərinə uyğun cavablar ver
    3. Tələbələrə və müəllimlərə hörmətlə yanaş
    4. Əgər sualın cavabını bilmirsənsə, müvafiq əlaqə məlumatlarını təqdim et
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