import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const raleway = Raleway({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stamford Publishers | Premier Book Publishing & Marketing Services",
  description:
    "Transform your manuscript into a bestseller with Stamford Publishers. 100% author royalties, professional editing, custom cover design, and global distribution.",
  keywords: [
    "book publishing",
    "publish a book",
    "self publishing services",
    "book marketing",
    "manuscript editing",
    "Stamford Publishers",
  ],
  alternates: {
    canonical: "https://stamfordpublishers.com",
  },
  openGraph: {
    title: "Stamford Publishers | Premier Book Publishing Services",
    description:
      "Publish your book with 100% royalty ownership and global distribution across Amazon, Barnes & Noble, and international booksellers.",
    type: "website",
    url: "https://stamfordpublishers.com",
    siteName: "Stamford Publishers",
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
      className={`${poppins.variable} ${raleway.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FBFBFC] text-[#1D1D1F] selection:bg-[#59101B] selection:text-white overflow-x-hidden">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
