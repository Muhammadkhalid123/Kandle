"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Trophy, Rocket, ShieldCheck, Zap } from "lucide-react";
import { FloatingElements } from "@/components/ui/FloatingElements";

const stats = [
    { label: "Founded", value: "2011", icon: Trophy },
    { label: "Books Published", value: "500+", icon: BookOpen },
    { label: "Author Royalties", value: "100%", icon: ShieldCheck },
    { label: "Expert Team", value: "Available 24/7", icon: Users },
];

const values = [
    {
        title: "Authors First",
        desc: "We believe your literary legacy belongs to you. That's why authors keep 100% of royalties and all publishing rights, always.",
        icon: Users
    },
    {
        title: "Experienced Team",
        desc: "Publishing since 2011, our experienced publishing team has a proven track record of launching bestseller careers.",
        icon: Zap
    },
    {
        title: "Professional Standards",
        desc: "We provide professional book publishing services including formatting, cover design, and global distribution with absolute precision.",
        icon: ShieldCheck
    }
];

export default function AboutClient() {
    return (
        <article className="bg-background text-primary min-h-screen pt-32 pb-20 overflow-hidden">
            <FloatingElements />

            {/* Hero Section */}
            <header className="max-w-[90vw] mx-auto mb-32 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-[10vw] font-bold uppercase tracking-tighter leading-none mb-8">
                        Redefining <br />
                        <span className="text-accent">Authorship</span>
                    </h1>
                    <p className="text-2xl md:text-4xl text-gray-400 max-w-4xl leading-tight font-light">
                        Your literary legacy deserves an <span className="text-white font-medium">experienced publishing team</span> that puts authors first. We provide professional book publishing services designed for the modern independent writer.
                    </p>
                </motion.div>
            </header>

            {/* Stats Grid */}
            <section className="max-w-7xl mx-auto px-6 mb-40">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center group hover:border-accent transition-colors"
                        >
                            <stat.icon size={32} className="text-accent mb-4 group-hover:scale-110 transition-transform" />
                            <span className="text-4xl font-bold text-white mb-2">{stat.value}</span>
                            <span className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Mission Section */}
            <section className="max-w-7xl mx-auto px-6 mb-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
                        Our Mission: <br />
                        <span className="text-accent">Author Freedom</span>
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Since <span className="text-white">publishing since 2011</span>, Kandle Direct Publishing has stood for one thing: transparency. We observed an industry where hidden publishing fees were the norm and author rights were secondary.
                    </p>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        We changed the game. Today, our authors <span className="text-white">keep 100% of royalties</span>. We charge for our expertise, not your future success. No hidden fees, no complicated contracts—just professional book publishing done right.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-square bg-accent/20 rounded-3xl flex items-center justify-center p-12 overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent pointer-events-none" />
                    <Rocket size={300} className="text-white/20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-8xl font-black text-white/5 uppercase select-none">Impact</p>
                    </div>
                </motion.div>
            </section>

            {/* Values Grid */}
            <section className="bg-white/5 py-40 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-6"
                            >
                                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white">
                                    <v.icon size={32} />
                                </div>
                                <h3 className="text-3xl font-bold uppercase tracking-tighter">{v.title}</h3>
                                <p className="text-lg text-gray-400 leading-relaxed">
                                    {v.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40 px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center bg-accent/10 border border-accent/20 rounded-3xl p-20"
                >
                    <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-8">
                        Ready to Start Your Author Career?
                    </h2>
                    <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
                        Join the hundreds of authors who have launched their dreams with professional book publishing and no hidden fees.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="/contact"
                            className="bg-accent text-white px-12 py-5 rounded-full text-xl font-bold uppercase hover:bg-accent/90 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(251,146,60,0.3)]"
                        >
                            Get Your Free Quote
                        </a>
                        <a
                            href="/services"
                            className="bg-white/10 text-white border border-white/20 px-12 py-5 rounded-full text-xl font-bold uppercase hover:bg-white/20 transition-all"
                        >
                            Explore Services
                        </a>
                    </div>
                </motion.div>
            </section>
        </article>
    );
}
