"use client";

import { Marquee } from "@/components/ui/Marquee";

const logos = [
    { name: "Amazon KDP", src: "/images/brands/kdp.png" },
    { name: "IngramSpark", src: "/images/brands/ingramspark.png" },
    { name: "Barnes & Noble", src: "/images/brands/bandn.png" },
    { name: "Apple Books", src: "/images/brands/applebooks.png" },
    { name: "Kobo", src: "/images/brands/kobo.png" },
    { name: "Lulu", src: "/images/brands/lulu.png" },
    { name: "Draft2Digital", src: "/images/brands/dtod.png" },
    { name: "Penguin", src: "/images/brands/peng.png" },
    { name: "Barnes & Thornes", src: "/images/brands/bandt.png" },
];

export function PartnerMarquee() {
    return (
        <section className="bg-surface py-20 overflow-hidden relative border-t border-border">
            {/* Logos Marquee */}
            <div className="mb-32 opacity-90">
                <Marquee speed={40}>
                    {logos.map((logo, i) => (
                        <div key={i} className="mx-12 flex items-center justify-center h-24">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-24 w-auto object-contain max-w-[240px] brightness-[1.1] contrast-[1.5] invert hue-rotate-[180deg] mix-blend-screen"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* "THERE'S" Text from screenshot */}
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-[15vw] md:text-[20vw] font-black uppercase text-primary leading-none tracking-tighter mix-blend-hard-light opacity-90">
                    There&apos;s
                </h2>
            </div>
        </section>
    );
}
