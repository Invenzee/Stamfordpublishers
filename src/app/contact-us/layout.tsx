import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Stamford Publishers - Premier Book Publishing Services",
  description:
    "Get in touch with Stamford Publishers. Schedule a free consultation, call our publishing experts, or send your questions about book publishing, marketing, and author services.",
  alternates: {
    canonical: "https://stamfordpublishers.com/contact-us",
  },
  openGraph: {
    title: "Contact Us | Stamford Publishers",
    description:
      "Reach Stamford Publishers for publishing support, free consultations, and answers to your author questions. We're here to help you publish with confidence.",
    type: "website",
    url: "https://stamfordpublishers.com/contact-us",
    siteName: "Stamford Publishers",
  },
};

export default function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
