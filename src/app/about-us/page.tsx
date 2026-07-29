"use client";

import { FaCommentDots, FaPhone } from "react-icons/fa6";
import HeroSection from "@/components/HeroSection";
import LeftRightSection from "@/components/LeftRightSection";
import SelfPublishingSection from "@/components/SelfPublishingSection";
import FAQSection from "@/components/FAQSection";
import Button from "@/components/Button";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ScrollReveal";
import { fadeLeft, fadeRight } from "@/lib/motion";

const aboutFaqItems = [
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

const dualCtaButtons = [
  {
    text: "Get A Free Consultation",
    icon: FaCommentDots,
    href: "#consultancy",
    variant: "primary" as const,
  },
  {
    text: "Call Now",
    icon: FaPhone,
    href: "tel:+15625732551",
    variant: "secondary" as const,
  },
];

const valuesList = [
  {
    title: "Transparency",
    description:
      "We provide clear information about our services, pricing, and process so authors can make informed decisions.",
  },
  {
    title: "Quality-Focused Work",
    description:
      "We maintain professional standards across editing, formatting, production, publishing setup, and marketing.",
  },
  {
    title: "Collaboration",
    description:
      "We work closely with authors to understand their goals, creative direction, and project requirements.",
  },
  {
    title: "Practical Approach",
    description:
      "We offer structured and realistic solutions designed to support authors throughout the publishing journey.",
  },
  {
    title: "Adaptability",
    description:
      "We continue improving our process to stay aligned with modern publishing, audiobook, distribution, and marketing trends.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="w-full min-h-screen bg-background">
      <HeroSection
        heading="About"
        highlightedHeading="Stamford Publishers"
        description="Stamford Publishers, established in 2014, is a publishing services provider offering paid solutions for authors looking to publish, produce, and promote their books in print, eBook, and audiobook formats. Our services cover editing, formatting, cover design, audiobook production, and marketing support, designed to assist authors at every stage of the publishing journey. We work with both emerging and experienced writers, offering flexible, project-based solutions tailored to individual needs. Authors maintain full ownership and complete creative control of their work. Stamford Publishers is not a traditional publishing house or literary agency."
        btn1Text="Get A Free Consultation"
        btn2Text="Call Now"
        imageSrc="/about-banner.webp"
        imageAlt="Stamford Publishers book covers"
        imageVariant="full"
        showForm
        className="bg-gradient-to-b from-background via-background to-primary/5"
      />

      <LeftRightSection
        layout="image-right"
        imageVariant="photo"
        equalColumns
        image={{
          src: "/about-1.webp",
          alt: "Author in a library setting",
        }}
        content={{
          heading: "How",
          highlightedHeading: "Stamford Publishers Was Established",
          description: (
            <>
              Stamford Publishers was established in 2014 to provide structured publishing and marketing services for independent authors. The company was created to address the growing demand for accessible, service-based publishing support outside of traditional publishing models. Since then, we have worked with authors across different genres, offering services such as editing, formatting, audiobook production, cover design, distribution support, and marketing. Today, Stamford Publishers operates as a publishing services provider, supporting authors at various stages of the publishing process with clear, service-based solutions.
            </>
          ),
          buttons: dualCtaButtons,
        }}
      />

      <LeftRightSection
        layout="image-left"
        imageVariant="photo"
        equalColumns
        image={{
          src: "/about-2.webp",
          alt: "Author writing in a cafe",
        }}
        customContent={
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-heading leading-[1.18] tracking-tight">
              <span className="text-primary font-extrabold">Our</span> Story
            </h2>

            <p className="text-[#333333] text-sm sm:text-[15px] font-normal leading-relaxed max-w-xl font-sans">
            Stamford Publishers is a publishing services provider established in 2014, offering structured, paid services to help independent authors publish and promote their work. Our services include editing, formatting, cover design, audiobook production, publishing setup, distribution support, and book marketing, designed to support authors at different stages of the publishing journey. We have worked with authors across multiple genres and project types, delivering flexible solutions tailored to individual publishing goals. Our focus is to provide clear, professional support while ensuring authors retain full ownership and complete control of their work.
            </p>

            <div className="pt-1 sm:pt-2">
              <Button
                text="Call Now"
                icon={FaPhone}
                href="tel:+15625732551"
                variant="secondary"
              />
            </div>
          </div>
        }
      />

      <section className="w-full" aria-labelledby="mission-vision-heading">
        <div className="max-w-[1140px] mx-auto w-full py-12 lg:py-20 px-4 md:px-8 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <ScrollStagger className="lg:col-span-6 space-y-8 sm:space-y-10">
              <ScrollStaggerItem>
                <div className="space-y-4">
                  <h2
                    id="mission-vision-heading"
                    className="text-2xl sm:text-3xl md:text-5xl  font-bold text-foreground font-heading leading-[1.18] tracking-tight"
                  >
                    <span className="text-primary font-extrabold">Our</span> Mission
                  </h2>
                  <p className="text-[#333333] text-sm sm:text-[15px] font-normal leading-relaxed max-w-xl font-sans">
                  To provide authors with clear, reliable, and professional publishing and marketing services tailored to their unique project requirements.
                  </p>
                </div>
              </ScrollStaggerItem>

              <ScrollStaggerItem>
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground font-heading leading-[1.18] tracking-tight">
                    <span className="text-primary font-extrabold">Our</span> Vision
                  </h2>
                  <p className="text-[#333333] text-sm sm:text-[15px] font-normal leading-relaxed max-w-xl font-sans">
                  To become a trusted publishing services provider, delivering structured and accessible solutions for authors looking to publish, produce, and promote their work.
                  </p>
                </div>
              </ScrollStaggerItem>
            </ScrollStagger>

            <ScrollReveal className="lg:col-span-6" variants={fadeRight}>
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src="/about-3.webp"
                  alt="Team collaborating on book publishing"
                  className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:min-h-[500px]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="w-full" aria-labelledby="our-values-heading">
        <div className="max-w-[1140px] mx-auto w-full py-12 lg:py-20 px-4 md:px-8 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <ScrollReveal
              className="lg:col-span-6 order-2 lg:order-1"
              variants={fadeLeft}
            >
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src="/about-4.webp"
                  alt="Reader enjoying a book in a library"
                  className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:min-h-[500px]"
                />
              </div>
            </ScrollReveal>

            <ScrollStagger className="lg:col-span-6 space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-2">
              <ScrollStaggerItem>
                <h2
                  id="our-values-heading"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-heading leading-[1.18] tracking-tight"
                >
                  <span className="text-primary font-extrabold">Our</span> Values
                </h2>
              </ScrollStaggerItem>

              <ScrollStaggerItem>
                <ul className="space-y-3 sm:space-y-4 text-[#333333] text-sm sm:text-[15px] font-normal leading-relaxed font-sans max-w-xl">
                  {valuesList.map((value) => (
                    <li key={value.title} className="flex gap-2">
                      <span className="text-primary font-bold shrink-0">•</span>
                      <span>
                        <strong className="font-semibold text-foreground">{value.title}</strong>
                        {" — "}
                        {value.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </ScrollStaggerItem>

              <ScrollStaggerItem>
                <div className="pt-1 sm:pt-2">
                  <Button
                    text="Call Now"
                    icon={FaPhone}
                    href="tel:+15625732551"
                    variant="secondary"
                  />
                </div>
              </ScrollStaggerItem>
            </ScrollStagger>
          </div>
        </div>
      </section>

      <SelfPublishingSection />
      <FAQSection defaultOpenIndex={0} items={aboutFaqItems} />
    </div>
  );
}
