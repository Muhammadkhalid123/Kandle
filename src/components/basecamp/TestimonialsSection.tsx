"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
    { id: 1, author: "Sarah Jenkins", role: "Sci-Fi Author", quote: "Kandle transformed my manuscript into a bestseller. The cover design is iconic.", rating: 5 },
    { id: 2, author: "James Miller", role: "Business Coach", quote: "Professional, fast, and agency-grade quality. My book looks better than huge publishers.", rating: 5 },
    { id: 3, author: "Emily White", role: "Children's Book", quote: "They captured the whimsical vibe perfectly. The illustrations and layout are magic.", rating: 5 },
    { id: 4, author: "Robert Black", role: "Thriller Writer", quote: "Sales doubled after the rebrand. The marketing assets they created were a game changer.", rating: 5 },
    { id: 5, author: "Dr. A. Smith", role: "Academic", quote: "Clean, precise formatting for complex charts. Exactly what I needed for my thesis.", rating: 5 },
    { id: 6, author: "Jessica Lee", role: "Romance Author", quote: "The editing team was incredibly insightful. My story flows so much better now.", rating: 5 },
    { id: 7, author: "David Chen", role: "Tech Entrepreneur", quote: "From manuscript to Amazon bestseller in 3 months. The roadmap actually works.", rating: 5 },
    { id: 8, author: "Maria Garcia", role: "Cookbook Author", quote: "The layout for my recipes is stunning. Use of photography is world-class.", rating: 5 },
    { id: 9, author: "Tom Wilson", role: "Memoirist", quote: "Handling the ISBN and copyright stuff saved me so much headache. Worth every penny.", rating: 5 },
];

// Duplicate data to ensure smooth infinite loop
const col1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
const col2 = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6), ...testimonials.slice(3, 6)];
const col3 = [...testimonials.slice(6, 9), ...testimonials.slice(6, 9), ...testimonials.slice(6, 9)];

export function TestimonialsSection() {
    return (
        <section className="relative h-[120vh] min-h-[800px] overflow-hidden bg-background py-20 flex flex-col items-center justify-center">

            {/* Main Background Overlays */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent z-40" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-40" />

            {/* Central Heading - FIXED visually in center */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none p-4 text-center">
                <div className="relative">
                    <h2 className="text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] text-transparent text-stroke drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        Trusted By
                    </h2>
                    <h2 className="text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] text-white overflow-hidden"
                        style={{ height: "0.8em", marginTop: "-0.8em", opacity: 0.1 }}> {/* Shadow duplicate */}
                        Trusted By
                    </h2>
                </div>
                <h2 className="text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] text-white mix-blend-overlay opacity-90">
                    Authors
                </h2>

                <p className="mt-6 text-xl md:text-2xl text-white/80 max-w-xl bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
                    Join hundreds of writers who turned their ideas into published masterpieces.
                </p>
            </div>


            {/* Columns Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 h-full w-full max-w-7xl px-4 md:px-8 relative">

                {/* Column 1 - Up - z-30 (Above Heading) */}
                <div className="h-screen overflow-hidden mask-linear relative z-30 opacity-90 hover:opacity-100 transition-opacity hidden md:block">
                    <div className="animate-scroll-up flex flex-col gap-6 hover:[animation-play-state:paused]">
                        {col1.map((t, i) => <TestimonialCard key={`c1-${i}`} data={t} />)}
                    </div>
                </div>

                {/* Column 2 - Down - z-10 (Below Heading) */}
                {/* On Mobile this is the ONLY column shown, so we make it robust */}
                <div className="h-screen overflow-hidden mask-linear relative z-10 opacity-60 hover:opacity-100 transition-opacity">
                    <div className="animate-scroll-down flex flex-col gap-6 hover:[animation-play-state:paused]">
                        {col2.map((t, i) => <TestimonialCard key={`c2-${i}`} data={t} />)}
                    </div>
                </div>

                {/* Column 3 - Up - z-30 (Above Heading) */}
                <div className="h-screen overflow-hidden mask-linear relative z-30 opacity-90 hover:opacity-100 transition-opacity hidden md:block">
                    <div className="animate-scroll-up flex flex-col gap-6 hover:[animation-play-state:paused]" style={{ animationDelay: "-5s" }}>
                        {col3.map((t, i) => <TestimonialCard key={`c3-${i}`} data={t} />)}
                    </div>
                </div>

            </div>
        </section>
    );
}

function TestimonialCard({ data }: { data: typeof testimonials[0] }) {
    return (
        <div className="w-full bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-2xl shadow-lg hover:bg-white/10 transition-colors group cursor-default">
            <div className="flex gap-1 mb-4">
                {[...Array(data.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
            </div>

            <p className="text-base md:text-lg font-serif leading-relaxed text-gray-200 mb-6 group-hover:text-white transition-colors">
                &quot;{data.quote}&quot;
            </p>

            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center font-bold text-white text-xs">
                    {data.author.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-xs uppercase tracking-wide text-white">{data.author}</h4>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">{data.role}</span>
                </div>
            </div>
        </div>
    );
}
