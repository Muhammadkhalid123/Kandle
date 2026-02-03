"use client";

import { useEffect, useRef } from "react";

export function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Configuration for the blobs
        const blobs = [
            { x: width * 0.2, y: height * 0.3, r: width * 0.4, color: "rgba(234, 88, 12, 0.15)", vx: 0.5, vy: 0.5 }, // Orange
            { x: width * 0.8, y: height * 0.7, r: width * 0.5, color: "rgba(79, 70, 229, 0.1)", vx: -0.5, vy: -0.3 }, // Purple/Blue
            { x: width * 0.5, y: height * 0.5, r: width * 0.3, color: "rgba(255, 255, 255, 0.05)", vx: 0.2, vy: -0.2 }, // White glow
        ];

        let animationFrameId: number;

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Create a temporary canvas for the gradient mesh effect
            // We draw blobs with soft edges

            // Background base
            ctx.fillStyle = "#0B0B0B"; // The main background color
            ctx.fillRect(0, 0, width, height);

            // Draw blobs
            blobs.forEach(blob => {
                // Move blobs
                blob.x += blob.vx;
                blob.y += blob.vy;

                // Bounce off walls
                if (blob.x < -blob.r || blob.x > width + blob.r) blob.vx *= -1;
                if (blob.y < -blob.r || blob.y > height + blob.r) blob.vy *= -1;

                const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
                gradient.addColorStop(0, blob.color);
                gradient.addColorStop(1, "rgba(0,0,0,0)");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
                ctx.fill();
            });

            // Apply noise overlay via pattern or direct pixel manipulation (expensive)
            // For performance, we'll use a CSS overlay for noise, but here we handle the "Aurora" effect.

            animationFrameId = requestAnimationFrame(render);
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen" />
            {/* Grain Overlay - standard CSS trick */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </div>
    );
}

