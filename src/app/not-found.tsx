import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            {/* Background Ambient Light */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
            </div>

            <div className="relative z-10 max-w-2xl">
                <h1 className="text-[12rem] md:text-[20rem] font-black text-white/5 leading-none select-none">
                    404
                </h1>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 -mt-10 md:-mt-20 relative z-20">
                    Page Not Found
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-lg mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
                >
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
