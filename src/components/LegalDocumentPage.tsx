"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { fadeUp } from "@/lib/motion";

export interface LegalDocumentSection {
  title: string;
  body?: string;
  paragraphs?: string[];
  bullets?: string[];
  content?: React.ReactNode;
}

export interface LegalDocumentPageProps {
  breadcrumbLabel: string;
  pageTitle: string;
  titleHighlight: string;
  intro: string;
  sections: LegalDocumentSection[];
  contactText: React.ReactNode;
  schema: Record<string, unknown>;
  ariaLabel: string;
}

function LegalSectionCard({
  title,
  body,
  paragraphs,
  bullets,
  content,
  highlighted = false,
}: LegalDocumentSection & { highlighted?: boolean }) {
  return (
    <article
      className={`rounded-2xl border border-primary/15 p-5 sm:p-6 md:p-8 shadow-sm ${
        highlighted ? "bg-primary-light" : "bg-white"
      }`}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-foreground font-heading leading-tight mb-3">
        {title}
      </h2>
      <div className="space-y-3 text-foreground text-sm sm:text-[15px] font-normal leading-relaxed font-sans">
        {content}
        {body && <p>{body}</p>}
        {paragraphs?.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
        {bullets && bullets.length > 0 && (
          <ul className="list-disc pl-5 space-y-2">
            {bullets.map((item) => (
              <li key={item.slice(0, 48)}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default function LegalDocumentPage({
  breadcrumbLabel,
  pageTitle,
  titleHighlight,
  intro,
  sections,
  contactText,
  schema,
  ariaLabel,
}: LegalDocumentPageProps) {
  return (
    <div className="w-full min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="w-full bg-gradient-to-b from-background via-background to-primary/5">
        <div className="max-w-[1140px] mx-auto w-full px-4 py-12 lg:py-16">
          <ScrollReveal variants={fadeUp}>
            <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm font-sans text-foreground/60">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-foreground/40">
                  /
                </li>
                <li className="text-foreground font-medium" aria-current="page">
                  {breadcrumbLabel}
                </li>
              </ol>
            </nav>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-heading leading-[1.18] tracking-tight">
              {pageTitle}{" "}
              <span className="text-primary font-extrabold">{titleHighlight}</span>
            </h1>

            <p className="mt-4 sm:mt-5 max-w-4xl text-foreground text-sm sm:text-[15px] font-normal leading-relaxed font-sans">
              {intro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="w-full" aria-label={ariaLabel}>
        <div className="max-w-[1140px] mx-auto w-full px-4 pb-12 lg:pb-20">
          <div className="space-y-4 sm:space-y-5">
            {sections.map((section) => (
              <LegalSectionCard key={section.title} {...section} />
            ))}

            <LegalSectionCard
              title="Contact Us"
              highlighted
              content={<p>{contactText}</p>}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
