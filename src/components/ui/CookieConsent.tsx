"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem("kandle-cookie-consent");
        if (!consent) {
            // Small delay to not overwhelm valid users immediately
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("kandle-cookie-consent", "true");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 max-w-sm w-[calc(100%-2rem)]"
                >
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-white font-bold text-lg mb-2">We use cookies</h3>
                            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                To ensure you get the best experience on our website. By continuing to use our site, you agree to our
                                <Link href="/privacy-policy" className="text-white underline decoration-accent decoration-2 underline-offset-4 hover:text-accent ml-1 transition-colors">
                                    Privacy Policy
                                </Link>.
                            </p>

                            <div className="flex gap-4">
                                <button
                                    onClick={acceptCookies}
                                    className="flex-1 px-4 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-accent hover:text-white transition-colors"
                                >
                                    Accept
                                </button>
                                <button
                                    onClick={() => setIsVisible(false)} // Just close without saving for now, or could implement "Decline" logic
                                    className="px-4 py-3 bg-transparent border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Glossy overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
