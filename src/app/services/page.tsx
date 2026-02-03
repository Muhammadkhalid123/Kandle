"use client";

import { Check } from "lucide-react";
import { FloatingElements } from "@/components/ui/FloatingElements";

const services = [
    {
        id: "editing",
        title: "Manuscript Editing & Proofreading",
        description: "Refine your voice and polish your prose to perfection. We ensure your story is clear, compelling, and error-free.",
        features: ["Developmental Editing", "Line Editing", "Copy Editing", "Proofreading"]
    },
    {
        id: "formatting",
        title: "Book Formatting (Print & eBook)",
        description: "Interior design that flows like a story. Professional layout for both physical and digital reading experiences.",
        features: ["Custom Interior Layout", "Clickable Table of Contents", "Orphan & Widow Control", "Print-Ready PDF & EPUB"]
    },
    {
        id: "cover-design",
        title: "Custom Book Cover Design",
        description: "Wraps that demand attention. Genre-specific designs that stand out on every shelf, digital or physical.",
        features: ["Market-Researched Concepts", "High-Resolution Jackets", "Typography Specialist", "Source Files Included"]
    },
    {
        id: "isbn-copyright",
        title: "ISBN & Copyright Registration",
        description: "Protect your work and establish your identity. We handle the bureaucratic details so you own your rights.",
        features: ["Official ISBN Assignment", "Copyright Filing", "Barcode Generation", "Rights Management Advice"]
    },
    {
        id: "publishing",
        title: "eBook & Paperback Publishing",
        description: "Go global with wide distribution. We publish your book to all major platforms including Amazon, IngramSpark, B&N, and Kobo.",
        features: ["Amazon KDP Setup", "IngramSpark Distribution", "Barnes & Noble Listing", "Kobo Writing Life"]
    },
    {
        id: "audiobook",
        title: "Audiobook Production & Distribution",
        description: "Turn your words into sound. Professional narration and production to reach the growing audio market.",
        features: ["Voice Actor Selection", "ACX/Audible Distribution", "Findaway Voices Setup", "High-Quality Mastering"]
    },
    {
        id: "distribution",
        title: "Global Book Distribution",
        description: "Reach readers worldwide. We ensure your book is available in thousands of libraries and bookstores globally.",
        features: ["Expanded Distribution", "Library Availability", "International Retailers", "Online Bookstores"]
    },
    {
        id: "marketing",
        title: "Book Marketing & Promotion",
        description: "Get discovered. tailored strategies to increase visibility and drive sales for your launch and beyond.",
        features: ["Social Media Campaigns", "Email Marketing Setup", "Influencer Outreach", "Paid Ad Management"]
    },
    {
        id: "kdp-optimization",
        title: "Amazon KDP Optimization",
        description: "Master the algorithm. enhance your Amazon presence with SEO-driven keywords and categories.",
        features: ["Keyword Research", "Category Selection", "A+ Content Creation", "Bestseller Targeting"]
    },
    {
        id: "branding",
        title: "Author Branding & Website Development",
        description: "Build your platform. A professional home on the web to connect with readers and showcase your portfolio.",
        features: ["Custom Author Website", "Brand Identity Design", "Newsletter Integration", "Blog Setup"]
    },
    {
        id: "launch-strategy",
        title: "Book Launch Strategy",
        description: "Make a splash. A step-by-step roadmap to maximize your book's impact on release day.",
        features: ["Launch Timeline", "ARC Team Management", "Virtual Book Tour", "Launch Event Planning"]
    },
    {
        id: "metadata",
        title: "Metadata & Category Optimization",
        description: "Be findable. We fine-tune the hidden data that helps search engines and stores categorize your book.",
        features: ["BISAC Codes", "Search Terms", "Metadata Refinement", "Discoverability Check"]
    },
    {
        id: "description-bio",
        title: "Product Description & Author Bio",
        description: "Words that sell. Compelling copy that hooks browsers and converts them into buyers.",
        features: ["Hook-Driven Synopses", "SEO-Friendly Descriptions", "Professional Author Bio", "Back Cover Copy"]
    },
    {
        id: "translation",
        title: "Translation & Multilingual Publishing",
        description: "Speak to the world. Translate your work into new languages to tap into international markets.",
        features: ["Professional Translation", "Localization", "Foreign Rights", "Multilingual Formatting"]
    },
    {
        id: "pod-setup",
        title: "Print-on-Demand Setup",
        description: "Zero inventory, infinite reach. Set up efficient printing systems that fufill orders automatically.",
        features: ["KDP Print", "IngramSpark POD", "Quality Control", "Distribution Settings"]
    },
    {
        id: "mockups",
        title: "Book Mockups & Promotional Graphics",
        description: "Visual assets for social media. Beautiful 3D renders and lifestyle images to promote your book.",
        features: ["3D ROI Mockups", "Social Media Kits", "Ad Creatives", "Banner Images"]
    },
    {
        id: "sales-tracking",
        title: "Sales Tracking & Reporting",
        description: "Know your numbers. specific tools and reports to track your royalties and sales performance.",
        features: ["Unified Dashboards", "Royalty Calculation", "Trend Analysis", "Sales Forecasting"]
    },
    {
        id: "consultation",
        title: "Publishing Consultation & Coaching",
        description: "Expert guidance. One-on-one strategy sessions to navigate the complexities of self-publishing.",
        features: ["Strategy Calls", "Career Planning", "Problem Solving", "Industry Insights"]
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-background text-primary min-h-screen pt-32 pb-20 px-6">
            <FloatingElements />
            <div className="max-w-[90vw] mx-auto mb-24 relative z-10">
                <h1 className="text-[10vw] font-bold uppercase tracking-tighter leading-none mb-6">
                    Services
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
                    We provide the infrastructure for your literary empire.
                </p>
            </div>

            <div className="border-t border-white/20">
                {services.map((service, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20 border-b border-white/20 hover:bg-surface transition-colors px-4">
                        <div>
                            <span className="text-secondary font-mono text-sm mb-4 block">0{idx + 1}</span>
                            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8">{service.title}</h2>
                            <p className="text-2xl text-gray-400 leading-relaxed mb-8">{service.description}</p>
                        </div>

                        <div className="flex flex-col justify-end">
                            <ul className="space-y-4">
                                {service.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-4 text-lg border-b border-white/10 pb-4">
                                        <Check className="w-5 h-5 text-secondary" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
