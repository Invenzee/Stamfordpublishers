import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Stamford Publishers - Premier Book Publishing Services",
  description:
    "Read the Terms & Conditions for Stamford Publishers publishing, editing, design, audiobook, marketing, and related author services.",
  alternates: {
    canonical: "https://stamfordpublishers.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Stamford Publishers",
    description:
      "Review Stamford Publishers Terms & Conditions covering services, payments, revisions, ownership, refunds, and client responsibilities.",
    type: "website",
    url: "https://stamfordpublishers.com/terms-and-conditions",
    siteName: "Stamford Publishers",
  },
};

export default function TermsAndConditionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
