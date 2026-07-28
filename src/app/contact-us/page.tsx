"use client";

import React, { useState } from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ScrollReveal";
import { fadeRight } from "@/lib/motion";

const contactFaqItems = [
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

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

export default function ContactUsPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Stamford Publishers",
    url: "https://stamfordpublishers.com/contact-us",
    description:
      "Contact Stamford Publishers for book publishing, marketing, and author support services.",
    mainEntity: {
      "@type": "Organization",
      name: "Stamford Publishers",
      telephone: "+1-562-573-2551",
      email: "info@stamfordpublishers.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1001 Wilshire Boulevard #1439",
        addressLocality: "Los Angeles",
        addressRegion: "CA",
        postalCode: "90017",
        addressCountry: "US",
      },
    },
  };

  return (
    <div className="w-full min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <HeroSection
        heading="Get in Touch with"
        highlightedHeading="Stamford Publishers"
        description="Stamford Publishers offers professional publishing and marketing services for independent authors. Whether you're publishing your first book or expanding your author portfolio, our team is here to answer your questions and guide you through every step of the publishing process."
        btn1Text="Get A Free Consultancy"
        btn1Href="#contact"
        btn2Text="Call Now"
        btn2Href="tel:+15625732551"
        imageSrc="/contact.webp"
        imageAlt="Stamford Publishers support specialist"
        imageVariant="full"
        imageBleedRight
        className="bg-gradient-to-b from-background via-background to-primary/5"
      />

      <section
        id="contact"
        className="w-full"
        aria-labelledby="contact-form-heading"
      >
        <div className="max-w-[1140px] mx-auto w-full px-4 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <ScrollStagger className="lg:col-span-6 space-y-4 sm:space-y-5">
              <ScrollStaggerItem>
                <h2
                  id="contact-form-heading"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-heading leading-[1.18] tracking-tight"
                >
                  Get in Touch with Us
                </h2>
              </ScrollStaggerItem>

              <ScrollStaggerItem>
                <p className="text-foreground text-sm sm:text-[15px] font-normal leading-relaxed font-sans">
                  Have questions about our publishing process? Stamford Publishers provides a
                  simple, flexible, and author-focused experience tailored to your goals. From
                  manuscript development to publishing, distribution, and marketing, we support you
                  throughout the process while keeping your creative vision at the center of every
                  step.
                </p>
              </ScrollStaggerItem>
            </ScrollStagger>

            <ScrollReveal className="lg:col-span-6" variants={fadeRight}>
              <form
                onSubmit={handleFormSubmit}
                className="hero-form-card bg-primary rounded-xl sm:rounded-2xl p-4 sm:p-6"
              >
                <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white text-center font-heading mb-5 sm:mb-6 md:mb-8 leading-tight">
                  Let&apos;s Get Started - Special Offer: Up to 30% Off
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white text-foreground placeholder:text-foreground/50 border-0 focus:outline-none focus:ring-2 focus:ring-white/50 font-sans"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white text-foreground placeholder:text-foreground/50 border-0 focus:outline-none focus:ring-2 focus:ring-white/50 font-sans"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white text-foreground placeholder:text-foreground/50 border-0 focus:outline-none focus:ring-2 focus:ring-white/50 font-sans sm:col-span-2"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="What's in your mind? write down."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-foreground/50 border-0 focus:outline-none focus:ring-2 focus:ring-white/50 font-sans resize-none mb-4"
                />

                <label className="flex items-start gap-3 mb-4 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, consent: e.target.checked }))
                    }
                    required
                    className="mt-1 w-4 h-4 rounded border-white accent-white shrink-0"
                  />
                  <span className="text-white/90 text-xs sm:text-sm leading-relaxed font-sans">
                    Please CHECK THE BOX to COMMUNICATE VIA SMS OR EMAIL (
                    <Link href="/privacy-policy" className="underline font-semibold">
                      PRIVACY POLICY
                    </Link>{" "}
                    &amp;{" "}
                    <Link href="/terms-and-conditions" className="underline font-semibold">
                      TERM &amp; CONDITIONS
                    </Link>
                    ) - Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to STOP to
                    unsubscribe anytime.
                  </span>
                </label>

                <div className="hero-form-submit-3d">
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-full bg-white text-primary font-semibold text-[15px] hover:bg-primary-light transition-colors duration-300 cursor-pointer"
                  >
                    Start Project
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FAQSection defaultOpenIndex={0} items={contactFaqItems} />
    </div>
  );
}
