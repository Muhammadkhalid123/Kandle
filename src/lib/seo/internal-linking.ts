import { books, blogPosts } from '@/lib/data';

/**
 * Generates related books based on category and rating
 */
export function getRelatedBooks(currentBook: typeof books[0], limit = 3) {
    return books
        .filter((book) => book.id !== currentBook.id && book.category === currentBook.category)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
}

/**
 * Generates related blog posts for a book based on category keywords
 */
export function getRelatedBlogPosts(book: typeof books[0], limit = 2) {
    const categoryKeywords = book.category.toLowerCase();

    return blogPosts
        .filter((post) =>
            post.category.toLowerCase().includes(categoryKeywords) ||
            post.title.toLowerCase().includes(categoryKeywords)
        )
        .slice(0, limit);
}

/**
 * Generates related books for a blog post based on category
 */
export function getRelatedBooksForPost(post: typeof blogPosts[0], limit = 3) {
    return books
        .filter((book) =>
            book.category.toLowerCase() === post.category.toLowerCase()
        )
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
}

/**
 * Build-time script to generate internal linking report
 */
export function generateLinkingReport() {
    const report = {
        totalBooks: books.length,
        totalPosts: blogPosts.length,
        bookLinks: books.map((book) => ({
            title: book.title,
            slug: book.slug,
            relatedBooks: getRelatedBooks(book).map((b) => b.slug),
            relatedPosts: getRelatedBlogPosts(book).map((p) => p.id),
        })),
        postLinks: blogPosts.map((post) => ({
            title: post.title,
            id: post.id,
            relatedBooks: getRelatedBooksForPost(post).map((b) => b.slug),
        })),
    };

    console.log('📊 Internal Linking Report:', JSON.stringify(report, null, 2));
    return report;
}
