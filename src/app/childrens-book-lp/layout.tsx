import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Children's Book Publishing | Stamford Publishers",
  description:
    "Fast & trusted children's book publishing and marketing. Turn your story idea into a beautifully illustrated book that captivates young readers worldwide.",
  alternates: {
    canonical: "https://stamfordpublishers.com/childrens-book-lp",
  },
  openGraph: {
    title: "Children's Book Publishing | Stamford Publishers",
    description:
      "Professional children's book publishing, illustration, and marketing to help your story reach young readers globally.",
    type: "website",
    url: "https://stamfordpublishers.com/childrens-book-lp",
    siteName: "Stamford Publishers",
  },
};

export default function ChildrensBookLpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen bg-white text-[#111] font-sans">{children}</div>;
}
