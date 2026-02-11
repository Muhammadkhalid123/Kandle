export default function Loading() {
    return (
        <div className="fixed inset-0 bg-background z-[100] flex items-center justify-center">
            <div className="relative flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="w-16 h-16 border-4 border-white/10 border-t-accent rounded-full animate-spin" />

                {/* Brand Name or Text (Optional) */}
                <span className="text-white/50 text-sm font-bold uppercase tracking-[0.2em] animate-pulse">
                    Loading...
                </span>
            </div>
        </div>
    );
}
