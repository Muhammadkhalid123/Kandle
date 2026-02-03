"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { CommentSection } from "@/components/blog/CommentSection";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { shareContent } from "@/lib/utils";

export default function BlogPostPage() {
    const params = useParams();
    const id = Number(params.id);
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        notFound();
    }

    const handleShare = () => {
        shareContent(post.title, post.excerpt);
    };


    return (
        <article className="min-h-screen bg-background text-primary pt-32 pb-20 relative overflow-hidden">
            <FloatingElements />

            {/* Hero Image */}
            <div className="w-full h-[60vh] relative mb-12 lg:mb-20">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute bottom-0 left-0 w-full z-20 px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-accent hover:text-white mb-6 transition-colors font-bold uppercase tracking-widest text-sm"
                        >
                            <ArrowLeft className="mr-2" size={16} /> Back to Blog
                        </Link>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-gray-300 font-medium">
                            <span className="flex items-center gap-2">
                                <User size={18} className="text-accent" /> {post.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={18} className="text-accent" /> {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Tag size={18} className="text-accent" /> {post.category}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content & Sidebar */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">

                {/* Main Article */}
                <div className="lg:col-span-8">
                    <div
                        className="prose prose-lg prose-invert max-w-none text-gray-300 leading-relaxed
                        prose-headings:text-white prose-headings:font-bold prose-headings:font-serif
                        prose-p:mb-6 prose-p:text-lg prose-p:opacity-90
                        prose-strong:text-accent prose-strong:font-bold
                        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                        prose-blockquote:border-l-accent prose-blockquote:bg-white/5 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:italic
                        prose-img:rounded-2xl prose-img:border prose-img:border-white/10
                        "
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags / Share */}
                    <div className="mt-12 py-8 border-y border-white/10 flex flex-wrap justify-between items-center gap-4">
                        <div className="flex gap-2">
                            <span className="bg-white/5 px-4 py-2 rounded-full text-sm text-gray-400">#{post.category.toLowerCase()}</span>
                            <span className="bg-white/5 px-4 py-2 rounded-full text-sm text-gray-400">#publishing</span>
                            <span className="bg-white/5 px-4 py-2 rounded-full text-sm text-gray-400">#kandle</span>
                        </div>
                        <button onClick={handleShare} className="flex items-center gap-2 text-accent hover:text-white transition-colors font-bold uppercase text-sm">
                            <Share2 size={18} /> Share Article
                        </button>
                    </div>

                    {/* Comments */}
                    <CommentSection initialComments={post.comments} />
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-12">
                    {/* Author Box */}
                    <div className="bg-surface/50 border border-white/10 p-8 rounded-2xl sticky top-32 backdrop-blur-sm">
                        <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">About the Author</h3>
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-16 h-16 bg-gray-700 rounded-full flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-white text-lg">{post.author}</h4>
                                <p className="text-sm text-accent">Editorial Team</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Sharing insights from the frontend of the publishing industry. Helping authors navigate the complex world of modern storytelling.
                        </p>
                        <Link href="/contact" className="w-full py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg flex items-center justify-center font-bold transition-colors">
                            Work With Us
                        </Link>
                    </div>

                    {/* Related Posts */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Related Reads</h3>
                        <div className="space-y-6">
                            {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map(related => (
                                <Link key={related.id} href={`/blog/${related.id}`} className="group flex gap-4 items-start">
                                    <div className="w-24 h-24 relative bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                                        <Image src={related.image} alt={related.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white group-hover:text-accent transition-colors line-clamp-2 leading-tight mb-2">
                                            {related.title}
                                        </h4>
                                        <span className="text-xs text-gray-500">{related.date}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </article>
    );
}
