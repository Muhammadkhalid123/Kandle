"use client";

import { useState } from "react";
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react";

export function ContactSection({ serviceName }: { serviceName?: string }) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    return (
        <section className="py-24 px-6 bg-surface/30 border-y border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <div className="space-y-8">
                    <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-8">
                        Ready To <br />
                        <span className="text-accent">Get Started?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-md leading-relaxed">
                        Fill out the form and our publishing specialists will reach out within 24 hours to discuss your project.
                    </p>

                    <div className="space-y-6 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <Mail className="text-accent w-5 h-5" />
                            </div>
                            <span className="text-lg text-gray-300">info@kandledirectpublishing.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <Phone className="text-accent w-5 h-5" />
                            </div>
                            <span className="text-lg text-gray-300">+44 7922 656521</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative">
                    {status === "success" ? (
                        <div className="py-20 flex flex-col items-center justify-center text-center">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-10 h-10 text-green-500" />
                            </div>
                            <h3 className="text-3xl font-bold uppercase mb-4">Message Sent!</h3>
                            <p className="text-gray-400 mb-8">One of our experts will contact you shortly.</p>
                            <button onClick={() => setStatus("idle")} className="text-accent underline uppercase tracking-widest text-sm">Send another</button>
                        </div>
                    ) : (
                        <form
                            action={async (formData) => {
                                setStatus("submitting");
                                const mod = await import("@/app/actions/sendEmail");
                                const result = await mod.sendContactEmail(formData);
                                if (result.success) setStatus("success");
                                else {
                                    setStatus("idle");
                                    alert("Error sending email. Please try again.");
                                }
                            }}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Name</label>
                                    <input name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-accent outline-none transition-all" placeholder="Enter your name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Email</label>
                                    <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-accent outline-none transition-all" placeholder="Enter your email" />
                                </div>
                            </div>

                            <input type="hidden" name="interest" value={serviceName || "General Inquiry"} />

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Project Details</label>
                                <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-accent outline-none transition-all resize-none" placeholder="Tell us about your book..."></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full py-5 bg-accent text-white font-bold uppercase tracking-widest rounded-xl hover:bg-accent-hover transform hover:scale-[1.01] transition-all shadow-xl shadow-accent/10 disabled:opacity-50"
                            >
                                {status === "submitting" ? "Sending..." : "Get Free Consultation"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
