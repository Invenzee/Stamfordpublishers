import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audiobook Services | Stamford Publishers - Premier Book Publishing Services",
  description:
    "Professional audiobook creation services for authors. Voice narration, production, formatting, and distribution support from Stamford Publishers.",
  alternates: {
    canonical: "https://stamfordpublishers.com/audiobook-services",
  },
  openGraph: {
    title: "Audiobook Services | Stamford Publishers",
    description:
      "Transform your book into a professional audiobook with narration support, production workflows, and distribution guidance from Stamford Publishers.",
    type: "website",
    url: "https://stamfordpublishers.com/audiobook-services",
    siteName: "Stamford Publishers",
  },
};

export default function AudiobookServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
