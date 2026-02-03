"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { FloatingBook, FloatingQuill, InkPot } from "@/components/ui/CustomSvgs";

// Floating shapes component
export function FloatingElements() {
    const { scrollY } = useScroll();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Parallax transforms - adjusted for noticeable movement
    const y1 = useTransform(scrollY, [0, 2000], [0, -200]);
    const y2 = useTransform(scrollY, [0, 2000], [0, -400]);
    const y3 = useTransform(scrollY, [0, 2000], [0, -100]);
    const y4 = useTransform(scrollY, [0, 2000], [0, -600]);

    const rotate1 = useTransform(scrollY, [0, 2000], [0, 45]);
    const rotate2 = useTransform(scrollY, [0, 2000], [0, -30]);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-20 h-full w-full mix-blend-screen isolate">
            {/* Element 1: Open Book (Top Right) */}
            <motion.div
                style={{ y: y1, rotate: rotate1 }}
                className="absolute top-[12%] right-[5%] text-accent opacity-30"
            >
                <FloatingBook className="w-48 h-48 md:w-64 md:h-64 drop-shadow-[0_0_20px_rgba(249,115,22,0.6)]" />
            </motion.div>

            {/* Element 2: Quill/Pen (Middle Left) */}
            <motion.div
                style={{ y: y2, rotate: rotate2 }}
                className="absolute top-[40%] left-[2%] text-white opacity-20"
            >
                <FloatingQuill className="w-56 h-56 md:w-80 md:h-80 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
            </motion.div>

            {/* Element 3: Ink Pot (Bottom Left) */}
            <motion.div
                style={{ y: y3 }}
                className="absolute bottom-[10%] left-[10%] text-terracotta opacity-20"
            >
                <InkPot className="w-32 h-32 md:w-48 md:h-48" />
            </motion.div>

            {/* Element 4: Floating Star (Top Left) */}
            <motion.div
                className="absolute top-[20%] left-[20%] text-terracotta"
                style={{ y: y4 }}
                animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <Star size={60} fill="currentColor" className="text-accent opacity-40 blur-[1px]" />
            </motion.div>

            {/* Element 5: Decorative Circle (Bottom Right) */}
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-[20%] right-[10%] border-2 border-accent/30 w-40 h-40 md:w-60 md:h-60 rounded-full opacity-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
}
