export default function BookstorePage() {
    return (
        <div className="bg-background text-primary min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-[90vw] mx-auto mb-20">
                <h1 className="text-[10vw] font-bold uppercase tracking-tighter leading-none mb-6">
                    Bookstore
                </h1>
                <p className="text-xl md:text-2xl text-gray-400">
                    Our authors&apos; masterpieces.
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                    <div key={i} className="group cursor-pointer">
                        <div className="aspect-[2/3] bg-surface mb-4 overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                                Cover
                            </div>
                            <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <h3 className="text-lg font-bold uppercase tracking-wide">Book Title {i}</h3>
                        <p className="text-gray-500 text-sm">Author Name</p>
                        <p className="text-secondary font-mono text-sm mt-2">$14.99</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
