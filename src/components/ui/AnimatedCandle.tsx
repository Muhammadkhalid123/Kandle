"use client";

import { motion } from "framer-motion";

export function AnimatedCandle({ className }: { className?: string }) {
    return (
        <span className={`inline-flex items-center justify-center relative ${className}`}>
            <svg
                viewBox="0 0 24 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[1.1em] w-auto -translate-y-[0.1em]"
            >
                {/* Candle Body */}
                <rect x="8" y="16" width="8" height="24" fill="currentColor" rx="1" />

                {/* Wick */}
                <rect x="11.5" y="12" width="1" height="4" fill="#6B7280" />

                {/* Flame */}
                <motion.path
                    d="M12 2C12 2 16 6 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6 12 2 12 2Z"
                    fill="var(--color-accent)"
                    animate={{
                        scale: [1, 1.1, 0.9, 1.05, 1],
                        opacity: [0.9, 1, 0.8, 1, 0.9],
                        skewX: [0, 2, -1, 3, 0],
                        y: [0, -1, 0.5, -0.5, 0]
                    }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ transformOrigin: "bottom center" }}
                />

                {/* Flame Glow (Optional/Subtle) */}
                <motion.circle
                    cx="12"
                    cy="9"
                    r="6"
                    fill="var(--color-accent)"
                    animate={{
                        opacity: [0.1, 0.3, 0.15, 0.25, 0.1],
                        scale: [0.8, 1.2, 0.9, 1.1, 0.8]
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="blur-md"
                />
            </svg>
        </span>
    );
}
