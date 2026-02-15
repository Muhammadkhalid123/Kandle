"use client";

import { Service } from "@/lib/data";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Check, ArrowLeft, Clock, Zap, Star } from "lucide-react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

interface ServiceDetailClientProps {
    service: Service;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
    // Dynamically get the icon component
    const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.BookOpen;

    return (
        <main className="bg-[#050505] text-white min-h-screen pt-32 overflow-hidden">
            <FloatingElements />

            <div className="container mx-auto px-6">
                <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-accent transition-colors mb-12 uppercase tracking-widest text-sm font-bold group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
                </Link>

                <header className="max-w-5xl mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                                <IconComponent size={32} />
                            </div>
                            <span className="text-accent font-bold uppercase tracking-[0.3em] text-sm">Service Specialist</span>
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                            {service.title}
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-400 leading-relaxed font-light">
                            {service.tagline}
                        </p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40">
                    <div className="lg:col-span-7 space-y-12">
                        <section>
                            <h2 className="text-3xl font-bold uppercase mb-8 flex items-center gap-4">
                                <div className="w-8 h-[2px] bg-accent"></div> Overview
                            </h2>
                            <p className="text-xl text-gray-300 leading-loose">
                                {service.description}
                            </p>
                            <div className="mt-8 p-8 bg-white/5 border border-white/10 rounded-3xl italic text-lg text-gray-400">
                                "{service.benefit}"
                            </div>
                        </section>

                        <section className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-14">
                            <h2 className="text-3xl font-bold uppercase mb-10 flex items-center gap-4">
                                <Clock className="text-accent" /> Our Process
                            </h2>
                            <div className="space-y-12">
                                {service.process.map((step, idx) => (
                                    <div key={idx} className="flex gap-8 relative group">
                                        {idx !== service.process.length - 1 && (
                                            <div className="absolute left-4 top-10 bottom-0 w-[2px] bg-white/10 group-hover:bg-accent/30 transition-colors"></div>
                                        )}
                                        <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0 z-10 flex items-center justify-center font-bold text-sm shadow-[0_0_20px_rgba(var(--accent-rgb),0.4)]">
                                            {idx + 1}
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{step}</h3>
                                            <p className="text-gray-500">Standard industry-leading approach to ensure {service.title.toLowerCase()} quality.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-5 space-y-8">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-accent/10 border border-accent/20 p-10 rounded-[2.5rem]">
                                <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">Key Inclusions</h3>
                                <ul className="space-y-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-4 group">
                                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                                                <Check size={14} className="text-accent" />
                                            </div>
                                            <span className="text-lg text-gray-300 font-medium group-hover:text-white transition-colors">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] text-center">
                                <div className="flex justify-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-accent" fill="currentColor" />)}
                                </div>
                                <p className="text-lg font-bold uppercase mb-2">Highest Quality Guaranteed</p>
                                <p className="text-sm text-gray-500">Join 500+ satisfied authors who trusted us with their publishing journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ContactSection serviceName={service.title} />

        </main>
    );
}
