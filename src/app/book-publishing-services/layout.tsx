import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Publishing Services | Stamford Publishers - Premier Book Publishing Services",
  description:
    "Comprehensive book publishing services for independent authors. Professional editing, cover design, formatting, global distribution, and marketing from Stamford Publishers.",
  alternates: {
    canonical: "https://stamfordpublishers.com/book-publishing-services",
  },
  openGraph: {
    title: "Book Publishing Services | Stamford Publishers",
    description:
      "Publish your book with expert editing, design, formatting, and global distribution. Stamford Publishers helps independent authors bring their stories to readers worldwide.",
    type: "website",
    url: "https://stamfordpublishers.com/book-publishing-services",
    siteName: "Stamford Publishers",
  },
};

export default function BookPublishingServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
