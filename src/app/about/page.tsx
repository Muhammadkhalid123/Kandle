import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About Us | Professional Book Publishing Services",
    description: "London-based book publishing company offering professional editing, formatting, cover design & marketing. 100% royalties & rights. Join 500+ published authors.",
    keywords: ["book publishing company", "London publishing", "self-publishing services", "independent publishing", "author services"],
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Kandle Direct Publishing",
        description: "London-based book publishing company offering professional editing, formatting, cover design & marketing.",
        url: "/about",
        type: "website",
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
