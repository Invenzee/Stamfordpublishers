"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FaChevronDown } from "react-icons/fa6";
import { ScrollStagger, ScrollStaggerItem } from "./ScrollReveal";
import { fadeUp, motionViewport } from "@/lib/motion";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  heading?: string;
  highlightedHeading?: string;
  items?: FAQItem[];
  defaultOpenIndex?: number | null;
  className?: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "What services does Stamford Publishers offer for new authors?",
    answer:
      "Stamford Publishers provides a full range of services for new authors, including writing support, editing, cover design, publishing, audiobook production, and book marketing. Whether you're starting your manuscript or preparing it for release, our team offers guidance tailored to your needs and publishing goals.",
  },
  {
    question: "How does Stamford Publishers support self-publishing?",
    answer:
      "Stamford Publishers supports self-publishing by helping authors prepare, polish, publish, and promote their books with professional guidance at every stage.",
  },
  {
    question:
      "Can I maintain full creative control over my book when working with Stamford Publishers?",
    answer:
      "Yes. Stamford Publishers works collaboratively with authors while keeping their voice, vision, and creative direction at the heart of the project.",
  },
  {
    question: "How does Stamford Publishers' book marketing service support my book?",
    answer:
      "Stamford Publishers helps promote your book through customized marketing strategies designed to improve visibility, reach the right readers, and support your author brand.",
  },
  {
    question: "What formats does Stamford Publishers publish in?",
    answer:
      "Stamford Publishers can help prepare books for paperback, hardcover, eBook, and audiobook formats based on your publishing goals.",
  },
];

export default function FAQSection({
  heading = "Frequently Asked",
  highlightedHeading = "Questions",
  items = defaultFaqs,
  defaultOpenIndex = null,
  className = "",
}: FAQSectionProps) {
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      className={`w-full bg-background ${className}`}
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1140px] mx-auto w-full px-4 py-12 lg:py-16">
        <motion.h2
          id="faq-heading"
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-heading leading-[1.2] tracking-tight mb-8 sm:mb-10 md:mb-12"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={motionViewport}
          variants={fadeUp}
        >
          {heading}{" "}
          <span className="text-primary font-extrabold">{highlightedHeading}</span>
        </motion.h2>

        <ScrollStagger className="space-y-3 sm:space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <ScrollStaggerItem key={item.question}>
                <div className="rounded-lg border border-primary/15 bg-primary-light overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    className={`group w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left cursor-pointer transition-colors duration-300 ${
                      isOpen ? "bg-primary" : "hover:bg-primary"
                    }`}
                  >
                    <span
                      className={`flex-1 min-w-0 font-medium text-sm sm:text-[15px] leading-snug font-sans transition-colors duration-300 ${
                        isOpen
                          ? "text-primary-light"
                          : "text-foreground group-hover:text-primary-light"
                      }`}
                    >
                      {item.question}
                    </span>
                    <FaChevronDown
                      className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 text-primary-light"
                          : "text-foreground/50 group-hover:text-primary-light"
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-4 sm:pb-5 text-foreground/80 text-sm sm:text-[15px] leading-relaxed font-sans">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStagger>
      </div>
    </section>
  );
}
