"use client";

import { useState } from "react";
import { Marquee } from "@/components/ui/Marquee";
import { Star, Quote, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Expanded testimonials for fuller columns with longer text to demonstrate truncation
const testimonials = [
    { id: 1, author: "Sarah Jenkins", role: "Sci-Fi Author", quote: "Kandle transformed my manuscript into a bestseller. The cover design is iconic. I never expected such attention to detail. Every chapter heading was perfectly aligned with my theme.", color: "bg-surface" },
    { id: 2, author: "James Miller", role: "Business Coach", quote: "Professional, fast, and agency-grade quality. My book looks better than huge publishers. The team walked me through every step of the process, making it seamless and stress-free.", color: "bg-surface" },
    { id: 3, author: "Emily White", role: "Children's Book", quote: "They captured the whimsical vibe perfectly. The illustrations and layout are magic. Seeing my characters come to life in such vibrant color was a dream come true.", color: "bg-surface" },
    { id: 4, author: "Robert Black", role: "Thriller Writer", quote: "Sales doubled after the rebrand. The marketing assets they created were a game changer. The trailer alone got me 10,000 views in the first week. Highly recommended!", color: "bg-surface" },
    { id: 5, author: "Dr. A. Smith", role: "Academic", quote: "Clean, precise formatting for complex charts. Exactly what I needed for my thesis. They handled the footnotes and bibliography with academic rigor.", color: "bg-surface" },
    { id: 6, author: "Jessica Lee", role: "Romance Author", quote: "The editing team was incredibly insightful. My story flows so much better now. They caught plot holes I completely missed and helped me tighten the dialogue.", color: "bg-surface" },
    { id: 7, author: "David Chen", role: "Tech Entrepreneur", quote: "From manuscript to Amazon bestseller in 3 months. The roadmap actually works. Their launch strategy is data-driven and effectively targets the right niche.", color: "bg-surface" },
    { id: 8, author: "Maria Garcia", role: "Cookbook Author", quote: "The layout for my recipes is stunning. Use of photography is world-class. It looks like something you'd find on a coffee table in a high-end restaurant.", color: "bg-surface" },
    { id: 9, author: "Tom Wilson", role: "Memoirist", quote: "Handling the ISBN and copyright stuff saved me so much headache. Worth every penny. I can just focus on writing while they handle the bureaucracy.", color: "bg-surface" },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialCarousel() {
    const [activeReview, setActiveReview] = useState<typeof testimonials[0] | null>(null);

    return (
        <section className="relative h-[80vh] min-h-[600px] bg-background text-white overflow-hidden py-10">

            {/* Header Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center bg-background/5">
                <div className="text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-shadow-lg drop-shadow-2xl">
                        Trusted by Authors
                    </h2>
                    <p className="text-xl text-white/80 max-w-lg mx-auto bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        Join hundreds of writers who turned their ideas into published masterpieces.
                    </p>
                </div>
            </div>

            {/* Gradient Masks */}
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-background z-10 to-transparent" />
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background z-10 to-transparent" />

            {/* Columns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full px-4 md:px-12 opacity-60 hover:opacity-100 transition-opacity duration-700">

                {/* Column 1 - Up (Slower) */}
                <div className="h-full overflow-hidden relative mask-linear">
                    <Marquee vertical speed={20} direction="up">
                        {firstColumn.map((t) => (
                            <ReviewCard key={t.id} review={t} onClick={() => setActiveReview(t)} />
                        ))}
                    </Marquee>
                </div>

                {/* Column 2 - Down */}
                <div className="hidden md:block h-full overflow-hidden relative mask-linear">
                    <Marquee vertical speed={25} direction="down">
                        {secondColumn.map((t) => (
                            <ReviewCard key={t.id} review={t} onClick={() => setActiveReview(t)} />
                        ))}
                    </Marquee>
                </div>

                {/* Column 3 - Up */}
                <div className="hidden md:block h-full overflow-hidden relative mask-linear">
                    <Marquee vertical speed={20} direction="up">
                        {thirdColumn.map((t) => (
                            <ReviewCard key={t.id} review={t} onClick={() => setActiveReview(t)} />
                        ))}
                    </Marquee>
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {activeReview && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                        onClick={() => setActiveReview(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-card border border-white/10 rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setActiveReview(null)}
                                className="absolute top-4 right-4 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors z-10"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} size={24} className="fill-accent text-accent" />
                                ))}
                            </div>

                            <Quote size={48} className="text-white/20 mb-6" />

                            <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                                <p className="text-2xl md:text-3xl font-serif leading-relaxed text-white mb-8">
                                    &quot;{activeReview.quote}&quot;
                                </p>
                            </div>

                            <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-4">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center font-bold text-white text-xl">
                                    {activeReview.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg uppercase tracking-wide text-white">{activeReview.author}</h4>
                                    <span className="text-sm text-gray-400 uppercase tracking-wider">{activeReview.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

function ReviewCard({ review, onClick }: { review: typeof testimonials[0], onClick: () => void }) {
    return (
        <div
            onClick={onClick}
            className="w-full bg-surface/50 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-surface hover:border-accent/50 transition-colors group cursor-pointer"
        >
            <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
            </div>

            <p className="text-lg md:text-xl font-serif leading-relaxed text-gray-200 mb-6 group-hover:text-white transition-colors line-clamp-4">
                &quot;{review.quote}&quot;
            </p>

            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center font-bold text-white text-sm">
                    {review.author.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide text-white">{review.author}</h4>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{review.role}</span>
                </div>
            </div>
        </div>
    );
}
