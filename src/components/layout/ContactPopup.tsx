"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import Image from "next/image";
import { sendContactEmail } from "@/app/actions/sendEmail";

export function ContactPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Check if already seen in this session
        const hasSeen = sessionStorage.getItem("kandle_popup_seen");
        if (hasSeen) {
            setIsVisible(false);
            return;
        }

        // Show after 3 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, [pathname]);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem("kandle_popup_seen", "true");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        // Map "Book Idea" to 'message' for the email template or 'interest'
        formData.append("interest", "General Inquiry"); // Default
        const message = formData.get("message_input") as string; // I need to name the textarea
        formData.append("message", message);

        await sendContactEmail(formData);

        setIsSubmitting(false);
        setHasSubmitted(true);
        setTimeout(() => {
            handleClose();
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Popup Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative bg-surface border border-white/10 w-full max-w-[440px] max-h-[90vh] p-6 md:p-8 rounded-2xl shadow-2xl overflow-y-auto no-scrollbar"
                    >
                        {/* Decorational Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[60px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 blur-[40px] rounded-full pointer-events-none" />

                        <button
                            type="button"
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full z-10"
                        >
                            <X size={20} />
                        </button>

                        {!hasSubmitted ? (
                            <>
                                <div className="text-center mb-6">
                                    <div className="flex justify-center mb-4">
                                        <Image
                                            src="/images/Kandle Direct Publishing-Logo/Kandle Direct Publishing-Logo-05.png"
                                            alt="Kandle Direct Publishing"
                                            width={300}
                                            height={120}
                                            className="h-24 w-auto object-contain"
                                        />
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Start Your Publishing Journey</h2>
                                    <p className="text-gray-400">
                                        Ready to bring your book to life? Get a free consultation with our publishing experts today.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 ml-1">Name</label>
                                        <input
                                            name="name"
                                            required
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 ml-1">Email</label>
                                        <input
                                            name="email"
                                            required
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 ml-1">Book Idea</label>
                                        <textarea
                                            name="message_input"
                                            placeholder="Tell us a bit about your book..."
                                            rows={3}
                                            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600 resize-none"
                                        />
                                    </div>

                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 group mt-4 shadow-lg shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Get Free Consultation"} {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                                    </button>
                                </form>
                                <p className="text-center text-xs text-gray-600 mt-4">We respect your privacy. No spam, ever.</p>
                            </>
                        ) : (
                            <div className="text-center py-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-6 animate-in zoom-in">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400">
                                    Thank you for reaching out. One of our publishing specialists will be in touch with you shortly.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
