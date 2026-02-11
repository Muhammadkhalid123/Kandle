"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { FloatingElements } from "@/components/ui/FloatingElements";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    return (
        <div className="bg-background text-primary min-h-screen pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
            <FloatingElements />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
                {/* Left Column: Info */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-[12vw] lg:text-[7vw] font-black uppercase tracking-tighter leading-[0.9] mb-8 text-white">
                        Let&apos;s<br />Talk.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-md mb-12 font-light">
                        Ready to turn your manuscript into a masterpiece? We're here to help you every step of the way.
                    </p>

                    <div className="space-y-8 mb-16">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                                <Mail className="text-accent w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Email</h3>
                                <a href="mailto:info@kandledirectpublishing.com" className="text-xl md:text-2xl font-bold hover:text-accent transition-colors">
                                    info@kandledirectpublishing.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                                <Phone className="text-accent w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Phone</h3>
                                <a href="tel:+447922656521" className="text-xl md:text-2xl font-bold hover:text-accent transition-colors">
                                    +44 7922 656521
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                                <MapPin className="text-accent w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Office</h3>
                                <p className="text-xl font-bold leading-relaxed text-gray-200">
                                    173 Dallow Rd, Luton,<br />
                                    LU1 1NX, United Kingdom
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 border-b border-gray-800 pb-2 mb-4">Connect</h3>
                        {[
                            { name: "Instagram", url: "https://www.instagram.com/kandledirectpublishing/" },
                            { name: "Facebook", url: "https://www.facebook.com/kandledirectpublishing/" },
                            { name: "LinkedIn", url: "https://www.linkedin.com/company/kandle-direct-publishing/" },
                        ].map(social => (
                            <a href={social.url} target="_blank" rel="noopener noreferrer" key={social.name} className="block text-xl font-bold uppercase tracking-wide hover:text-accent hover:translate-x-2 transition-all flex justify-between items-center group py-2">
                                {social.name}
                                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity -rotate-45" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/10 blur-3xl rounded-full opacity-40 pointer-events-none" />

                    <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
                        {status === "success" ? (
                            <div className="h-[500px] flex flex-col items-center justify-center text-center">
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-4xl font-bold uppercase mb-4 text-white">Message Sent</h3>
                                <p className="text-gray-400 max-w-xs mx-auto mb-8">Thank you for reaching out. A member of our team will get back to you within 24 hours.</p>
                                <button onClick={() => setStatus("idle")} className="text-sm underline uppercase tracking-widest hover:text-accent transition-colors">Send another message</button>
                            </div>
                        ) : (
                            <form action={async (formData) => {
                                setStatus("submitting");
                                import("@/app/actions/sendEmail").then(async (mod) => {
                                    const result = await mod.sendContactEmail(formData);
                                    if (result.success) {
                                        setStatus("success");
                                    } else {
                                        setStatus("idle");
                                        alert("Something went wrong. Please try again.");
                                    }
                                });
                            }} className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-6">Start a Project</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="group space-y-2">
                                            <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-500">Name</label>
                                            <input type="text" id="name" name="name" required className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-lg focus:border-accent focus:bg-black/40 outline-none transition-all placeholder:text-gray-700" placeholder="John Doe" />
                                        </div>
                                        <div className="group space-y-2">
                                            <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                                            <input type="email" id="email" name="email" required className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-lg focus:border-accent focus:bg-black/40 outline-none transition-all placeholder:text-gray-700" placeholder="john@example.com" />
                                        </div>
                                        <div className="group space-y-2">
                                            <label htmlFor="phone" className="text-xs uppercase tracking-widest text-gray-500">Phone</label>
                                            <input type="tel" id="phone" name="phone" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-lg focus:border-accent focus:bg-black/40 outline-none transition-all placeholder:text-gray-700" placeholder="+1 (555) 000-0000" />
                                        </div>
                                    </div>
                                </div>

                                <div className="group space-y-2">
                                    <label htmlFor="service" className="text-xs uppercase tracking-widest text-gray-500">Service Interested In</label>
                                    <select id="service" name="interest" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-lg focus:border-accent focus:bg-black/40 outline-none transition-all text-gray-300">
                                        <option>Publishing Package</option>
                                        <option>Editing & Proofreading</option>
                                        <option>Cover Design</option>
                                        <option>Marketing</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="group space-y-2">
                                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-500">Project Details</label>
                                    <textarea id="message" name="message" rows={5} required className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-lg focus:border-accent focus:bg-black/40 outline-none transition-all placeholder:text-gray-700 resize-none" placeholder="Tell us about your book, word count, and goals..."></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full py-5 bg-accent text-white font-bold uppercase tracking-widest rounded-xl hover:bg-accent-hover transform hover:scale-[1.02] transition-all shadow-lg shadow-accent/20"
                                >
                                    {status === "submitting" ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
