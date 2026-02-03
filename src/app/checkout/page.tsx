"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function CheckoutPage() {
    const { cart, total, clearCart } = useCart();
    const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Success

    if (cart.length === 0 && step !== 3) {
        return (
            <div className="min-h-screen pt-32 text-center text-white">
                <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
                <Link href="/shop" className="text-accent hover:underline">Return to shop</Link>
            </div>
        );
    }

    const handlePlaceOrder = () => {
        setStep(3);
        clearCart();
    };

    if (step === 3) {
        return (
            <div className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 animate-in zoom-in duration-500">
                    <CheckCircle size={48} className="text-white" />
                </div>
                <h1 className="text-5xl font-bold text-white mb-6">Order Confirmed!</h1>
                <p className="text-xl text-gray-300 mb-12">
                    Thank you for your purchase. We have sent a confirmation email with your order details and tracking information.
                </p>
                <Link href="/shop" className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-accent hover:text-white transition-all">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-background text-primary">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Form Column */}
                <div className="lg:col-span-7">
                    <Link href="/cart" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="mr-2" size={20} /> Back to Cart
                    </Link>

                    <div className="mb-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-accent text-white' : 'bg-white/10 text-gray-500'}`}>1</div>
                            <span className={`font-bold text-lg ${step >= 1 ? 'text-white' : 'text-gray-500'}`}>Shipping Information</span>
                            <div className="w-10 h-[1px] bg-white/10"></div>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-accent text-white' : 'bg-white/10 text-gray-500'}`}>2</div>
                            <span className={`font-bold text-lg ${step >= 2 ? 'text-white' : 'text-gray-500'}`}>Payment</span>
                        </div>

                        {step === 1 && (
                            <div className="space-y-6 animate-in slide-in-from-left-4 fade-in duration-500">
                                <div className="grid grid-cols-2 gap-6">
                                    <input type="text" placeholder="First Name" className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-accent outline-none" />
                                    <input type="text" placeholder="Last Name" className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-accent outline-none" />
                                </div>
                                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-accent outline-none" />
                                <input type="text" placeholder="Street Address" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-accent outline-none" />
                                <div className="grid grid-cols-3 gap-6">
                                    <input type="text" placeholder="City" className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-accent outline-none" />
                                    <input type="text" placeholder="State/Province" className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-accent outline-none" />
                                    <input type="text" placeholder="Zip Code" className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-accent outline-none" />
                                </div>
                                <button onClick={() => setStep(2)} className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-accent hover:text-white transition-all mt-4">
                                    Continue to Payment
                                </button>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-500">
                                <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
                                    <h3 className="text-lg font-bold text-white mb-4">Credit Card</h3>
                                    <input type="text" placeholder="Card Number" className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:border-accent outline-none mb-4" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="MM/YY" className="bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:border-accent outline-none" />
                                        <input type="text" placeholder="CVC" className="bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:border-accent outline-none" />
                                    </div>
                                </div>
                                <button onClick={handlePlaceOrder} className="w-full py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
                                    Pay ${total.toFixed(2)}
                                </button>
                                <button onClick={() => setStep(1)} className="w-full text-gray-400 hover:text-white transition-colors text-sm">
                                    Back to Shipping
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Summary Column */}
                <div className="lg:col-span-5">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 sticky top-32">
                        <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Order Summary</h2>
                        <div className="space-y-4 mb-6 max-h-[400px] overflow-auto custom-scrollbar pr-2">
                            {cart.map((item) => (
                                <div key={`${item.bookId}-${item.format}`} className="flex gap-4">
                                    <div className="w-16 h-20 bg-gray-800 rounded overflow-hidden flex-shrink-0 relative">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border border-gray-900">
                                            {item.quantity}
                                        </span>
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-sm font-bold text-white line-clamp-1">{item.title}</h4>
                                        <p className="text-xs text-gray-400">{item.format}</p>
                                    </div>
                                    <div className="text-sm font-bold text-white">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-2 border-t border-white/10 pt-4">
                            <div className="flex justify-between text-gray-400 text-sm">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-400 text-sm">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-white mt-4 border-t border-white/10 pt-4">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
