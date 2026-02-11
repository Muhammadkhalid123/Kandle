"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ArrowRight, ShoppingBag } from "lucide-react";

export default function CartPage() {
    const { cart, removeFromCart, total, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center">
                <ShoppingBag size={64} className="text-gray-600 mb-6" />
                <h1 className="text-4xl font-bold text-white mb-4">Your Cart is Empty</h1>
                <p className="text-gray-400 mb-8 max-w-md">Looks like you haven&apos;t added any books yet. Explore our bookstore to find your next great read.</p>
                {/* <Link href="/shop" className="px-8 py-3 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-all">
                    Browse Books
                </Link> */}
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">Your Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    {cart.map((item, idx) => (
                        <div key={`${item.bookId}-${item.format}`} className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 flex gap-6 items-center">
                            <div className="relative w-20 h-28 flex-shrink-0 bg-gray-800 rounded overflow-hidden">
                                <Image src={item.image} alt={item.title} fill className="object-cover" />
                            </div>

                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
                                        <p className="text-gray-400 text-sm">{item.author}</p>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.bookId, item.format)}
                                        className="text-gray-500 hover:text-red-500 transition-colors p-2"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-accent">
                                        {item.format}
                                    </span>
                                    <div className="text-xl font-bold text-white">
                                        ${item.price.toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={clearCart}
                        className="text-sm text-gray-500 hover:text-white underline decoration-dotted"
                    >
                        Clear Shopping Cart
                    </button>
                </div>

                {/* Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 sticky top-32">
                        <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-gray-400">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Shipping</span>
                                <span>Calculated at checkout</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Tax</span>
                                <span>Calculated at checkout</span>
                            </div>
                            <div className="border-t border-white/10 pt-4 flex justify-between text-xl font-bold text-white">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <Link
                            href="/checkout"
                            className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-lg hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-2 group"
                        >
                            Checkout <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
