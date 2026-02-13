"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ {
    question: string;
    answer: string;
}

interface FAQClientProps {
    faqs: FAQ[];
}

export default function FAQClient({ faqs }: FAQClientProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <article className="bg-background text-primary min-h-screen pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="mb-16 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-tight mb-6">
                        Frequently Asked Questions About{" "}
                        <span className="text-accent">Self Publishing</span> and Amazon KDP
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Get expert answers to common questions about self-publishing, Amazon KDP, royalties, and book distribution.
                    </p>
                </header>

                {/* FAQ List */}
                <section className="space-y-4">
                    {faqs.map((faq, index) => (
                        <article
                            key={index}
                            className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors"
                            itemScope
                            itemProp="mainEntity"
                            itemType="https://schema.org/Question"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left p-6 md:p-8 flex justify-between items-start gap-4 group"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <h3
                                    className="text-xl md:text-2xl font-bold group-hover:text-accent transition-colors pr-4"
                                    itemProp="name"
                                >
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`w-6 h-6 text-accent shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        id={`faq-answer-${index}`}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                        itemScope
                                        itemProp="acceptedAnswer"
                                        itemType="https://schema.org/Answer"
                                    >
                                        <div className="px-6 md:px-8 pb-6 md:pb-8">
                                            <div className="pt-4 border-t border-white/10">
                                                <p
                                                    className="text-lg text-gray-300 leading-relaxed"
                                                    itemProp="text"
                                                >
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Hidden content for crawlers when accordion is closed */}
                            {openIndex !== index && (
                                <div
                                    className="sr-only"
                                    itemScope
                                    itemProp="acceptedAnswer"
                                    itemType="https://schema.org/Answer"
                                >
                                    <p itemProp="text">{faq.answer}</p>
                                </div>
                            )}
                        </article>
                    ))}
                </section>

                {/* CTA Section */}
                <section className="mt-20 text-center bg-accent/10 border border-accent/20 rounded-3xl p-12">
                    <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6">
                        Ready to Publish Your Book Today?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Our experienced publishing team is here to help you start your author career with professional book publishing services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-block bg-accent text-white px-10 py-4 rounded-full text-lg font-bold uppercase hover:bg-accent/90 transition-all transform hover:scale-105 shadow-lg"
                        >
                            Get Your Free Quote
                        </a>
                        <a
                            href="/services"
                            className="inline-block bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full text-lg font-bold uppercase hover:bg-white/20 transition-all"
                        >
                            View Our Services
                        </a>
                    </div>
                </section>
            </div>
        </article>
    );
}
