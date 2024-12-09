import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  content: string;
  isBot: boolean;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Salam! Mən UnecAI-yəm. Sizə necə kömək edə bilərəm?",
      isBot: true,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      // Add user message
      setMessages((prev) => [...prev, { content, isBot: false }]);

      // TODO: Implement Gemini API call here
      // For now, we'll simulate a response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            content: "Bu xüsusiyyət tezliklə əlavə olunacaq.",
            isBot: true,
          },
        ]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Xəta baş verdi",
        description: "Mesajınız göndərilə bilmədi. Yenidən cəhd edin.",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen flex-col bg-background p-4">
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold text-primary">UnecAI</h1>
        <p className="text-sm text-muted-foreground">
          Süni intellekt köməkçiniz
        </p>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            content={message.content}
            isBot={message.isBot}
          />
        ))}
      </div>

      <div className="pt-4">
        <ChatInput onSend={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};

export default Index;