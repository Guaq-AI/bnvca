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

const SITE_URL = "https://bnvca.co.in"; // Or the vercel URL if production domain isn't ready

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "B.N. Vaidya & Associates | Chartered Accountants in Mumbai | Direct Tax & GST Experts",
    template: "%s | B.N. Vaidya & Associates",
  },
  description: "B.N. Vaidya & Associates: Premier Chartered Accountancy firm in Mumbai. Since 1987, providing expertise in Direct Tax, GST, Statutory Audit, and Regulatory Advisory. Trusted financial excellence for businesses and individuals.",
  keywords: [
    "Chartered Accountants Mumbai", 
    "B.N. Vaidya & Associates", 
    "Income Tax Consultant Mumbai", 
    "GST Advisory Mumbai", 
    "Statutory Audit Mumbai", 
    "Top CA firm South Mumbai",
    "International Taxation India",
    "FEMA Compliance Services"
  ],
  authors: [{ name: "B.N. Vaidya & Associates" }],
  creator: "B.N. Vaidya & Associates",
  publisher: "B.N. Vaidya & Associates",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "B.N. Vaidya & Associates | Chartered Accountants in Mumbai",
    description: "Nearly four decades of uncompromising precision in Direct Tax, GST, Audit, and Regulatory Advisory. Mumbai's premier multidisciplinary CA firm.",
    url: SITE_URL,
    siteName: "B.N. Vaidya & Associates",
    images: [
      {
        url: "/home1.png", // Using an existing high-quality image as social preview
        width: 1200,
        height: 630,
        alt: "B.N. Vaidya & Associates | Chartered Accountants",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B.N. Vaidya & Associates | Chartered Accountants in Mumbai",
    description: "Expert Direct Tax, GST, and Audit services with a legacy of 35+ years. Mumbai's trusted financial partners.",
    images: ["/home1.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
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
  alternates: {
    canonical: SITE_URL,
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
      className={`${cormorant.variable} ${outfit.variable} h-full antialiased`}
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
