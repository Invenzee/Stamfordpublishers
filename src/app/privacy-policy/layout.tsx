import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Stamford Publishers - Premier Book Publishing Services",
  description:
    "Read the Privacy Policy for Stamford Publishers. Learn how we handle your data, project information, communications, and author service details.",
  alternates: {
    canonical: "https://stamfordpublishers.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Stamford Publishers",
    description:
      "Stamford Publishers Privacy Policy covering services, client responsibilities, payments, revisions, refunds, ownership, and confidentiality.",
    type: "website",
    url: "https://stamfordpublishers.com/privacy-policy",
    siteName: "Stamford Publishers",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
