"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
    { question: "Do I keep my book rights?", answer: "Absolutely. We are a service agency, not a publisher. You retain 100% of your royalties and creative control." },
    { question: "How long is the process?", answer: "Typical turnaround for a full editing + design package is 4-6 weeks, depending on manuscript length." },
    { question: "Do you handle distribution?", answer: "We set you up on IngramSpark and KDP so you control your accounts, but we handle all the technical file uploads." },
    { question: "What genres do you work with?", answer: "Everything from detailed non-fiction diagrams to high-fantasy novels. Our design team adapts to your specific genre." },
    { question: "Can I just order cover design?", answer: "Yes! Our services are à la carte. Pick exactly what you need." },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-card py-32 px-6 border-t border-border">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-[8vw] md:text-6xl font-black uppercase text-primary leading-none mb-20 text-center">
                    Common<br />Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-border">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center py-8 text-left group"
                            >
                                <span className="text-xl md:text-3xl font-bold uppercase text-primary group-hover:text-accent transition-colors">
                                    {faq.question}
                                </span>
                                <span className={`transition-transform duration-300 ${openIndex === i ? "rotate-45" : "rotate-0"}`}>
                                    <Plus size={32} className="text-accent" />
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-8 text-lg text-secondary leading-relaxed max-w-2xl">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
