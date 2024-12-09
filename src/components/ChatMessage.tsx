import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  isBot: boolean;
}

export const ChatMessage = ({ content, isBot }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full animate-message-fade-in",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-4 py-2 shadow-sm",
          isBot
            ? "bg-secondary text-secondary-foreground"
            : "bg-primary text-primary-foreground"
        )}
      >
        {content}
      </div>
    </div>
  );
};