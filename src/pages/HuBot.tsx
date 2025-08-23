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
  const [messages, setMessages] = useState<ChatMessage[]>([]);
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
        content: "I am huBot, your personalized assistance to SHS Scholarship. I am under development. Whenever I am available, you will be informed via WhatsApp group by my creators Haris Habib and Abdullah Saleem.",
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  }, [inputValue, isTyping]);

  const handleReset = useCallback(() => {
    setMessages([]);
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
            className="max-w-4xl mx-auto"
          >
            {/* Chat Interface */}
            <div className="flex h-[70vh] w-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm">
              {/* Header */}
              <div className="flex items-center justify-between border-b bg-muted/50 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Bot className="h-6 w-6 text-brand-orange" />
                  <div>
                    <span className="font-secondary text-xl font-bold">
                      <span className="text-brand-orange">hu</span>
                      <span className="text-brand-blue">Bot</span>
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="size-2 rounded-full bg-yellow-500" />
                      <span className="text-muted-foreground text-xs">Under Development</span>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={handleReset}
                  className="h-9 w-9 hover:bg-muted"
                  aria-label="Reset conversation"
                >
                  <RotateCcw className="size-4" />
                </Button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6">
                {messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                    <Bot className="h-16 w-16 text-muted-foreground/50" />
                    <div className="space-y-2">
                      <h3 className="font-secondary text-xl font-semibold text-muted-foreground">
                        <span className="text-brand-orange">hu</span>
                        <span className="text-brand-blue">Bot</span>
                      </h3>
                      <p className="text-muted-foreground text-sm max-w-md">
                        Your personalized assistant for SHS Scholarship. Ask me anything to get started!
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                          "flex gap-4",
                          message.role === 'user' ? 'justify-end' : 'justify-start'
                        )}
                      >
                        {message.role === 'assistant' && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-orange to-brand-blue flex items-center justify-center flex-shrink-0 mt-1">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                        )}
                        
                        <div
                          className={cn(
                            "max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                            message.role === 'user'
                              ? 'bg-brand-orange text-white'
                              : 'bg-muted text-foreground border'
                          )}
                        >
                          {message.content}
                        </div>

                        {message.role === 'user' && (
                          <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-xs font-bold">U</span>
                          </div>
                        )}
                      </motion.div>
                    ))}
                    
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-4 justify-start"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-orange to-brand-blue flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-muted border rounded-2xl px-4 py-3">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-brand-orange rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-2 h-2 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="border-t p-4">
                <form onSubmit={handleSubmit} className="flex gap-3 max-w-4xl mx-auto">
                  <div className="flex-1 relative">
                    <Textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask me anything about SHS..."
                      disabled={isTyping}
                      className="min-h-[52px] max-h-32 resize-none pr-12 rounded-xl border-2 focus:border-brand-orange"
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
                      className="absolute right-2 bottom-2 h-8 w-8 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-lg"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
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