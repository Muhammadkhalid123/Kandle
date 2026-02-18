import { WithContext, Organization } from "schema-dts";

export function JsonLd() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kandledirectpublishing.com";

    const organizationSchema: WithContext<Organization> = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Kandle Direct Publishing",
        url: siteUrl,
        logo: `${siteUrl}/favicon.svg`,
        description: "Professional book publishing services including editing, formatting, cover design, and marketing for independent authors. Specializing in Amazon KDP, self-publishing, and ebook distribution.",
        foundingDate: "2020",
        slogan: "Redefining Authorship",

        // Contact Information
        email: "Kandledirectpublishing@gmail.com",
        contactPoint: [
            {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "Kandledirectpublishing@gmail.com",
                availableLanguage: ["English"],
                areaServed: ["US", "GB", "CA", "AU"],
            },
        ],

        // Social Media Profiles
        sameAs: [
            "https://www.facebook.com/kandledirect",
            "https://twitter.com/kandledirect",
            "https://www.instagram.com/kandledirect",
            "https://www.linkedin.com/company/kandle-direct-publishing",
        ],

        // Services Offered
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Publishing Services",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Book Formatting",
                        description: "Professional book formatting for print and digital formats",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Cover Design",
                        description: "Custom book cover design services",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Book Marketing",
                        description: "Comprehensive book marketing and promotion services",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Amazon KDP Publishing",
                        description: "Amazon Kindle Direct Publishing setup and optimization",
                    },
                },
            ],
        },
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Kandle Direct Publishing",
        "alternateName": ["Kandle Direct", "KDP"],
        "url": siteUrl
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}

