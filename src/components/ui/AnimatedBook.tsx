"use client";

import { motion } from "framer-motion";

export function AnimatedBook({ className }: { className?: string }) {
    return (
        <span className={`inline-flex items-center justify-center relative ${className}`}>
            <svg
                viewBox="0 0 60 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[1.2em] w-auto"
            >
                {/* Book Cover/Base */}
                <path
                    d="M2 30 C2 30 15 32 30 30 C45 32 58 30 58 30 V34 C58 34 45 36 30 34 C15 36 2 34 2 34 V30Z"
                    fill="#C2410C"
                />

                {/* Spine */}
                <path
                    d="M26 34 C26 34 28 36 30 36 C32 36 34 34 34 34 V30 C34 30 32 32 30 32 C28 32 26 30 26 30 V34Z"
                    fill="#9A3412"
                />

                {/* Left Static Pages */}
                <path
                    d="M4 28 C4 28 15 30 29 28 V15 C15 20 4 15 4 15 V28Z"
                    fill="#E5E7EB"
                />
                <path
                    d="M6 26 C6 26 16 28 29 27 V18 C16 21 6 17 6 17 V26Z"
                    fill="#F3F4F6"
                />

                {/* Right Static Pages */}
                <path
                    d="M56 28 C56 28 45 30 31 28 V15 C45 20 56 15 56 15 V28Z"
                    fill="#E5E7EB"
                />
                <path
                    d="M54 26 C54 26 44 28 31 27 V18 C44 21 54 17 54 17 V26Z"
                    fill="#F3F4F6"
                />

                {/* Flipping Page Animation */}
                {/* We simulate a page going from right (folded) to left (open) */}
                <motion.path
                    d="M30 28 V15 C40 18 50 15 50 15 V28 C50 28 40 30 30 28Z"
                    fill="#FFFFFF"
                    stroke="#D1D5DB"
                    strokeWidth="0.5"
                    animate={{
                        d: [
                            "M30 28 V15 C40 18 50 15 50 15 V28 C50 28 40 30 30 28Z", // Start Right
                            "M30 28 V8 C40 5 30 5 30 5 V28 C30 28 35 25 30 28Z",     // Mid Up
                            "M30 28 V15 C20 18 10 15 10 15 V28 C10 28 20 30 30 28Z"  // End Left
                        ],
                        opacity: [1, 1, 0] // Fade out at the end so it looks like it merges
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.5, 1]
                    }}
                />
                {/* Second Flipping Page (Delayer) */}
                <motion.path
                    d="M30 28 V15 C40 18 50 15 50 15 V28 C50 28 40 30 30 28Z"
                    fill="#F9FAFB"
                    stroke="#D1D5DB"
                    strokeWidth="0.5"
                    initial={{ opacity: 0 }}
                    animate={{
                        d: [
                            "M30 28 V15 C40 18 50 15 50 15 V28 C50 28 40 30 30 28Z", // Start Right
                            "M30 28 V8 C40 5 30 5 30 5 V28 C30 28 35 25 30 28Z",     // Mid Up
                            "M30 28 V15 C20 18 10 15 10 15 V28 C10 28 20 30 30 28Z"  // End Left
                        ],
                        opacity: [0, 1, 0, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.75, // Half cycle delay
                        times: [0, 0.1, 0.9, 1]
                    }}
                />
            </svg>
        </span>
    );
}
