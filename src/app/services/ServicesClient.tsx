"use client";

import { Check, Rocket, Zap, Clock, Globe, Shield, Users } from "lucide-react";
import { FloatingElements } from "@/components/ui/FloatingElements";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import * as LucideIcons from "lucide-react";

const whyChooseUs = [
    { title: "Affordable & Transparent", icon: <Zap className="text-secondary" />, description: "Quality services at competitive prices with zero hidden fees." },
    { title: "100% Rights & Royalties", icon: <Shield className="text-secondary" />, description: "You own every word. We stay behind the scenes." },
    { title: "Global Reach", icon: <Globe className="text-secondary" />, description: "Distribution to major international retailers and libraries." },
    { title: "Expert Support", icon: <Users className="text-secondary" />, description: "Dedicated project managers for every author's journey." }
];

export default function ServicesClient() {
    return (
        <article className="bg-[#050505] text-white min-h-screen pt-32 pb-20 overflow-hidden">
            <FloatingElements />

            <header className="container mx-auto px-6 mb-32 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Kandle Direct Publishing</span>
                    <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                        The Full Ecosystem For <span className="text-accent">Authors.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
                        From the first word to the bestseller list, we provide the professional infrastructure, creative design, and global distribution needed to launch your literary career.
                    </p>
                </motion.div>
            </header>

            {/* Why Choose Us */}
            <section className="container mx-auto px-6 mb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {whyChooseUs.map((item, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/[0.08] transition-all group">
                            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-2 uppercase">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Main Services List */}
            <div className="space-y-40 container mx-auto px-6">
                {services.map((service, idx) => {
                    const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.BookOpen;
                    return (
                        <section
                            key={service.id}
                            id={service.id}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative"
                        >
                            <div className="sticky top-32">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                                        {idx + 1}
                                    </span>
                                    <div className="h-[1px] flex-grow bg-white/10"></div>
                                </div>
                                <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4 leading-none">
                                    {service.title}
                                </h2>
                                <p className="text-accent font-bold text-xl mb-8 uppercase tracking-widest">{service.tagline}</p>
                                <p className="text-2xl text-gray-400 leading-relaxed mb-12">
                                    {service.description}
                                </p>

                                <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-2xl mb-12">
                                    <p className="text-lg italic text-gray-300">
                                        "{service.benefit}"
                                    </p>
                                </div>

                                <Link
                                    href={`/services/${service.id}`}
                                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase hover:bg-accent hover:text-white transition-all group"
                                >
                                    Explore Service <Rocket size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                </Link>
                            </div>

                            <div className="space-y-12">
                                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 md:p-14">
                                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
                                        <Clock className="text-accent" /> Our Workflow
                                    </h3>
                                    <div className="space-y-8">
                                        {service.process.map((step, sIdx) => (
                                            <div key={sIdx} className="flex gap-6 relative">
                                                {sIdx !== service.process.length - 1 && (
                                                    <div className="absolute left-3 top-8 bottom-0 w-[2px] bg-white/10"></div>
                                                )}
                                                <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 z-10 shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]"></div>
                                                <span className="text-xl text-gray-300 leading-tight">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {service.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="bg-surface/50 border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-accent/30 transition-colors">
                                            <Check className="text-accent w-5 h-5 mt-1 flex-shrink-0" />
                                            <span className="font-medium text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* Final Conversion Section */}
            <section className="mt-60 container mx-auto px-6">
                <div className="bg-gradient-to-br from-[#111] to-[#050505] border border-white/10 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                            Don't Just Write.<br /><span className="text-accent text-glow">Build A Brand.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12">
                            Our team is ready to take your manuscript from the desktop to the global stage. Get a free custom quote for your publishing project today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="/contact"
                                className="bg-accent text-white px-12 py-5 rounded-full text-xl font-bold uppercase hover:bg-accent-hover transition-all transform hover:scale-105 shadow-2xl shadow-accent/40"
                            >
                                Get Your Free Quote
                            </Link>
                            <Link
                                href="/portfolio"
                                className="bg-white/5 text-white border border-white/10 px-12 py-5 rounded-full text-xl font-bold uppercase hover:bg-white/10 transition-all backdrop-blur-md"
                            >
                                View Our Portfolio
                            </Link>
                        </div>
                        <p className="mt-12 text-gray-500 uppercase tracking-widest text-sm font-bold">
                            30-Day Satisfaction Guarantee • 100% Royalties • Expert Support
                        </p>
                    </div>
                </div>
            </section>
        </article>
    );
}
