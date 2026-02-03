"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu as MenuIcon, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <>
      {/* Floating Logo (Top Left) */}
      <Link
        href="/"
        className="fixed top-4 left-4 md:top-8 md:left-8 z-50 hover:scale-105 transition-all duration-300 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-lg border border-border shadow-lg"
      >
        <Image
          src="/images/Kandle Direct Publishing-Logo/Kandle Direct Publishing-Logo-05.svg"
          alt="Kandle Direct Publishing"
          width={240}
          height={80}
          className="h-16 md:h-24 w-auto"
          priority
        />
      </Link>

      {/* Cart Button (Top Right, Left of Menu) */}
      <Link
        href="/cart"
        className="fixed top-4 right-20 md:top-8 md:right-28 z-50 w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-white/10 group"
      >
        <div className="relative">
          <ShoppingBag size={24} className="group-hover:scale-110 transition-transform" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-in zoom-in">
              {itemCount}
            </span>
          )}
        </div>
      </Link>

      {/* Floating Menu Button (Top Right) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 md:top-8 md:right-8 z-50 w-12 h-12 md:w-16 md:h-16 bg-accent hover:bg-accent-hover text-background rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 flame-glow"
      >
        {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
      </button>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0)" }}
            animate={{ clipPath: "circle(200% at 100% 0)" }}
            exit={{ clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-background z-40 flex items-center justify-center"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-4xl md:text-8xl font-bold uppercase tracking-tighter text-white hover:text-accent transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="absolute bottom-10 left-0 w-full text-center text-white/30 text-sm uppercase tracking-widest">
              Kandle Publishing © 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
