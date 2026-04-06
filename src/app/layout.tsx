import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "B.N. Vaidya & Associates | Chartered Accountants in Mumbai",
    template: "%s | B.N. Vaidya & Associates",
  },
  description: "B.N. Vaidya & Associates is a multidisciplinary Chartered Accountancy firm in Mumbai with over 35 years of expertise in Direct Tax, GST, Audit, and Regulatory Services.",
  keywords: ["Chartered Accountants Mumbai", "B.N. Vaidya & Associates", "Income Tax Consultant Mumbai", "GST Advisory Mumbai", "Statutory Audit Mumbai", "Bullion Sector Consultancy"],
  openGraph: {
    title: "B.N. Vaidya & Associates | Chartered Accountants in Mumbai",
    description: "Multidisciplinary Chartered Accountancy firm providing expert tax, audit, and regulatory services since 1987.",
    url: "https://bnvca.co.in",
    siteName: "B.N. Vaidya & Associates",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
