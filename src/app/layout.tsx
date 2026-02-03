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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair", // Keeping as secondary accent
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kandle Publishing | Redefining Authorship",
  description: "High-end book publishing services for the modern author. Formatting, cover design, and marketing with a competitive edge.",
  icons: {
    icon: "/images/Kandle Direct Publishing-Logo/Fav Icon .svg",
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
