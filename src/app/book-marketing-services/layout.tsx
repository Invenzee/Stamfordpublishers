import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Marketing Services | Stamford Publishers - Premier Book Publishing Services",
  description:
    "Strategic book promotion services for independent authors. Custom marketing plans, campaign setup, and promotional support from Stamford Publishers.",
  alternates: {
    canonical: "https://stamfordpublishers.com/book-marketing-services",
  },
  openGraph: {
    title: "Book Marketing Services | Stamford Publishers",
    description:
      "Reach more readers with tailored book marketing strategies, campaign support, and author branding from Stamford Publishers.",
    type: "website",
    url: "https://stamfordpublishers.com/book-marketing-services",
    siteName: "Stamford Publishers",
  },
};

export default function BookMarketingServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
