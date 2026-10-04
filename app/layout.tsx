import type { Metadata } from "next";
import { Jost, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jost = Jost({ variable: "--font-jost", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sparrow Group — Design, Shopfits, PMC, Retail Intelligence & Academy",
    template: "%s | Sparrow Group",
  },
  description:
    "Sparrow Group brings SS Interiors, Sparrow Shopfits, Sparrow PMC, Retail Intelligence and Sparrow Academy together — one partner for design, execution and growth.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
