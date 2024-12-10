import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { useToast } from "@/components/ui/use-toast";
import { getChatResponse } from "@/utils/gemini";
import { Button } from "@/components/ui/button";
import { MessageSquarePlus } from "lucide-react";

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
      setMessages((prev) => [...prev, { content, isBot: false }]);

      const response = await getChatResponse(content);
      
      setMessages((prev) => [
        ...prev,
        {
          content: response,
          isBot: true,
        },
      ]);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Xəta baş verdi",
        description: error instanceof Error ? error.message : "Bilinməyən xəta baş verdi",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    setMessages([
      {
        content: "Salam! Mən UnecAI-yəm. Sizə necə kömək edə bilərəm?",
        isBot: true,
      },
    ]);
  };

  return (
    <div className="flex h-screen flex-col bg-background p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary">UnecAI</h1>
          <p className="text-sm text-muted-foreground">
            Süni intellekt köməkçiniz
          </p>
        </div>
        <Button
          onClick={handleNewChat}
          variant="outline"
          className="gap-2 transition-all hover:bg-primary hover:text-primary-foreground"
        >
          <MessageSquarePlus className="h-4 w-4" />
          Yeni söhbət
        </Button>
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