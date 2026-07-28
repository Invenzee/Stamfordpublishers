import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Stamford Publishers - Premier Book Publishing Services",
  description:
    "Learn how Stamford Publishers helps authors publish with confidence. Discover our story, mission, vision, and values behind our author-focused publishing services.",
  alternates: {
    canonical: "https://stamfordpublishers.com/about-us",
  },
  openGraph: {
    title: "About Us | Stamford Publishers",
    description:
      "Discover the story behind Stamford Publishers — a trusted partner for authors seeking professional editing, design, publishing, and marketing support.",
    type: "website",
    url: "https://stamfordpublishers.com/about-us",
    siteName: "Stamford Publishers",
  },
};

export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
