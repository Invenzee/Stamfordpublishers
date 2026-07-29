import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Self-Publishing & Distribution Services | Stamford Publishers",
  description:
    "End-to-end self-publishing from manuscript editing and cover design to ISBN assignment, global distribution, and Amazon optimization. You keep 100% rights and royalties.",
  alternates: {
    canonical: "https://stamfordpublishers.com/book-publishing-services-lp",
  },
  openGraph: {
    title: "Professional Self-Publishing & Distribution Services | Stamford Publishers",
    description:
      "Complete self-publishing solutions — formatting, cover design, ISBN setup, print-on-demand, and worldwide distribution through major bookstores.",
    type: "website",
    url: "https://stamfordpublishers.com/book-publishing-services-lp",
    siteName: "Stamford Publishers",
  },
};

export default function BookPublishingServicesLpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen bg-white text-[#111] font-sans">{children}</div>;
}
