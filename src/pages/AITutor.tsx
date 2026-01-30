import { useState, useRef, useEffect } from "react";
import { Send, User, Bot, Sparkles } from "lucide-react";

const AITutor = () => {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "Hello! I'm your AI Lumina Tutor. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Mock bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: `I've analyzed your question: "${userMsg.content}". In the context of your current course, this relates to section 4.1. Would you like me to explain that in more detail?`,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <main className="flex-1 w-full flex flex-col overflow-hidden">
        <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col bg-card shadow-lg border-x border-border md:my-4 md:rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-border bg-card flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Bot />
              </div>
              <div>
                <h2 className="font-bold">Lumina AI Tutor</h2>
                <div className="flex items-center gap-1.5 text-[10px] text-green-500 font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Online
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
              <Sparkles className="w-3 h-3" />
              AI Powered Support
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-3 max-w-[80%] ${
                    m.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {m.role === "user" ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                  <div
                    className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-muted/50 rounded-tl-none border border-border"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-card shrink-0">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything about your courses..."
                className="w-full py-4 pl-6 pr-14 rounded-2xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
              />
              <button
                onClick={handleSend}
                className="absolute right-2 top-2 bottom-2 px-4 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-center text-muted-foreground mt-3">
              Learn faster with AI-powered tutoring. AI can make mistakes,
              verify important information.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AITutor;
