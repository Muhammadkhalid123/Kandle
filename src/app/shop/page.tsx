"use client";

// Shop Page Component
import Image from "next/image";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { ShoppingBag } from "lucide-react";
import { books } from "@/lib/data";
import Link from "next/link";

export default function ShopPage() {
    return (
        <div className="bg-background text-primary min-h-screen pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
            <FloatingElements />

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="mb-20 text-center">
                    <h1 className="text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-none mb-6 text-white mix-blend-overlay opacity-90">
                        Bookstore
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                        Curated collection of masterpieces published by Kandle.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {books.map((book) => (
                        <Link
                            key={book.id}
                            href={`/shop/${book.slug}`}
                            className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-accent/40 transition-colors duration-300 block"
                        >
                            {/* Image Area */}
                            <div className="aspect-[2/3] relative overflow-hidden bg-black/40">
                                <Image
                                    src={book.image}
                                    alt={book.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs uppercase tracking-widest font-bold">
                                    {book.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">{book.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{book.author}</p>

                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-accent">${book.price}</span>
                                    <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                                        <ShoppingBag size={18} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="px-12 py-4 bg-transparent border border-white/20 text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                        Load More Products
                    </button>
                </div>
            </div>
        </div>
    );
}
