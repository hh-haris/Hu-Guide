import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Send, RotateCcw, Bot } from 'lucide-react';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type ChatMessage = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

const HuBot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content:
        "Salam! 🌟\nI am huBot, your smart assistant, here to guide and support you throughout the SHS process. I’m still under development, but as soon as I’m ready, my creators Haris Habib and Abdullah Saleem will update you in the group.\n\nWishing you the very best on your journey toward SHS success 🚀",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim() || isTyping) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content:
          "Salam! 🌟\nI am huBot, your smart assistant, here to guide and support you throughout the SHS process. I’m still under development, but as soon as I’m ready, my creators Haris Habib and Abdullah Saleem will update you in the group.\n\nWishing you the very best on your journey toward SHS success 🚀",
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  }, [inputValue, isTyping]);

  const handleReset = useCallback(() => {
    setMessages([
      {
        id: '1',
        content: "Hello! I'm huBot, your personalized assistant for the SHS Scholarship. I'm currently under development. Whenever I'm available, you'll be informed via the WhatsApp group by my creators Haris Habib and Abdullah Saleem.",
        role: 'assistant',
        timestamp: new Date(),
      }
    ]);
    setInputValue('');
    setIsTyping(false);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="pt-14 bg-brand-light-gray dark:bg-gray-900">
        <div className="mobile-container py-3">
          <div className="flex items-center text-sm font-primary">
            <Link to="/" className="text-muted-foreground hover:text-brand-orange smooth-transition">
              Home
            </Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <span className="text-brand-orange font-medium">huBot</span>
          </div>
        </div>
      </div>

      <main className="pb-8">
        <div className="mobile-container pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            {/* Chat Interface (ChatGPT-like) */}
            <div className="flex h-[600px] w-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm">
              {/* Header */}
              <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-brand-orange" />
                    <span className="font-secondary text-lg font-bold">
                      <span className="text-brand-orange">hu</span>
                      <span className="text-brand-blue">Bot</span>
                    </span>
                  </div>
                  <div className="h-4 w-px bg-border" />
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-yellow-500" />
                    <span className="text-muted-foreground text-xs">Under Development</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={handleReset} className="h-8 px-2">
                  <RotateCcw className="size-4" />
                  <span className="ml-1">Reset</span>
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto">
                <div className="mx-auto max-w-2xl px-4 py-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "w-full rounded-lg px-4 py-3 text-sm",
                        message.role === 'assistant' ? 'bg-muted' : 'bg-background border'
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-brand-orange to-brand-blue flex items-center justify-center">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="whitespace-pre-wrap">{message.content}</div>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <div className="w-full rounded-lg px-4 py-3 text-sm bg-muted">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-brand-orange rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        <span>Thinking…</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Input */}
              <div className="border-t p-4">
                <form onSubmit={handleSubmit} className="mx-auto max-w-2xl flex gap-2">
                  <Textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Send a message..."
                    disabled={isTyping}
                    className="min-h-[44px] max-h-32 resize-none"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(e);
                      }
                    }}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white h-11 w-11 flex-shrink-0"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default HuBot;