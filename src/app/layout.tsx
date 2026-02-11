import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Keeping fonts but Inter will be primary
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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair", // Keeping as secondary accent
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kandle Direct Publishing | Redefining Authorship",
  description: "High-end book publishing services for the modern author. Formatting, cover design, and marketing with a competitive edge.",
  icons: {
    icon: "/images/Kandle Direct Publishing-Logo/Fav Icon .svg",
    apple: "/images/Kandle Direct Publishing-Logo/Fav Icon .svg",
  },
  openGraph: {
    title: "Kandle Direct Publishing | Redefining Authorship",
    description: "High-end book publishing services for the modern author. Formatting, cover design, and marketing with a competitive edge.",
    url: "https://kandledirectpublishing.com",
    siteName: "Kandle Direct Publishing",
    images: [
      {
        url: "/images/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Kandle Direct Publishing Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kandle Direct Publishing",
    description: "High-end book publishing services for the modern author.",
    images: ["/images/logo-full.png"],
    creator: "@kandledirect",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
      </body>
    </html>
  );
}
