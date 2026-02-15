import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { books } from '@/lib/data';
import ProductPageClient from './ProductPageClient';
import { generateProductJsonLd } from '@/lib/seo/schemas';

// Generate static params for all books (SSG at build time)
export async function generateStaticParams() {
    return books.map((book) => ({
        slug: book.slug,
    }));
}

// ISR: Revalidate every hour
export const revalidate = 3600;

// Dynamic metadata generation
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const book = books.find((b) => b.slug === slug);

    if (!book) {
        return {
            title: 'Book Not Found',
        };
    }

    const title = `${book.title} by ${book.author} – Kandle Direct Publishing`;
    const description = `${book.description.substring(0, 150)}... ⭐ ${book.rating}/5 (${book.reviews} reviews). Available in Paperback, Hardcover & Ebook.`;
    const canonicalUrl = `https://kandledirectpublishing.com/shop/${book.slug}`;

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: 'Kandle Direct Publishing',
            images: [
                {
                    url: `https://kandledirectpublishing.com${book.image}`,
                    width: 1200,
                    height: 630,
                    alt: `${book.title} book cover`,
                },
            ],
            locale: 'en_GB',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [`https://kandledirectpublishing.com${book.image}`],
            creator: '@kandledirect',
        },
        other: {
            'product:price:amount': book.formats.paperback.price.toString(),
            'product:price:currency': 'USD',
            'product:availability': 'in stock',
            'product:condition': 'new',
            'product:retailer_item_id': book.slug,
        },
    };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const book = books.find((b) => b.slug === slug);

    if (!book) {
        notFound();
    }

    // Generate JSON-LD structured data
    const jsonLd = generateProductJsonLd(book);

    return (
        <>
            {/* Inject JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Client component for interactivity */}
            <ProductPageClient book={book} />
        </>
    );
}

