export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    image: string;
    category: string;
    slug: string;
    rating: number;
    reviews: number;
    description: string;
    details: {
        publisher: string;
        publicationDate: string;
        language: string;
        printLength: string;
        dimensions: string;
        isbn10: string;
        isbn13: string;
    };
    authorBio: string;
    formats: {
        paperback: { price: number; isbn: string };
        hardcover: { price: number; isbn: string };
        ebook: { price: number; asin: string };
    };
}

export const books: Book[] = [
    {
        id: 1,
        title: "Silent Ocean",
        author: "Emily White",
        price: 24.99,
        image: "/images/silent-ocean.png",
        category: "Fiction",
        slug: "silent-ocean",
        rating: 4.8,
        reviews: 124,
        description: "A gripping tale of survival and mystery in the depths of the Pacific. Emily White weaves a narrative so compelling, you can taste the salt in the air. When the communication systems of the deep-sea station 'Vortex' go down, Dr. Aris Thorne is left with only his wits and the encroaching darkness.",
        details: {
            publisher: "Kandle Publishing",
            publicationDate: "January 15, 2025",
            language: "English",
            printLength: "342 pages",
            dimensions: "6 x 0.9 x 9 inches",
            isbn10: "1983506640",
            isbn13: "978-1983506640"
        },
        authorBio: "Emily White is a marine biologist turned bestselling author. Her time spent in submersibles informs the visceral realism of her fiction.",
        formats: {
            paperback: { price: 24.99, isbn: "978-1983506640" },
            hardcover: { price: 34.99, isbn: "978-1983506657" },
            ebook: { price: 14.99, asin: "B0CSM3N2K1" }
        }
    },
    {
        id: 2,
        title: "Modern Econ",
        author: "Dr. A. Smith",
        price: 39.99,
        image: "/images/modern-econ.png",
        category: "Non-Fiction",
        slug: "modern-econ",
        rating: 4.5,
        reviews: 89,
        description: "Rethinking economic policies for the digital age. Dr. Smith challenges traditional models and proposes a new framework for understanding value in a post-scarcity digital landscape.",
        details: {
            publisher: "Kandle Publishing",
            publicationDate: "March 10, 2025",
            language: "English",
            printLength: "288 pages",
            dimensions: "7 x 0.8 x 10 inches",
            isbn10: "1983506641",
            isbn13: "978-1983506641"
        },
        authorBio: "Dr. A. Smith acts as a consultant for major tech firms and teaches at the London School of Economics.",
        formats: {
            paperback: { price: 39.99, isbn: "978-1983506641" },
            hardcover: { price: 49.99, isbn: "978-1983506664" },
            ebook: { price: 19.99, asin: "B0CSM3N2K2" }
        }
    },
    {
        id: 3,
        title: "Author Signing",
        author: "James Miller",
        price: 19.99,
        image: "/images/author-signing.png",
        category: "Events",
        slug: "author-signing-memoirs",
        rating: 5.0,
        reviews: 42,
        description: "An exclusive look into the life of a touring author. James Miller captures the chaos, the joy, and the solitude of the road.",
        details: {
            publisher: "Kandle Publishing",
            publicationDate: "February 2, 2025",
            language: "English",
            printLength: "210 pages",
            dimensions: "5.5 x 0.6 x 8.5 inches",
            isbn10: "1983506642",
            isbn13: "978-1983506642"
        },
        authorBio: "James Miller has been documenting the literary world for over two decades.",
        formats: {
            paperback: { price: 19.99, isbn: "978-1983506642" },
            hardcover: { price: 29.99, isbn: "978-1983506671" },
            ebook: { price: 9.99, asin: "B0CSM3N2K3" }
        }
    },
    {
        id: 4,
        title: "The Darkest Night",
        author: "Sarah Jenkins",
        price: 14.99,
        image: "/images/silent-ocean.png",
        category: "Fantasy",
        slug: "the-darkest-night",
        rating: 4.2,
        reviews: 56,
        description: "When the sun fails to rise, the kingdom of Solara falls into chaos. A young mage must find the lost lantern before the shadow beasts consume everything.",
        details: {
            publisher: "Kandle Publishing",
            publicationDate: "April 20, 2025",
            language: "English",
            printLength: "400 pages",
            dimensions: "6 x 1.1 x 9 inches",
            isbn10: "1983506643",
            isbn13: "978-1983506643"
        },
        authorBio: "Sarah Jenkins loves epic fantasy and strong coffee.",
        formats: {
            paperback: { price: 14.99, isbn: "978-1983506643" },
            hardcover: { price: 24.99, isbn: "978-1983506688" },
            ebook: { price: 7.99, asin: "B0CSM3N2K4" }
        }
    },
    {
        id: 5,
        title: "Crimson Peak",
        author: "Robert Black",
        price: 29.99,
        image: "/images/modern-econ.png",
        category: "Thriller",
        slug: "crimson-peak",
        rating: 4.7,
        reviews: 210,
        description: "A high-stakes thriller set in the Alps. Espionage, betrayal, and a chase that will leave you breathless.",
        details: {
            publisher: "Kandle Publishing",
            publicationDate: "May 5, 2025",
            language: "English",
            printLength: "350 pages",
            dimensions: "6 x 1 x 9 inches",
            isbn10: "1983506644",
            isbn13: "978-1983506644"
        },
        authorBio: "Robert Black is a former intelligence officer.",
        formats: {
            paperback: { price: 29.99, isbn: "978-1983506644" },
            hardcover: { price: 39.99, isbn: "978-1983506695" },
            ebook: { price: 12.99, asin: "B0CSM3N2K5" }
        }
    },
    {
        id: 6,
        title: "Starlight Voyage",
        author: "Jessica Lee",
        price: 22.50,
        image: "/images/silent-ocean.png",
        category: "Sci-Fi",
        slug: "starlight-voyage",
        rating: 4.6,
        reviews: 180,
        description: "The first faster-than-light ship is ready to launch. But not everyone wants humanity to leave the cradle.",
        details: {
            publisher: "Kandle Publishing",
            publicationDate: "June 12, 2025",
            language: "English",
            printLength: "320 pages",
            dimensions: "6 x 0.9 x 9 inches",
            isbn10: "1983506645",
            isbn13: "978-1983506645"
        },
        authorBio: "Jessica Lee is an astrophysicist and writer.",
        formats: {
            paperback: { price: 22.50, isbn: "978-1983506645" },
            hardcover: { price: 32.50, isbn: "978-1983506701" },
            ebook: { price: 9.99, asin: "B0CSM3N2K6" }
        }
    },
    {
        id: 7,
        title: "Design Systems",
        author: "David Chen",
        price: 45.00,
        image: "/images/studio-vibe.png",
        category: "Design",
        slug: "design-systems",
        rating: 4.9,
        reviews: 300,
        description: "The comprehensive guide to building scalable UI libraries and maintaining design consistency across large teams.",
        details: {
            publisher: "Kandle Publishing",
            publicationDate: "July 1, 2025",
            language: "English",
            printLength: "500 pages",
            dimensions: "8 x 1.2 x 10 inches",
            isbn10: "1983506646",
            isbn13: "978-1983506646"
        },
        authorBio: "David Chen is a Principal Designer at a major Silicon Valley firm.",
        formats: {
            paperback: { price: 45.00, isbn: "978-1983506646" },
            hardcover: { price: 55.00, isbn: "978-1983506718" },
            ebook: { price: 29.99, asin: "B0CSM3N2K7" }
        }
    },
    {
        id: 8,
        title: "Culinary Arts",
        author: "Maria Garcia",
        price: 35.00,
        image: "/images/author-signing.png",
        category: "Lifestyle",
        slug: "culinary-arts",
        rating: 4.8,
        reviews: 150,
        description: "A journey through the flavors of the Mediterranean. Authentic recipes passed down through generations, adapted for the modern kitchen.",
        details: {
            publisher: "Kandle Publishing",
            publicationDate: "August 15, 2025",
            language: "English",
            printLength: "260 pages",
            dimensions: "8 x 0.8 x 10 inches",
            isbn10: "1983506647",
            isbn13: "978-1983506647"
        },
        authorBio: "Maria Garcia runs a Michelin-starred restaurant in Barcelona.",
        formats: {
            paperback: { price: 35.00, isbn: "978-1983506647" },
            hardcover: { price: 45.00, isbn: "978-1983506725" },
            ebook: { price: 15.99, asin: "B0CSM3N2K8" }
        }
    },
];

