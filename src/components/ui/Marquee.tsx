"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
    children: React.ReactNode;
    direction?: "left" | "right" | "up" | "down";
    speed?: number;
    className?: string;
    vertical?: boolean;
    repeat?: number; // How many times to repeat children
}

export function Marquee({
    children,
    direction = "left",
    speed = 20,
    className = "",
    vertical = false,
    repeat = 2
}: MarqueeProps) {
    const isVertical = vertical || direction === "up" || direction === "down";

    // Animation Variants
    const variants = {
        animate: {
            x: !isVertical
                ? (direction === "right" ? ["-50%", "0%"] : ["0%", "-50%"]) // Move horizontally
                : 0,
            y: isVertical
                ? (direction === "down" ? ["-50%", "0%"] : ["0%", "-50%"]) // Move vertically
                : 0,
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop" as const,
                    duration: speed,
                    ease: "linear" as const,
                },
                y: {
                    repeat: Infinity,
                    repeatType: "loop" as const,
                    duration: speed,
                    ease: "linear" as const,
                }
            }
        }
    };

    return (
        <div
            className={`overflow-hidden flex ${isVertical ? "flex-col h-full" : "flex-row w-full"} ${className}`}
            style={{
                // Using mask to fade edges if desired, or just clip
                // maskImage: isVertical 
                //     ? "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
                //     : "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
            }}
        >
            <motion.div
                className={`flex ${isVertical ? "flex-col" : "flex-row"} whitespace-nowrap`}
                variants={variants}
                animate="animate"
                style={{
                    // Ensure the container is large enough to scroll
                    width: isVertical ? "100%" : "max-content",
                    height: isVertical ? "max-content" : "100%",
                    gap: "2rem", // controlled spacing
                }}
            >
                {Array(repeat).fill(0).map((_, i) => (
                    <div key={i} className={`flex ${isVertical ? "flex-col gap-8" : "flex-row gap-12 sm:gap-24"} shrink-0`}>
                        {children}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
