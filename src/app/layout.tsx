import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { cn } from "@/lib/utils";
import { ContactPopup } from "@/components/layout/ContactPopup";
import { LiveChatWidget } from "@/components/layout/LiveChatWidget";
import { CartProvider } from "@/context/CartContext";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Prevent FOIT (Flash of Invisible Text)
  preload: true,
  fallback: ["system-ui", "arial"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kandledirectpublishing.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Professional Book Publishing Services | Kandle Direct",
    template: "%s | Kandle Direct Publishing",
  },
  alternates: {
    canonical: siteUrl,
  },
  description: "Affordable book publishing services with 100% royalties. Professional book formatting, cover design, and marketing. No hidden fees. Fast book production. Publish your book today with our experienced publishing team.",
  keywords: [
    // Primary Keywords
    "book publishing services",
    "self-publishing company",
    "professional book publishing",
    // Service-Based Keywords
    "affordable publishing packages",
    "book formatting services",
    "publishing team for authors",
    "author royalties",
    // Benefit-Driven Keywords
    "keep 100% of royalties",
    "no hidden publishing fees",
    "fast book production",
    "multi-device book testing",
    // Trust & Authority Keywords
    "publishing since 2011",
    "experienced publishing team",
    "proven track record authors",
    // Additional SEO Keywords
    "Amazon KDP",
    "self-publishing",
    "book marketing",
    "cover design",
    "ebook publishing"
  ],
  authors: [{ name: "Kandle Direct Publishing" }],
  creator: "Kandle Direct Publishing",
  publisher: "Kandle Direct Publishing",
  icons: {
    icon: "/images/Kandle Direct Publishing-Logo/Fav Icon .svg",
    apple: "/images/Kandle Direct Publishing-Logo/Fav Icon .svg",
  },
  openGraph: {
    title: "Professional Book Publishing Services | Kandle Direct",
    description: "Affordable publishing packages with no hidden fees. Keep 100% of your royalties. Professional formatting, cover design, and marketing since 2011.",
    url: siteUrl,
    siteName: "Kandle Direct Publishing",
    images: [
      {
        url: "/images/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Kandle Direct Publishing Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kandle Direct Publishing",
    description: "High-end book publishing services for the modern author.",
    images: ["/images/logo-full.png"],
    creator: "@kandledirect",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to critical domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M74DE8Y2J5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-M74DE8Y2J5');
          `}
        </Script>
      </head>
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          "antialiased bg-background text-primary selection:bg-secondary selection:text-white"
        )}
      >
        <SmoothScroll>
          <CartProvider>
            <JsonLd />
            <CustomCursor />
            <ContactPopup />
            <LiveChatWidget />
            <CookieConsent />
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}

