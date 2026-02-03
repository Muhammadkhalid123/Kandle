"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { RocketPen, NibPen, WaxSeal, OpenManuscript } from "@/components/ui/CustomSvgs";

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div ref={containerRef} className="bg-background text-primary min-h-screen selection:bg-accent selection:text-white overflow-hidden">
            {/* HER HERO SECTION */}
            <section className="relative pt-40 pb-20 px-6 min-h-[60vh] flex flex-col justify-center">
                {/* Background Typography */}
                <div className="absolute top-20 right-0 opacity-5 pointer-events-none select-none overflow-hidden">
                    <span className="text-[20vw] font-black uppercase leading-none text-white whitespace-nowrap">
                        Est. 2025
                    </span>
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                            redefining <br />
                            <span className="text-transparent text-stroke hover:text-accent transition-colors duration-500">Publishing</span>
                        </h1>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="bg-accent h-1 w-32 mb-8 hidden lg:block"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="lg:col-start-2"
                        >
                            <p className="text-2xl md:text-4xl font-bold uppercase leading-tight mb-8 text-gray-100">
                                We are the bridge between your raw manuscript and a global audience.
                            </p>
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                                Based in the heart of <span className="text-white font-semibold">London, UK</span>, Kandle Publishing was born from a frustration with the "good enough" standard of the self-publishing industry. We believe independent authors deserve the same editorial rigor, design excellence, and marketing firepower as traditional publishing houses—without losing ownership of their work.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE VISION / MANUSCRIPT SECTION */}
            <section className="py-32 relative bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center"
                    >
                        <div className="w-full max-w-md aspect-square bg-accent/10 rounded-full blur-3xl absolute inset-0 m-auto" />
                        <div className="relative z-10 text-[15rem] text-accent drop-shadow-[0_0_50px_rgba(234,88,12,0.5)]">
                            <OpenManuscript className="w-full h-full opacity-90" />
                        </div>
                    </motion.div>

                    <div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">
                            Your Story,<br /> <span className="text-accent">Unfolded</span>.
                        </h2>
                        <div className="space-y-6 text-lg text-gray-300">
                            <p>
                                Every book starts as a spark—a messy draft, a late-night idea, a voice memo. Our job is to fan that spark into a flame.
                            </p>
                            <p>
                                We blend traditional British publishing standards with modern speed and agility. Whether you need a developmental edit that tightens your plot or a cover that stops the scroll on Amazon, our team is obsessed with the details that turn readers into fans.
                            </p>
                            <ul className="grid grid-cols-1 gap-4 mt-8">
                                <li className="flex items-center gap-4 text-white font-medium">
                                    <span className="w-2 h-2 bg-accent rounded-full" /> No Templates. Everything Custom.
                                </li>
                                <li className="flex items-center gap-4 text-white font-medium">
                                    <span className="w-2 h-2 bg-accent rounded-full" /> 100% Royalties & Rights.
                                </li>
                                <li className="flex items-center gap-4 text-white font-medium">
                                    <span className="w-2 h-2 bg-accent rounded-full" /> Best-Seller Launch Strategies.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE VALUES GRID */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-accent mb-4">Our DNA</h2>
                        <h3 className="text-5xl md:text-7xl font-black uppercase">Start to Finish</h3>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: NibPen,
                                title: "Craftsmanship",
                                desc: "We treat formatting and editing as art forms. No widows, no orphans, just perfect typography."
                            },
                            {
                                icon: WaxSeal,
                                title: "Authority",
                                desc: "Our designs establish you as an expert in your field before the reader even opens page one."
                            },
                            {
                                icon: RocketPen,
                                title: "Velocity",
                                desc: "The market moves fast. We get your book launch-ready without compromising on quality."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                                className="group p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500 relative overflow-hidden"
                            >
                                <div className="mb-8 p-4 bg-black/50 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-500 text-accent">
                                    <item.icon className="w-12 h-12" />
                                </div>
                                <h4 className="text-2xl font-bold uppercase mb-4 text-white">{item.title}</h4>
                                <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                                    {item.desc}
                                </p>
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 blur-[50px] rounded-full group-hover:bg-accent/20 transition-all duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOUNDER/CTA SECTION */}
            <section className="py-20 px-6 bg-accent text-black overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black uppercase mb-8 text-white">
                        Ready to write<br /> history?
                    </h2>
                    <p className="text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto text-white/90">
                        Join the 500+ authors who turned their manuscripts into movements with Kandle Publishing.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-accent px-12 py-5 rounded-full text-xl font-bold uppercase hover:bg-black hover:text-white transition-all duration-300 shadow-2xl"
                    >
                        Start Your Project
                    </a>
                </div>
            </section>
        </div>
    );
}
