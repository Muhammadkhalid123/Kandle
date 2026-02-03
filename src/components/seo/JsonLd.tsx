import { WithContext, LocalBusiness } from "schema-dts";

export function JsonLd() {
    const schema: WithContext<LocalBusiness> = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Kandle Direct Publishing",
        url: "https://kandledirectpublishing.com",
        logo: "https://kandledirectpublishing.com/logo.png",
        description: "Professional book publishing services including editing, formatting, cover design, and marketing for independent authors.",
        address: {
            "@type": "PostalAddress",
            streetAddress: "123 Publishing Way",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10001",
            addressCountry: "US"
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-0123",
            contactType: "customer service"
        },
        priceRange: "$$"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
