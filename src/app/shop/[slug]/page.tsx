"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { books } from "@/lib/data";
import { Star, ShoppingBag, ArrowLeft, Heart, Share2, BookOpen, Check } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { shareContent } from "@/lib/utils";


export default function ProductPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const book = books.find((b) => b.slug === slug);

    // Hooks must be called unconditionally
    const { addToCart } = useCart();
    const [selectedFormat, setSelectedFormat] = useState<"paperback" | "hardcover" | "ebook">("paperback");
    const [reviews, setReviews] = useState([
        { id: 1, user: "Alice M.", rating: 5, text: "Absolutely loved this book! Couldn't put it down.", date: "2 days ago" },
        { id: 2, user: "John D.", rating: 4, text: "Great story, but the pacing was a bit slow in the middle.", date: "1 week ago" }
    ]);
    const [newReview, setNewReview] = useState({ rating: 5, text: "" });

    if (!book) {
        return notFound();
    }

    const currentFormatData = book.formats[selectedFormat];

    const handleAddToCart = () => {
        addToCart({
            bookId: book.id,
            title: book.title,
            author: book.author,
            image: book.image,
            price: currentFormatData.price,
            format: selectedFormat.charAt(0).toUpperCase() + selectedFormat.slice(1) as "Paperback" | "Hardcover" | "Ebook",
            quantity: 1
        });
        alert(`Added ${book.title} (${selectedFormat}) to cart!`);
    };

    const handleShare = () => {
        shareContent(book.title, `Check out ${book.title} on Kandle Publishing!`);
    };


    const handleSubmitReview = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newReview.text) return;
        setReviews([...reviews, {
            id: reviews.length + 1,
            user: "You",
            rating: newReview.rating,
            text: newReview.text,
            date: "Just now"
        }]);
        setNewReview({ rating: 5, text: "" });
    };

    return (
        <div className="bg-background text-primary min-h-screen pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <Link href="/shop" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="mr-2" size={20} /> Back to Bookstore
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column - Image */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                            <Image
                                src={book.image}
                                alt={book.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Middle Column - Details */}
                    <div className="lg:col-span-5 space-y-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">{book.title}</h1>
                            <Link href="#" className="text-accent text-lg hover:underline block mb-4">{book.author}</Link>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} fill={i < Math.floor(book.rating) ? "currentColor" : "none"} className={i < Math.floor(book.rating) ? "" : "text-gray-600"} />
                                    ))}
                                </div>
                                <span className="text-gray-400 text-sm hover:text-accent cursor-pointer">{reviews.length} ratings</span>
                            </div>
                        </div>

                        <div className="border-t border-b border-white/10 py-4 my-6">
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {book.description}
                            </p>
                        </div>

                        {/* Formats Selection */}
                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Formats</h3>
                            <div className="flex gap-4 flex-wrap">
                                {(["ebook", "paperback", "hardcover"] as const).map((format) => (
                                    <div
                                        key={format}
                                        onClick={() => setSelectedFormat(format)}
                                        className={`border-2 rounded-lg p-3 w-32 cursor-pointer relative transition-all ${selectedFormat === format ? 'border-accent bg-accent/10' : 'border-white/20 hover:border-white/50'}`}
                                    >
                                        {selectedFormat === format && (
                                            <div className="text-xs text-accent font-bold absolute top-2 right-2"><Check size={14} /></div>
                                        )}
                                        <div className="text-white font-bold capitalize">{format}</div>
                                        <div className="text-sm text-gray-400 mt-1">${book.formats[format].price}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="mt-8 bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">Product Details</h3>
                            <div className="grid grid-cols-1 gap-y-2 text-sm">
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-gray-400">Publisher</span>
                                    <span className="text-white">{book.details.publisher}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-gray-400">Language</span>
                                    <span className="text-white">{book.details.language}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-gray-400">Print Length</span>
                                    <span className="text-white">{book.details.printLength}</span>
                                </div>
                                <div className="flex justify-between pt-2">
                                    <span className="text-gray-400">ISBN / ASIN</span>
                                    <span className="text-white">
                                        {selectedFormat === 'ebook' ? book.formats.ebook.asin : book.formats[selectedFormat].isbn}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Reviews Section */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-white mb-6">Customer Reviews</h3>

                            {/* Write Review */}
                            <form onSubmit={handleSubmitReview} className="mb-8 bg-white/5 p-6 rounded-xl border border-white/10">
                                <h4 className="text-lg font-bold mb-4">Write a Review</h4>
                                <div className="flex gap-2 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setNewReview({ ...newReview, rating: star })}
                                            className={star <= newReview.rating ? "text-yellow-400" : "text-gray-600"}
                                        >
                                            <Star fill="currentColor" size={24} />
                                        </button>
                                    ))}
                                </div>
                                <textarea
                                    className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-accent outline-none mb-4"
                                    rows={3}
                                    placeholder="Share your thoughts..."
                                    value={newReview.text}
                                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                                />
                                <button type="submit" className="px-6 py-2 bg-white text-black font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors">
                                    Submit Review
                                </button>
                            </form>

                            {/* Review List */}
                            <div className="space-y-6">
                                {reviews.map((review) => (
                                    <div key={review.id} className="border-b border-white/10 pb-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-bold text-xs">{review.user[0]}</div>
                                            <span className="font-bold">{review.user}</span>
                                            <span className="text-gray-500 text-sm ml-auto">{review.date}</span>
                                        </div>
                                        <div className="flex text-yellow-400 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-600"} />
                                            ))}
                                        </div>
                                        <p className="text-gray-300">{review.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Buy Box */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-32 border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur-xl shadow-lg">
                            <div className="text-3xl font-bold text-white mb-2">${currentFormatData.price}</div>
                            <div className="text-sm text-gray-400 mb-6">Free Shipping for Members</div>

                            <div className="text-green-400 text-lg font-medium mb-4 flex items-center">
                                <span className="block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                In Stock
                            </div>

                            <div className="space-y-4">
                                <button
                                    onClick={handleAddToCart}
                                    className="w-full py-3 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-all transform hover:scale-[1.02] shadow-lg shadow-accent/20 flex items-center justify-center gap-2"
                                >
                                    <ShoppingBag size={18} /> Add to Cart
                                </button>
                                <button className="w-full py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/10">
                                    Buy Now
                                </button>
                            </div>

                            <div className="mt-6 space-y-3 text-sm text-gray-400">
                                <div className="flex justify-between">
                                    <span>Ships from</span>
                                    <span className="text-white">Kandle Direct</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sold by</span>
                                    <span className="text-white">Kandle Direct</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/10 flex gap-4 justify-center">
                                <button className="flex items-center text-gray-400 hover:text-white transition-colors text-sm">
                                    <Heart className="mr-2" size={16} /> Wishlist
                                </button>
                                <button onClick={handleShare} className="flex items-center text-gray-400 hover:text-white transition-colors text-sm">
                                    <Share2 className="mr-2" size={16} /> Share
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
