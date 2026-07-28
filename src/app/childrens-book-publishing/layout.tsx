import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Childrens Book Publishing | Stamford Publishers - Premier Book Publishing Services",
  description:
    "Children's book publishing services for authors. Editing, illustration support, design, publishing, and marketing for captivating children's stories from Stamford Publishers.",
  alternates: {
    canonical: "https://stamfordpublishers.com/childrens-book-publishing",
  },
  openGraph: {
    title: "Childrens Book Publishing | Stamford Publishers",
    description:
      "Publish engaging children's books with professional editing, design, and distribution support tailored for young readers.",
    type: "website",
    url: "https://stamfordpublishers.com/childrens-book-publishing",
    siteName: "Stamford Publishers",
  },
};

export default function ChildrensBookPublishingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
