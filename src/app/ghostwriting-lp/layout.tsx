import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Book & eBook Ghostwriting Services | Stamford Publishers",
  description:
    "Work with experienced book ghostwriters who capture your voice and deliver publication-ready manuscripts. You keep 100% of the credit, rights, and royalties.",
  alternates: {
    canonical: "https://stamfordpublishers.com/ghostwriting-lp",
  },
  openGraph: {
    title: "Professional Book & eBook Ghostwriting Services | Stamford Publishers",
    description:
      "Fiction, memoir, business, and eBook ghostwriting with chapter-by-chapter reviews, signed NDAs, and full copyright transfer.",
    type: "website",
    url: "https://stamfordpublishers.com/ghostwriting-lp",
    siteName: "Stamford Publishers",
  },
};

export default function GhostwritingLpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen bg-white text-[#111] font-sans">{children}</div>;
}
