import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: "Professional Book Publishing Services | Affordable Publishing Packages",
    description: "Book formatting services, cover design, Amazon KDP setup, and marketing from our experienced publishing team. No hidden fees. Keep 100% of royalties. Publish your book today.",
    keywords: ["book publishing services", "professional book publishing", "affordable publishing packages", "book formatting services", "publishing team for authors", "author royalties", "self-publishing company"],
    alternates: {
        canonical: "/services",
    },
    openGraph: {
        title: "Professional Book Publishing Services | Kandle Direct Publishing",
        description: "Book formatting services, cover design, Amazon KDP setup, and marketing. No hidden fees. Keep 100% of royalties.",
        url: "/services",
        type: "website",
    },
};

export default function ServicesPage() {
    return <ServicesClient />;
}
