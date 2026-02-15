"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-card text-white pt-32 pb-10 border-t border-border relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
                    <div className="max-6xl">
                        <Image
                            src="/logo.png"
                            alt="Kandle"
                            width={400}
                            height={150}
                            className="mb-8 h-28 w-auto object-contain rounded-lg"
                        />
                        <span className="block text-sm text-secondary uppercase tracking-widest mb-6 p-1">Ready to start?</span>
                        <Link href="/contact" className="text-4xl md:text-8xl font-black uppercase tracking-tighter hover:text-accent transition-colors leading-[0.8] block">
                            Let&apos;s Make<br />History.
                        </Link>
                    </div>

                    <div className="flex flex-wrap gap-12 md:gap-24 mt-10 md:mt-0">
                        {/* Contact Info */}
                        <div>
                            <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-800 pb-2">Contact</h4>
                            <address className="not-italic space-y-4 text-lg font-medium text-gray-300">
                                <p>
                                    <a href="tel:+447922656521" className="hover:text-accent transition-colors">+44 7922 656521</a>
                                </p>
                                <p>
                                    <a href="mailto:info@kandledirectpublishing.com" className="hover:text-accent transition-colors">info@kandledirectpublishing.com</a>
                                </p>
                                <p className="text-gray-400">
                                    173 Dallow Rd, Luton,<br />
                                    LU1 1NX, UK
                                </p>
                            </address>
                        </div>

                        {/* Socials */}
                        <div>
                            <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-800 pb-2">Socials</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a href="https://www.facebook.com/kandledirectpublishing/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors uppercase font-bold text-lg">
                                        Facebook <ArrowUpRight size={18} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/kandledirectpublishing/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors uppercase font-bold text-lg">
                                        Instagram <ArrowUpRight size={18} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/kandle-direct-publishing/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors uppercase font-bold text-lg">
                                        LinkedIn <ArrowUpRight size={18} />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Menu */}
                        <div>
                            <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-800 pb-2">Menu</h4>
                            <ul className="space-y-4">
                                {[
                                    { name: "Home", href: "/" },
                                    { name: "About", href: "/about" },
                                    { name: "Services", href: "/services" },
                                    // { name: "Bookstore", href: "/shop" },
                                    { name: "Portfolio", href: "/portfolio" },
                                    { name: "Blog", href: "/blog" },
                                    { name: "Contact", href: "/contact" }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="hover:text-accent transition-colors uppercase font-bold text-lg">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end border-t border-gray-800 pt-10 text-xs uppercase tracking-widest text-gray-500">
                    <div className="flex gap-4 mb-4 md:mb-0">
                        <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
                        <span>Terms of Service</span>
                    </div>
                    <p>© {new Date().getFullYear()} Kandle Direct Publishing. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
