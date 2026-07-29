"use client";

import {
  FaBriefcase,
  FaBullhorn,
  FaChartLine,
  FaCommentDots,
  FaHandshake,
  FaHeadset,
  FaPhone,
  FaRocket,
  FaSliders,
} from "react-icons/fa6";
import HeroSection from "@/components/HeroSection";
import LeftRightSection from "@/components/LeftRightSection";
import PublishingServicesSection from "@/components/PublishingServicesSection";
import PublishingProcessSection, {
  type ProcessStep,
} from "@/components/PublishingProcessSection";
import ConsultationCTASection from "@/components/ConsultationCTASection";
import FeatureCarousel from "@/components/FeatureCarousel";
import SelfPublishingSection from "@/components/SelfPublishingSection";
import FAQSection from "@/components/FAQSection";
import Button from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { fadeUp } from "@/lib/motion";

const marketingFeaturedCards = [
  {
    title: "Industry-Relevant Experience",
    icon: FaBriefcase,
    description:
      "Stamford Publishers has worked with authors across a wide range of genres, providing marketing support tailored to individual project goals and requirements.",
  },
  {
    title: "Structured Marketing Strategy",
    icon: FaChartLine,
    description:
      "Our services include multiple marketing options, such as digital promotion, advertising support, social media campaigns, and content-based outreach.",
  },
];

const marketingServiceCards = [
  {
    title: "Modern Marketing Practices",
    icon: FaRocket,
    description:
      "We use current tools, platforms, and audience insights to create up-to-date promotional campaigns designed to support your book’s visibility.",
  },
  {
    title: "Flexible Service Options",
    icon: FaSliders,
    description:
      "Marketing plans can be adjusted based on your book’s genre, target audience, timeline, and budget, allowing you to choose the support that fits your project.",
  },
  {
    title: "Optional Service Model",
    icon: FaHandshake,
    description:
      "Our marketing services are available as paid, optional solutions, giving authors the flexibility to select the level of promotional support they need.",
  },
];

const marketingProcessSteps: ProcessStep[] = [
  {
    number: "01",
    title: (
      <>
        Initial
        <br />
        Consultation
      </>
    ),
  },
  {
    number: "02",
    title: (
      <>
        Strategy
        <br />
        Planning
      </>
    ),
  },
  {
    number: "03",
    title: (
      <>
        Content
        <br />
        Preparation
      </>
    ),
  },
  {
    number: "04",
    title: (
      <>
        Campaign
        <br />& Setup
      </>
    ),
  },
  {
    number: "05",
    title: (
      <>
        Monitoring
        <br />& Optimization
      </>
    ),
  },
  {
    number: "06",
    title: (
      <>
        Ongoing Service
        <br />
        Delivery
      </>
    ),
  },
];

const marketingFaqItems = [
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

export default function BookMarketingServicesPage() {
  return (
    <div className="w-full min-h-screen bg-background">
      <HeroSection
        heading="Strategic"
        highlightedHeading="Book Promotion Services"
        description="Stamford Publishers offers book marketing services designed to help authors promote their work and connect with relevant audiences. Our services include digital promotion, advertising support, and content-driven outreach, with each strategy tailored to your book’s genre, target audience, and project requirements. We provide structured marketing support as a professional service and do not guarantee sales, rankings, or specific outcomes."
        btn1Text="Get A Free Consultation"
        btn2Text="Call Now"
        btn2Href="tel:+15625732551"
        imageSrc="/book-marketing.webp"
        imageAlt="Books and marketing materials on a desk"
        imageVariant="full"
        showForm
        formTitle="Let's Get Started - Special Offer: Up to 30% Off"
        formSubmitText="Start Project"
        className="bg-gradient-to-b from-background via-background to-primary/5"
      />

      <PublishingServicesSection
        heading="Book"
        highlightedHeading="Marketing Services"
        featuredServices={marketingFeaturedCards}
        services={marketingServiceCards}
      />

      <section className="w-full py-12 lg:py-16" aria-labelledby="marketing-process-heading">
        <div className="max-w-[1140px] mx-auto w-full px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-8 sm:mb-12" variants={fadeUp}>
            <h2
              id="marketing-process-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-heading leading-[1.2] tracking-tight"
            >
              Book{" "}
              <span className="text-primary font-extrabold">Marketing</span> Process
            </h2>
            <p className="mt-4 sm:mt-5 text-foreground/80 text-sm sm:text-[15px] leading-relaxed font-sans">
              Our book marketing workflow is designed to keep every campaign organized, transparent,
              and aligned with your promotional goals — from the first consultation through ongoing
              service delivery.
            </p>
          </ScrollReveal>

          <PublishingProcessSection steps={marketingProcessSteps} />
        </div>
      </section>

      <SelfPublishingSection
        formPosition="right"
        heading="Consistent Quality Across Every Project"
        description="Stamford Publishers provides a simple, flexible, and author-focused self-publishing experience tailored to your goals. From manuscript development to publishing, distribution, and marketing, we support you throughout the process while keeping your creative vision at the center of every step."
        formTitle="Let's Get Started -"
        formHighlight="Special Offer: Up to 30% Off"
        submitText="Start Project"
      />

      <FAQSection defaultOpenIndex={0} items={marketingFaqItems} />
    </div>
  );
}
