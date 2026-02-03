"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Mock data simulating "impressions"
const impressions = [
    { id: 1, type: "book", title: "Silent Ocean", src: "/images/silent-ocean.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 2, type: "scene", title: "Author Signing", src: "/images/author-signing.png", col: "col-span-2", aspect: "aspect-video" },
    { id: 3, type: "book", title: "Modern Econ", src: "/images/modern-econ.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 4, type: "detail", title: "Studio Vibe", src: "/images/studio-vibe.png", col: "col-span-1", aspect: "aspect-square" },
    { id: 5, type: "book", title: "Little Bear", src: "/images/silent-ocean.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 6, type: "scene", title: "Creative Process", src: "/images/studio-vibe.png", col: "col-span-2", aspect: "aspect-video" },
    { id: 7, type: "book", title: "Shadows", src: "/images/modern-econ.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    // New 20 items
    { id: 8, type: "book", title: "The Darkest Night", src: "/images/silent-ocean.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 9, type: "book", title: "Starlight Voyage", src: "/images/modern-econ.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 10, type: "detail", title: "Typography Study", src: "/images/studio-vibe.png", col: "col-span-1", aspect: "aspect-square" },
    { id: 11, type: "book", title: "Crimson Peak", src: "/images/silent-ocean.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 12, type: "scene", title: "Launch Event", src: "/images/author-signing.png", col: "col-span-2", aspect: "aspect-video" },
    { id: 13, type: "book", title: "Urban Legends", src: "/images/modern-econ.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 14, type: "book", title: "Whispering Pines", src: "/images/silent-ocean.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 15, type: "detail", title: "Cover Texture", src: "/images/studio-vibe.png", col: "col-span-1", aspect: "aspect-square" },
    { id: 16, type: "book", title: "Lost in Time", src: "/images/modern-econ.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 17, type: "book", title: "Cyber Dreams", src: "/images/silent-ocean.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 18, type: "scene", title: "Writing Camp", src: "/images/author-signing.png", col: "col-span-2", aspect: "aspect-video" },
    { id: 19, type: "book", title: "Fallen Kings", src: "/images/modern-econ.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 20, type: "book", title: "Neon City", src: "/images/silent-ocean.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 21, type: "detail", title: "Ink & Paper", src: "/images/studio-vibe.png", col: "col-span-1", aspect: "aspect-square" },
    { id: 22, type: "book", title: "Golden Age", src: "/images/modern-econ.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 23, type: "book", title: "Winter Solstice", src: "/images/silent-ocean.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 24, type: "scene", title: "Book Fair", src: "/images/author-signing.png", col: "col-span-2", aspect: "aspect-video" },
    { id: 25, type: "book", title: "Desert Mirage", src: "/images/modern-econ.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 26, type: "book", title: "Ocean's Song", src: "/images/silent-ocean.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 27, type: "detail", title: "Binding Art", src: "/images/studio-vibe.png", col: "col-span-1", aspect: "aspect-square" },
];

export default function PortfolioPage() {
    return (
        <div className="bg-terracotta min-h-screen pt-32 px-4 md:px-8 pb-20">
            <div className="mb-20 text-white">
                <h1 className="text-[10vw] font-black uppercase leading-none tracking-tighter mix-blend-overlay">
                    Impressions
                </h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {impressions.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`${item.col} ${item.aspect} relative group rounded-xl overflow-hidden cursor-pointer shadow-lg`}
                    >
                        {/* Image Layer */}
                        <div className="absolute inset-0">
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                        <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center">
                                <ArrowUpRight />
                            </div>
                        </div>

                        <div className="absolute bottom-4 left-4">
                            <h3 className="text-white font-bold uppercase tracking-widest text-sm drop-shadow-md">{item.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <Link href="/contact" className="inline-block px-12 py-6 bg-primary text-white text-xl font-bold uppercase rounded-full hover:scale-105 transition-transform">
                    Start Your Project
                </Link>
            </div>
        </div>
    );
}
