"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const logos = [
    { name: "Amazon KDP", src: "/images/brands/kdp.png" },
    { name: "IngramSpark", src: "/images/brands/ingramspark.png" },
    { name: "Barnes & Noble", src: "/images/brands/bandn.png" },
    { name: "Apple Books", src: "/images/brands/applebooks.png" },
    { name: "Kobo", src: "/images/brands/kobo.png" },
    { name: "Lulu", src: "/images/brands/lulu.png" },
    { name: "Draft2Digital", src: "/images/brands/dtod.png" },
    { name: "Penguin Random House", src: "/images/brands/peng.png" },
];

export function BrandMarquee() {
    return (
        <section className="w-full py-12 md:py-20 relative overflow-hidden z-20">
            {/* Background with Glassmorphism */}
            <div className="absolute inset-x-4 md:inset-x-0 inset-y-0 bg-white/5 backdrop-blur-md rounded-2xl md:rounded-none shadow-2xl border border-white/5 mx-auto max-w-[95%] md:max-w-full" />

            <div className="max-w-7xl mx-auto relative px-4 md:px-8">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-30 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-30 pointer-events-none" />

                {/* Marquee Track */}
                <div className="flex overflow-hidden group mask-linear">
                    {/* Inner container with animation */}
                    <div className="flex gap-12 md:gap-24 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused] py-6 items-center">
                        {/* First Set */}
                        {logos.map((logo, i) => (
                            <LogoItem key={`l1-${i}`} logo={logo} />
                        ))}
                        {/* Duplicate for Loop */}
                        {logos.map((logo, i) => (
                            <LogoItem key={`l2-${i}`} logo={logo} />
                        ))}
                        {/* Triplicate for smooth looping on wider screens */}
                        {logos.map((logo, i) => (
                            <LogoItem key={`l3-${i}`} logo={logo} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function LogoItem({ logo }: { logo: { name: string; src: string } }) {
    return (
        <div className="relative w-32 h-16 md:w-48 md:h-24 flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500" />

            <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain brightness-[1.1] contrast-[1.2] invert opacity-80 hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            />
        </div>
    );
}
