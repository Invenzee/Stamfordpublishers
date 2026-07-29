import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Book Editing & Proofreading Services | Stamford Publishers",
  description:
    "Turn your manuscript into a masterpiece with professional book editing and proofreading. Genre-specialist editors, line-by-line precision, and guaranteed on-time delivery.",
  alternates: {
    canonical: "https://stamfordpublishers.com/book-editing-lp",
  },
  openGraph: {
    title: "Professional Book Editing & Proofreading Services | Stamford Publishers",
    description:
      "Expert book editing and proofreading — developmental edits, line and copy editing, and precision proofreading that keeps your voice intact.",
    type: "website",
    url: "https://stamfordpublishers.com/book-editing-lp",
    siteName: "Stamford Publishers",
  },
};

export default function BookEditingLpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen bg-white text-[#111] font-sans">{children}</div>;
}
