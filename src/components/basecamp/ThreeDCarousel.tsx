"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { AnimatedCandle } from "@/components/ui/AnimatedCandle";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { FloatingBook, Typewriter, NibPen, WaxSeal, OpenManuscript, RocketPen } from "@/components/ui/CustomSvgs";
import { Mic, ArrowUpRight } from "lucide-react";

const cards = [
    { id: 1, title: "Formatting", subtitle: "Interior Design", color: "from-orange-900/40 to-black", icon: Typewriter, desc: "Professional layouts that make every page turn a pleasure." },
    { id: 2, title: "Covers", subtitle: "Art Direction", color: "from-purple-900/40 to-black", icon: FloatingBook, desc: "Market-ready cover art that demands attention on the shelf." },
    { id: 3, title: "Editing", subtitle: "Polishing Prose", color: "from-blue-900/40 to-black", icon: NibPen, desc: "Comprehensive editing to refine your voice and story." },
    { id: 4, title: "Marketing", subtitle: "Launch Strategy", color: "from-emerald-900/40 to-black", icon: WaxSeal, desc: "Strategic campaigns to get your book into readers' hands." },
    { id: 5, title: "Audio", subtitle: "Sonic Stories", color: "from-red-900/40 to-black", icon: RocketPen, desc: "High-fidelity production for the booming audiobook market." },
];

export function ThreeDCarousel() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["20%", "-95%"]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);

    return (
        <section ref={targetRef} className="relative h-[500vh] bg-[#0B0B0B]">
            <HeroBackground />
            {/* Background Text Layer */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden pointer-events-none">
                <h1 className="text-[10vw] font-black uppercase text-primary opacity-10 leading-none select-none flex items-baseline">
                    KAND<AnimatedCandle className="mx-[0.05em]" />E DIRECT PUBLISHING
                </h1>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                    {/* Outline Text Duplicate for Stroke Effect */}
                    <h1 className="text-[10vw] font-black uppercase text-transparent opacity-30 leading-none select-none absolute top-0 left-0 right-0 -translate-y-1/2 text-stroke flex items-baseline justify-center">
                        KAND<AnimatedCandle className="mx-[0.05em]" />E DIRECT PUBLISHING
                    </h1>
                </div>
            </div>

            {/* 3D Cards Layer */}
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-20 md:gap-40 pl-6 md:pl-[20vw]">
                    {/* Intro Card */}
                    <div className="w-[85vw] md:w-[40vw] h-[60vh] md:h-[70vh] flex flex-col justify-center text-white shrink-0 bg-black/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full pointer-events-none" />
                        <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.8] mb-8 relative z-10" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(255,107,0,0.3)' }}>
                            We Make<br />Books<br />Happen.
                        </h2>
                        <p className="text-xl max-w-md font-medium text-gray-300 relative z-10">
                            Kandle Publishing is the agency for authors who refuse to compromise on quality.
                        </p>
                    </div>

                    {/* Service/Project Cards */}
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.id}
                            style={{ rotateZ: rotate }} // Slight tilt as you scroll
                            className={`relative w-[80vw] md:w-[35vw] h-[50vh] md:h-[60vh] bg-gradient-to-br ${card.color} shrink-0 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col justify-between hover:scale-105 transition-transform duration-300 cursor-pointer border border-white/10 overflow-hidden group`}
                        >
                            {/* Abstract Background Animation */}
                            {/* Background Illustration */}
                            <card.icon className="absolute right-4 bottom-4 w-48 h-48 text-white/5 group-hover:text-white/10 transition-colors duration-500 rotate-0 stroke-[0.5] pointer-events-none" />

                            {/* Large Number */}
                            <div className="absolute top-6 right-8 text-6xl font-black text-white/10 z-0 font-serif italic">
                                0{i + 1}
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 overflow-hidden">
                                    {/* Small Animated Icon */}
                                    <card.icon className="w-6 h-6" />
                                </div>
                                <span className="block text-sm font-bold uppercase tracking-widest mb-2 text-accent">{card.subtitle}</span>
                                <h3 className="text-4xl md:text-6xl font-black uppercase leading-none mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-gray-400 text-lg max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    {card.desc}
                                </p>
                            </div>

                            <div className="relative z-10 mt-auto">
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wider group-hover:text-accent transition-colors"
                                >
                                    Explore Service <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}

                    {/* CTA Card */}
                    <div className="w-[80vw] md:w-[40vw] h-[60vh] md:h-[70vh] flex flex-col justify-center items-center text-center shrink-0">
                        <Link href="/contact" className="w-64 h-64 bg-accent text-background rounded-full flex items-center justify-center text-2xl font-bold uppercase hover:bg-accent-hover transition-all duration-300 flame-glow">
                            Get Started
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
