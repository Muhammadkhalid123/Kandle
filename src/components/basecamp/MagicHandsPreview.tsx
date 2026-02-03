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
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full max-w-4xl aspect-[2/1] md:aspect-[2.5/1]"
                >
                    <Image
                        src="/images/2magic-hands-book.png"
                        alt="Magic Hands Book Interior"
                        fill
                        className="object-contain"
                    />
                </motion.div>

            </div>
        </section>
    );
}
