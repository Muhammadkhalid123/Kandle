"use client";

import Image from "next/image";
import Link from "next/link";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { ArrowUpRight, Calendar, User } from "lucide-react";

import { blogPosts as posts } from "@/lib/data";

export default function BlogPage() {
    return (
        <div className="bg-background text-primary min-h-screen pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
            <FloatingElements />

            <div className="max-w-5xl mx-auto relative z-10">
                <header className="mb-20">
                    <h1 className="text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-none mb-6 text-white mix-blend-overlay opacity-90">
                        Insights
                    </h1>
                    <div className="h-px w-full bg-gradient-to-r from-accent to-transparent opacity-50" />
                </header>

                <div className="space-y-12">
                    {posts.map((post) => (
                        <article key={post.id} className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/5 pb-12 hover:bg-white/5 transition-colors p-4 -mx-4 rounded-xl">
                            {/* Image */}
                            <div className="md:col-span-5 relative aspect-video md:aspect-[4/3] overflow-hidden rounded-xl bg-black/40">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="md:col-span-7 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-accent mb-4">
                                    <span className="font-bold">{post.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-500" />
                                    <span className="text-gray-500 flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-accent transition-colors">
                                    <Link href={`/blog/${post.id}`}>
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-gray-400 text-lg mb-6 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                                    Read Article <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
