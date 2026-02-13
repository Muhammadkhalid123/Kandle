import { Metadata } from "next";
import FAQClient from "./FAQClient";
import { generateFAQJsonLd } from "@/lib/seo/schemas";

export const metadata: Metadata = {
    title: "FAQ | Self Publishing & Amazon KDP Questions Answered",
    description: "Get answers to common questions about self-publishing, Amazon KDP, book rights, royalties, costs, and distribution. Expert guidance for independent authors.",
    keywords: ["self publishing FAQ", "Amazon KDP questions", "book publishing costs", "author royalties", "book rights", "KDP publishing time"],
    alternates: {
        canonical: "/faq",
    },
    openGraph: {
        title: "Frequently Asked Questions | Kandle Direct Publishing",
        description: "Get answers to common questions about self-publishing, Amazon KDP, book rights, royalties, and distribution.",
        url: "/faq",
        type: "website",
    },
};

export const faqs = [
    {
        question: "Do I Keep 100% of My Book Rights When Self Publishing?",
        answer: "Yes, when you publish with Kandle Direct Publishing, you retain 100% ownership of your book rights. We do not claim copyright, royalties, or intellectual property. As a self-publishing author, you maintain full creative control, pricing authority, and publishing rights across Amazon KDP and other platforms."
    },
    {
        question: "How Long Does It Take to Publish a Book on Amazon KDP?",
        answer: "The self-publishing process typically takes 2 to 6 weeks depending on editing, formatting, and cover design requirements. Once submitted to Amazon KDP, approval usually takes 24 to 72 hours. If revisions are required, additional time may apply."
    },
    {
        question: "Do You Handle Book Distribution on Amazon and International Markets?",
        answer: "Yes, we assist with global distribution through Amazon KDP, allowing your book to be available in the United States, United Kingdom, Canada, Australia, and other major English-speaking markets. We help configure pricing, categories, and international availability."
    },
    {
        question: "What Book Genres Do You Help Publish?",
        answer: "We work with fiction, non-fiction, memoirs, business books, self-help, children's books, and academic titles. Our editing, formatting, and marketing strategies are tailored to your genre and target audience."
    },
    {
        question: "Can I Order Book Cover Design Services Without a Full Publishing Package?",
        answer: "Yes, you can order standalone services such as book cover design, manuscript formatting, or editing without purchasing a full publishing package. Authors can select only the services they need."
    },
    {
        question: "Is Amazon KDP Free to Use for Self Publishing?",
        answer: "Yes, Amazon KDP is free to use. Authors can upload and publish their eBook or paperback without upfront publishing fees. However, optional services such as editing, formatting, and marketing may involve professional costs."
    },
    {
        question: "How Much Does It Cost to Self Publish a Book?",
        answer: "The cost of self publishing varies depending on editing, design, and marketing needs. Basic publishing through Amazon KDP is free, but professional services can range from a few hundred to several thousand dollars depending on quality requirements."
    },
    {
        question: "Do Authors Receive Royalties Directly From Amazon?",
        answer: "Yes, Amazon pays royalties directly to authors through their KDP account. Depending on pricing and distribution options, authors may earn 35% or 70% royalty on eBooks and up to 60% minus print costs for paperbacks."
    },
    {
        question: "Can I Publish Both eBook and Paperback Versions?",
        answer: "Yes, you can publish both eBook and paperback versions through Amazon KDP. We assist with formatting, cover sizing, ISBN setup, and pricing for both formats."
    },
    {
        question: "Do You Help With Book Marketing After Publishing?",
        answer: "Yes, we offer post-publishing marketing services including Amazon optimization, keyword research, category selection, and promotional strategies designed to increase visibility and sales."
    }
];

export default function FAQPage() {
    // Generate FAQ schema
    const faqSchema = generateFAQJsonLd(faqs);

    return (
        <>
            {/* FAQ Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <FAQClient faqs={faqs} />
        </>
    );
}
