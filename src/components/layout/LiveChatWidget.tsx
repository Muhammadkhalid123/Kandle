"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Paperclip, Smile } from "lucide-react";

export function LiveChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
        { text: "Welcome to Kandle Direct Publishing! 👋", isBot: true },
        { text: "How can we help you bring your book to life today?", isBot: true }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isTyping]);

    // Auto-open once per session after 5 seconds
    useEffect(() => {
        const hasOpened = sessionStorage.getItem("kandle_chat_opened");
        if (hasOpened) return;

        const timer = setTimeout(() => {
            setIsOpen(true);
            sessionStorage.setItem("kandle_chat_opened", "true");
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        // Add user message
        const userMsg = inputValue;
        setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
        setInputValue("");
        setIsTyping(true);

        // Simulate Bot Response
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [
                ...prev,
                { text: "Thanks for reaching out! One of our publishing specialists is reviewing your query and will be with you shortly.", isBot: true }
            ]);
        }, 2000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end pointer-events-none">
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-[#1A1A1A] border border-white/10 w-[90vw] md:w-[380px] h-[500px] md:h-[600px] rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col mb-4 origin-bottom-right"
                    >
                        {/* Header */}
                        <div className="bg-accent p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                                        K
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-accent rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">Kandle Support</h3>
                                    <p className="text-white/80 text-xs">Typically replies instantly</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors p-1"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#121212]">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.isBot
                                            ? "bg-white/10 text-gray-200 rounded-tl-none"
                                            : "bg-accent text-white rounded-tr-none"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                                        <motion.div
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
                                            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                        />
                                        <motion.div
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                                            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                        />
                                        <motion.div
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                                            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                        />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-[#1A1A1A] border-t border-white/10">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="relative"
                            >
                                <input
                                    className="w-full bg-black/30 text-white placeholder-gray-500 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-1 focus:ring-accent border border-white/5"
                                    placeholder="Type a message..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent text-white rounded-full hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={16} />
                                </button>
                            </form>
                            <div className="flex justify-center mt-2">
                                <span className="text-[10px] text-gray-600 uppercase font-bold tracking-widest flex items-center gap-1">
                                    <span>Powered by</span> <span className="text-gray-500">Kandle Chat</span>
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white shadow-lg shadow-accent/20 hover:bg-orange-600 transition-colors pointer-events-auto relative z-[60]"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X size={28} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageCircle size={28} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Notification Badge */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0B0B0B] animate-bounce" />
                )}
            </motion.button>
        </div>
    );
}
