"use client";

import { motion } from "framer-motion";
import { Rocket, Heart, Clock, Smartphone, ShieldCheck, DollarSign, Zap } from "lucide-react";

const featuresLeft = [
    {
        icon: DollarSign,
        title: "We're Affordable",
        desc: "Affordable publishing packages that fit your budget with no hidden publishing fees."
    },
    {
        icon: Clock,
        title: "Timely & Knowledgeable",
        desc: "Our experienced publishing team guides you through every step, ensuring deadlines are always met."
    },
    {
        icon: ShieldCheck,
        title: "100% Royalties",
        desc: "Keep 100% of royalties. We never take a cut. You keep all your earnings and author rights, always."
    }
];

const featuresRight = [
    {
        icon: Zap,
        title: "Fast & Flawless",
        desc: "Fast book production matters. We deliver rapid results without compromising on quality."
    },
    {
        icon: Heart,
        title: "Experienced & Reliable",
        desc: "Publishing since 2011, helping authors launch their dreams with a proven track record."
    },
    {
        icon: Smartphone,
        title: "Universal Compatibility",
        desc: "Multi-device book testing on every major platform to ensure a perfect reading experience."
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.05),transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                        You'll Love Working With <span className="text-accent">Kandle</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We don't just publish books; we launch careers. Start your author career with our professional book publishing services.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    {/* Left Column */}
                    <div className="space-y-12">
                        {featuresLeft.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col md:flex-row items-center md:items-start text-center md:text-right gap-4 group"
                            >
                                <div className="flex-1 order-2 md:order-1">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                                </div>
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent shrink-0 order-1 md:order-2 border border-white/10 group-hover:border-accent transition-colors">
                                    <feature.icon size={24} />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center Column - Rocket Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center py-12 lg:py-0"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                            {/* Glowing effect behind */}
                            <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full animate-pulse" />

                            {/* Speed Lines (Falling from top) */}
                            <div className="absolute inset-0 overflow-hidden rounded-full mask-image-gradient">
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent"
                                        style={{
                                            left: `${10 + Math.random() * 80}%`,
                                            height: `${20 + Math.random() * 40}%`,
                                            opacity: 0.3 + Math.random() * 0.5
                                        }}
                                        animate={{
                                            y: ["-100%", "400%"],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: 0.5 + Math.random() * 0.5,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: Math.random() * 2
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Flying Rocket Animation */}
                            <motion.div
                                animate={{
                                    y: [20, -20, 20],
                                    rotate: -45,
                                }}
                                transition={{
                                    y: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    },
                                    rotate: {
                                        duration: 0
                                    }
                                }}
                                className="relative z-10"
                            >
                                <Rocket
                                    size={200}
                                    className="text-white drop-shadow-[0_0_15px_rgba(251,146,60,0.5)]"
                                    strokeWidth={1}
                                />

                                {/* Engine Thrust / Propulsion Particles */}
                                <motion.div
                                    className="absolute -bottom-10 -left-10 w-full h-full pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    {/* Simple dots for exhaust */}
                                    <div className="absolute left-1/2 bottom-0 w-2 h-2 bg-accent rounded-full blur-[2px] translate-x-[-20px] translate-y-[-20px]" />
                                    <div className="absolute left-1/3 bottom-5 w-1 h-3 bg-white/50 rounded-full blur-[1px] -rotate-45" />
                                </motion.div>
                            </motion.div>

                            {/* Floating Hearts/Particles */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-10 text-accent"
                            >
                                <Heart size={24} fill="currentColor" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 left-10 text-accent"
                            >
                                <Heart size={32} fill="currentColor" />
                            </motion.div>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute top-1/2 -right-4 text-accent/50"
                            >
                                <Heart size={16} fill="currentColor" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <div className="space-y-12">
                        {featuresRight.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 group"
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent shrink-0 border border-white/10 group-hover:border-accent transition-colors">
                                    <feature.icon size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