export interface Comment {
    id: number;
    user: string;
    date: string;
    avatar: string; // URL or initials
    content: string;
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string; // HTML or Markdown string
    date: string;
    author: string;
    image: string;
    category: string;
    comments: Comment[];
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Art of Cover Design in 2026",
        excerpt: "Why minimalism is fading and maximalist textures are taking over the bookshelves.",
        date: "Feb 02, 2026",
        author: "Kandle Team",
        image: "/images/studio-vibe.png",
        category: "Design",
        comments: [
            { id: 1, user: "Alice Walker", date: "Feb 03, 2026", avatar: "AW", content: "Great insights! I've definitely noticed the trend towards more texture." },
            { id: 2, user: "Bob Ross", date: "Feb 04, 2026", avatar: "BR", content: "Minimalism had its run, happy to see some life coming back to covers." }
        ],
        content: `
            <p class="mb-6">Cover design is an ever-evolving field, and as we step further into 2026, the trends are shifting dramatically. The era of stark minimalism, dominated by clean sans-serif typography and ample negative space, is slowly giving way to a resurgence of maximalist textures, intricate illustrations, and tactile typography. This shift isn't just aesthetic; it's a response to the digital fatigue readers are experiencing. In a world of flat screens, readers crave something that feels "real," even if it's just a digital representation of texture.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">The Return of Texture</h3>
            <p class="mb-6">One of the most defining characteristics of 2026 cover design is the use of hyper-realistic textures. Designers are layering grit, noise, paper grain, and even fabric patterns to create covers that look like they have physical depth. This approach taps into the haptic senses, promising a reading experience that is grounded and substantial. It’s no longer enough for a cover to look good on a smartphone screen; it needs to look like something you want to reach out and touch.</p>
            
            <p class="mb-6">We're seeing gold foiling effects, embossed lettering, and matte finishes being simulated in digital formats. This "digital skeuomorphism" is a nod to the traditional craftsmanship of bookbinding, bridging the gap between the ebook and the hardcover. Authors and publishers are realizing that a cover is the first point of contact, and in a crowded marketplace, texture implies quality.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">Typography: Big, Bold, and Tangled</h3>
            <p class="mb-6">Typography in 2026 is refusing to stay in its lane. The trend of "tangled" typography—where letters interact with the illustration, weaving behind and in front of elements—is huge. It creates a sense of depth and integration, making the title feel like an organic part of the artwork rather than a stamp placed on top.</p>
            
            <p class="mb-6">Serif fonts are making a massive comeback, often modified with swashes and ligatures that give them a bespoke, hand-lettered feel. These aren't your standard Times New Roman; these are high-contrast, dramatic typefaces that demand attention. They evoke a sense of history and authority, perfect for genres like fantasy, literary fiction, and historical romance.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">Color Palettes: Moody and Electric</h3>
            <p class="mb-6">Gone are the pastel days of the early 2020s. The color palettes of 2026 are deep, moody, and punctuated by electric neons. Think deep emerald greens, midnight blues, and charcoal greys, slashed through with vibrant oranges (like our Kandle orange!), hot pinks, or electric cyans. This high-contrast approach ensures visibility on small thumbnail sizes while retaining a sophisticated, premium look on full-size displays.</p>
            
            <p class="mb-6">Gradients are also evolving. Instead of smooth, linear fades, we're seeing "mesh gradients" and blurred auras that create a dreamy, ethereal atmosphere. This is particularly popular in the wellness, romance, and spiritual genres.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">The Role of AI in Concepting</h3>
            <p class="mb-6">While final execution remains the domain of skilled human illustrators and designers, AI is playing a larger role in the initial concepting phase. Authors are able to generate mood boards and rough concepts to communicate their vision more clearly to designers. This collaborative workflow speeds up the iteration process, allowing for more experimentation with layout and composition before the final pixels are polished.</p>
            
            <p class="mb-6">However, the "human touch" has become a premium value proposition. Publishers are explicitly highlighting "Hand-Illustrated" or "Human-Designed" as selling points, differentiating their books from the flood of generic AI-generated imagery. Authenticity is the new currency.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">Conclusion</h3>
            <p class="mb-6">As we move through 2026, the key takeaway is that "more is more." Readers want richness, they want depth, and they want covers that tell a story before page one is even turned. Whether you're an indie author or a traditional publishing house, investing in a cover that embraces these maximalist, textured trends is the best way to signal that your book is a premium, immersive experience worth their time.</p>
            
            <p class="mb-6">At Kandle Publishing, we're at the forefront of these trends, helping our authors create covers that don't just sit on a shelf—they jump off it.</p>
        `
    },
    {
        id: 2,
        title: "Self-Publishing vs Traditional: The Reality",
        excerpt: "Breaking down the numbers, the control, and the creative freedom of going indie.",
        date: "Jan 28, 2026",
        author: "Sarah Jenkins",
        image: "/images/author-signing.png",
        category: "Industry",
        comments: [],
        content: `
            <p class="mb-6">The debate between self-publishing and traditional publishing is one of the oldest in the modern literary world. But in 2026, the landscape looks vastly different than it did even five years ago. The stigma once attached to "vanity publishing" is dead and buried. Today, indie publishing is a powerhouse choice for entrepreneurs, experts, and career novelists alike. But is it right for you? Let's look at the reality of the numbers, the control, and the hustle.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">The Math of Royalties</h3>
            <p class="mb-6">Let's start with the cold, hard cash. In traditional publishing, a standard royalty rate for a paperback might be anywhere from 5% to 10% of the cover price. If your book sells for $20, you might make $1 to $2 per copy. You usually get an advance against these royalties, which means you don't see another dime until that advance creates "earn out"—something many books never do.</p>
            
            <p class="mb-6">Contrast this with self-publishing. On platforms like Amazon KDP or IngramSpark, royalties are typically around 60% to 70% of the list price (minus print costs). For that same $20 book, your profit might be $5 to $8 per copy. If you sell just 1,000 copies as an indie, you could make what a traditionally published author makes on 5,000 or 10,000 copies.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">Speed to Market</h3>
            <p class="mb-6">Traditional publishing is slow. Glacial. From the moment you sign a deal (which can take months or years of querying agents), it is usually another 18 to 24 months before your book sits on a shelf. This timeline works for timeless fiction, but for non-fiction topics like technology, business, or current events, your book could be obsolete before it's even printed.</p>
            
            <p class="mb-6">Self-publishing is agile. Once your manuscript is edited and formatted, you can be live on global marketplaces in less than 72 hours. You can pivot your marketing, update your cover, or fix a typo instantly. This speed is a massive competitive advantage for authors who want to capitalize on trends.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">Creative Control: The Double-Edged Sword</h3>
            <p class="mb-6">When you sign with a traditional publisher, you sign away control. They choose the cover. They choose the title. They have final say on the edits. For some authors, this is a relief—they want experts to handle the packaging. For others, it's a nightmare. We've heard countless stories of authors hating their book covers but being powerless to change them.</p>
            
            <p class="mb-6">As an indie author, you are the CEO of your book. You hire the editor, you hire the cover designer, you approve every proof. The final product is 100% your vision. However, this means the quality falls 100% on your shoulders. If you skimp on editing or design, the market will punish you. "With great power comes great responsibility," as they say.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">Marketing: The Great Equalizer</h3>
            <p class="mb-6">Here is the open secret of the industry: Traditional publishers barely market new authors anymore. Unless you are a celebrity or receive a massive lead advance, you are expected to do your own marketing. You have to build the email list, run the social media, and book the signings.</p>
            
            <p class="mb-6">If you're going to do the work of marketing anyway, why give away 85% of your royalties? This realization is what drives many hybrid authors (those who do both trad and indie) to move fully exclusive to self-publishing for their backlist titles.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">Conclusion</h3>
            <p class="mb-6">There is no "wrong" path, only the path that fits your goals. If you want the prestige of a Big Five logo on your spine and the chance at being in airport bookstores, traditional publishing is still the gatekeeper. But if you want to maximize your income, retain full ownership of your IP, and move fast, self-publishing is the undisputed king in 2026.</p>
        `
    },
    {
        id: 3,
        title: "Marketing Your Debut Novel",
        excerpt: "Strategies that actually work for first-time authors without a massive budget.",
        date: "Jan 15, 2026",
        author: "James Miller",
        image: "/images/modern-econ.png",
        category: "Marketing",
        comments: [],
        content: `
            <p class="mb-6">You've written the book. You've edited it. The cover is gorgeous. Now comes the hard part: getting people to actually read it. Marketing a debut novel is daunting, especially when you don't have a five-figure budget or an existing fanbase. But fear not—grassroots marketing is more effective than ever. Here are the strategies that are moving the needle for debut authors in 2026.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">The Power of "BookTok" and Micro-Influencers</h3>
            <p class="mb-6">TikTok remains a juggernaut for fiction. But the era of paying huge influencers is waning. Readers trust authenticity. The most effective strategy now is targeting "micro-influencers"—BookTokers with 1k to 10k followers who are hyper-engaged in specific niches (e.g., "Dark Academia Romance" or "Hard Sci-Fi"). Sending them a free physical copy (ARCs) often yields better ROI than a generic Facebook ad.</p>
            
            <p class="mb-6">Don't just pitch; participate. Authors who post behind-the-scenes content, writing vlogs, and react to other books build a parasocial relationship with potential readers before their book even drops.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">Newsletter Swaps</h3>
            <p class="mb-6">Email remains the highest converting channel, period. But how do you build a list from zero? Newsletter swaps. Find other authors in your genre who are at a similar level (or slightly ahead) and ask to swap shoutouts. You mention their book to your 50 subscribers; they mention yours to their 50. It sounds small, but it compounds. Platforms like StoryOrigin and BookFunnel automate this and are invaluable tools for the budget-conscious author.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">The "First 50" Review Strategy</h3>
            <p class="mb-6">Social proof is everything. Your launch goal shouldn't be sales; it should be reviews. A book with 0 reviews looks risky. A book with 50 reviews (even mixed ones) looks legitimate. Build a "Street Team" of beta readers, friends, and early fans. Give them the book for free in exchange for an honest review on launch day. Services like Pubby or BookSprout can also help you get those critical first reviews to wake up the Amazon algorithm.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">Amazon Ads: Low Bid, High Volume</h3>
            <p class="mb-6">You don't need to spend $100/day on ads. A "low bid" strategy on Amazon Ads (bidding $0.20 - $0.30 per click) on thousands of relevant keywords (other book titles, author names) can trickle in steady sales with a positive ROI. It's a slow burn, not a fire hose, but it keeps your sales rank alive while you sleep.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">Conclusion</h3>
            <p class="mb-6">Marketing is a marathon, not a sprint. Your first book might not make you rich, but it builds the foundation. Collect emails, be kind to your readers, and write the next book. The best marketing for book one is always book two.</p>
        `
    },
    {
        id: 4,
        title: "Understanding Layout & Typography",
        excerpt: "How font choice affects readability and reader retention in fiction books.",
        date: "Dec 10, 2025",
        author: "Design Lead",
        image: "/images/silent-ocean.png",
        category: "Typography",
        comments: [],
        content: `
            <p class="mb-6">We've all been there: you open a book, and something feels... wrong. The text is too dense, or the font is annoying, or the margins are so tight you have to crack the spine to read the ends of lines. Bad layout kills books faster than bad writing. Good layout, on the other hand, is invisible. It steps out of the way and lets the story shine.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">Serif vs. Sans-Serif for Body Text</h3>
            <p class="mb-6">Rule number one of book design: Body text in print should almost always be a Serif font. Garamond, Caslon, Minion Pro, Sabon. These fonts have "feet" (serifs) that guide the eye horizontally along the line, reducing eye strain over long periods. Sans-serif fonts (like Arial or Helvetica) are great for headers or digital screens, but in a 300-page printed novel, they can feel cold and fatiguing.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">Leading and Tracking</h3>
            <p class="mb-6">"Leading" (pronounced ledding) is the space between lines. "Tracking" is the space between letters. Most amateur self-published books suffer from tight leading. If your font size is 11pt, your leading should be at least 14pt or 15pt. Give the text room to breathe. White space is not wasted space; it's active support for the reader's cognitive load.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">Widows and Orphans</h3>
            <p class="mb-6">A "widow" is a single word left alone on a line at the end of a paragraph. An "orphan" is a single line of a paragraph left at the bottom of a page. These are the marks of amateur formatting. Professional typesetters spend hours manually adjusting tracking by fractions of a point to "tuck in" these loose ends, creating a perfect, rectangular block of text (the "gray page"). It's obsessive, yes, but it makes the difference between a book that feels cheap and one that feels clear.</p>

            <h3 class="text-2xl font-bold mb-4 text-white">Conclusion</h3>
            <p class="mb-6">Respect your words enough to dress them well. If you've spent years writing a story, don't let a default Word Doc template ruin the experience. Typography is the voice of your book—make sure it's speaking clearly.</p>
        `
    }
];
