"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Book } from "@/lib/data";

export type CartItem = {
    bookId: number;
    title: string;
    author: string;
    image: string;
    price: number;
    format: "Paperback" | "Hardcover" | "Ebook";
    quantity: number;
};

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (bookId: number, format: string) => void;
    clearCart: () => void;
    total: number;
    itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const storedCart = localStorage.getItem("kandle-cart");
        if (storedCart) {
            try {
                setCart(JSON.parse(storedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("kandle-cart", JSON.stringify(cart));
        }
    }, [cart, isMounted]);

    const addToCart = (newItem: CartItem) => {
        setCart((prev) => {
            const existing = prev.find(
                (item) => item.bookId === newItem.bookId && item.format === newItem.format
            );
            if (existing) {
                return prev.map((item) =>
                    item.bookId === newItem.bookId && item.format === newItem.format
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
            }
            return [...prev, newItem];
        });
    };

    const removeFromCart = (bookId: number, format: string) => {
        setCart((prev) => prev.filter((item) => !(item.bookId === bookId && item.format === format)));
    };

    const clearCart = () => setCart([]);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total, itemCount }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
