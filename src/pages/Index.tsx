import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { useToast } from "@/components/ui/use-toast";
import { getChatResponse } from "@/utils/gemini";
import { Button } from "@/components/ui/button";
import { MessageSquarePlus, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AboutDialog } from "@/components/AboutDialog";

interface Message {
  content: string;
  isBot: boolean;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Salam! Mən UNECAI-yəm. Sizə necə kömək edə bilərəm?",
      isBot: true,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
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
        content: "Salam! Mən UNECAI-yəm. Sizə necə kömək edə bilərəm?",
        isBot: true,
      },
    ]);
  };

  const handleOpenWebsite = () => {
    window.open("https://unec.edu.az", "_blank");
  };

  const handleContact = () => {
    window.location.href = "mailto:unec.ai.az@gmail.com";
  };

  return (
    <div className="flex h-screen flex-col bg-background p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary">UNECAI</h1>
          <p className="text-sm text-muted-foreground">
            Süni intellekt köməkçiniz
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={handleNewChat}
            variant="outline"
            className="gap-2 transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <MessageSquarePlus className="h-4 w-4" />
            Yeni söhbət
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setShowAbout(true)}>
                Haqqında
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleOpenWebsite}>
                Rəsmi sayt
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleContact}>
                Əlaqə
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex-1 space-y-4 overflow-y-auto pb-4">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              content={message.content}
              isBot={message.isBot}
            />
          ))}
        </div>

        <div className="mx-auto w-full max-w-3xl">
          <ChatInput onSend={handleSendMessage} disabled={isLoading} />
        </div>
      </div>

      <AboutDialog open={showAbout} onOpenChange={setShowAbout} />
    </div>
  );
};

export default Index;