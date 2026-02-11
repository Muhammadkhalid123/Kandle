"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Mock data simulating "impressions"
const impressions = [
    { id: 1, type: "book", title: "Silent Ocean", src: "/images/portfolio/one.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 2, type: "scene", title: "Author Signing", src: "/images/portfolio/landscape.jpg", col: "col-span-2", aspect: "aspect-video" },
    { id: 3, type: "book", title: "Neon Horizon", src: "/images/portfolio/two.png", col: "col-span-1", aspect: "aspect-[2/3]" },
    { id: 4, type: "detail", title: "Studio Vibe", src: "/images/portfolio/three.png", col: "col-span-1", aspect: "aspect-square" },
    { id: 5, type: "book", title: "The Last Kingdom", src: "/images/portfolio/four.png", col: "col-span-1", aspect: "aspect-[2/3]" },
    { id: 6, type: "scene", title: "Audio Production", src: "/images/portfolio/landscape-1.jpg", col: "col-span-2", aspect: "aspect-video" },
    { id: 7, type: "book", title: "Digital Edition", src: "/images/portfolio/five.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 8, type: "book", title: "Modern Strategy", src: "/images/portfolio/six.png", col: "col-span-1", aspect: "aspect-[2/3]" },
    { id: 9, type: "book", title: "Summer Love", src: "/images/portfolio/seven.png", col: "col-span-1", aspect: "aspect-[2/3]" },
    { id: 10, type: "detail", title: "Global Reach", src: "/images/portfolio/eight.png", col: "col-span-1", aspect: "aspect-square" },
    { id: 11, type: "book", title: "Crimson Peak", src: "/images/portfolio/landscape-2.jpg", col: "col-span-2", aspect: "aspect-video" },
    { id: 13, type: "book", title: "Midnight Run", src: "/images/portfolio/ten.png", col: "col-span-1", aspect: "aspect-[2/3]" },
    { id: 14, type: "book", title: "Hardcover Special", src: "/images/portfolio/eleven.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 15, type: "detail", title: "Typesetting", src: "/images/portfolio/twelve.png", col: "col-span-1", aspect: "aspect-square" },
    { id: 16, type: "book", title: "Lost in Time", src: "/images/portfolio/thirteen.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 17, type: "book", title: "E-Reader Ready", src: "/images/portfolio/fourteen.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 18, type: "scene", title: "Writing Camp", src: "/images/portfolio/landscape-3.jpg", col: "col-span-2", aspect: "aspect-video" },
    { id: 19, type: "book", title: "Fallen Kings", src: "/images/portfolio/sixteen.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 20, type: "book", title: "Series Stack", src: "/images/portfolio/seventeen.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 21, type: "detail", title: "Ink & Paper", src: "/images/portfolio/eighteen.png", col: "col-span-1", aspect: "aspect-square" },
    { id: 22, type: "book", title: "Golden Age", src: "/images/portfolio/nineteen.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 23, type: "book", title: "Winter Solstice", src: "/images/portfolio/twenty.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 24, type: "scene", title: "Book Fair", src: "/images/portfolio/landscape-4.jpg", col: "col-span-2", aspect: "aspect-video" },
    { id: 25, type: "book", title: "Collectors Edition", src: "/images/portfolio/1770806650.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 26, type: "book", title: "Drafting", src: "/images/portfolio/1770806703.png", col: "col-span-1", aspect: "aspect-[3/4]" },
    { id: 27, type: "detail", title: "Binding Art", src: "/images/portfolio/1770806759.png", col: "col-span-1", aspect: "aspect-square" },
];

export default function PortfolioPage() {
    return (
        <div className="bg-terracotta min-h-screen pt-32 px-4 md:px-8 pb-20">
            <div className="mb-20 text-white">
                <h1 className="text-[12vw] md:text-[10vw] font-black uppercase leading-[0.8] tracking-tighter mix-blend-overlay">
                    Impressions
                </h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {impressions.map((item, i) => (
                    <div
                        key={item.id}
                        className={`${item.col} ${item.aspect} relative rounded-xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 group`}
                    >
                        <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority={i < 4}
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                    </div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <Link href="/contact" className="inline-block px-12 py-6 bg-white text-terracotta text-xl font-bold uppercase rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    Start Your Project
                </Link>
            </div>
        </div>
    );
}
