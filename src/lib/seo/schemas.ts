import { Book, BlogPost } from '@/lib/data';

export function generateProductJsonLd(book: Book) {
    const baseUrl = 'https://kandledirectpublishing.com';

    // Using any for schema - Google validates at runtime
    const productSchema: any = {
        '@type': ['Product', 'Book'],
        '@id': `${baseUrl}/shop/${book.slug}#product`,
        name: book.title,
        description: book.description,
        image: `${baseUrl}${book.image}`,
        url: `${baseUrl}/shop/${book.slug}`,

        // Book-specific properties
        author: {
            '@type': 'Person',
            name: book.author,
            description: book.authorBio,
        },
        publisher: {
            '@type': 'Organization',
            name: book.details.publisher,
            url: baseUrl,
            logo: `${baseUrl}/images/Kandle Direct Publishing-Logo/Fav Icon .svg`,
        },
        datePublished: book.details.publicationDate,
        inLanguage: book.details.language,
        numberOfPages: parseInt(book.details.printLength),
        isbn: book.details.isbn13,
        bookFormat: 'https://schema.org/Paperback',

        // Product properties
        brand: {
            '@type': 'Brand',
            name: 'Kandle Direct Publishing',
        },
        sku: book.slug,
        gtin13: book.details.isbn13.replace(/-/g, ''),

        // Aggregate rating
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: book.rating.toString(),
            reviewCount: book.reviews.toString(),
            bestRating: '5',
            worstRating: '1',
        },

        // Offers for all formats
        offers: [
            {
                '@type': 'Offer',
                price: book.formats.paperback.price.toString(),
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
                url: `${baseUrl}/shop/${book.slug}`,
                seller: {
                    '@type': 'Organization',
                    name: 'Kandle Direct Publishing',
                },
                itemCondition: 'https://schema.org/NewCondition',
                priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
                shippingDetails: {
                    '@type': 'OfferShippingDetails',
                    shippingRate: {
                        '@type': 'MonetaryAmount',
                        value: '0',
                        currency: 'USD',
                    },
                    shippingDestination: {
                        '@type': 'DefinedRegion',
                        addressCountry: 'US',
                    },
                },
            },
            {
                '@type': 'Offer',
                price: book.formats.hardcover.price.toString(),
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
                url: `${baseUrl}/shop/${book.slug}`,
                seller: {
                    '@type': 'Organization',
                    name: 'Kandle Direct Publishing',
                },
                itemCondition: 'https://schema.org/NewCondition',
            },
            {
                '@type': 'Offer',
                price: book.formats.ebook.price.toString(),
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
                url: `${baseUrl}/shop/${book.slug}`,
                seller: {
                    '@type': 'Organization',
                    name: 'Kandle Direct Publishing',
                },
                itemCondition: 'https://schema.org/NewCondition',
            },
        ],
    };

    return {
        '@context': 'https://schema.org',
        '@graph': [productSchema],
    };
}

export function generateBlogPostJsonLd(post: BlogPost) {
    const baseUrl = 'https://kandledirectpublishing.com';

    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: `${baseUrl}${post.image}`,
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.date).toISOString(),
        author: {
            '@type': 'Person',
            name: post.author,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Kandle Direct Publishing',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/images/Kandle Direct Publishing-Logo/Fav Icon .svg`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}/blog/${post.id}`,
        },
    };
}

export function generateFAQJsonLd(faqs: Array<{ question: string; answer: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

export function generateBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
