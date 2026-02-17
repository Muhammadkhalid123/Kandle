"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function MagicHandsPreview() {
    return (
        <section className="bg-transparent py-24 relative overflow-hidden">
            {/* 
                "In the stories section make another section with no bg transparent add this image"
                We use bg-transparent and minimal padding to make it flow seamlessly.
             */}
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1.25, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full max-w-7xl aspect-video md:aspect-[2.5/1]"
                >
                    {/* Radial Glow to blend the book edges better */}
                    <div className="absolute inset-0 bg-gradient-radial from-accent/10 to-transparent blur-3xl opacity-50 -z-10" />

                    <div className="relative w-full h-full overflow-hidden bg-transparent">
                        <Image
                            src="/bookiiish.png"
                            alt="Kandle Direct Publishing - Professional Book Interior Design Preview"
                            fill
                            className="object-contain drop-shadow-[0_0_80px_rgba(255,107,0,0.25)]"
                            style={{
                                maskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
                                WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)'
                            }}
                            priority
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
