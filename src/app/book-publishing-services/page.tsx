"use client";

import {
  FaBookOpen,
  FaBullhorn,
  FaClipboardCheck,
  FaCommentDots,
  FaGlobe,
  FaHeadset,
  FaPalette,
  FaPenNib,
  FaPhone,
  FaSliders,
} from "react-icons/fa6";
import HeroSection from "@/components/HeroSection";
import LeftRightSection from "@/components/LeftRightSection";
import PublishingServicesSection from "@/components/PublishingServicesSection";
import PublishingProcessSection from "@/components/PublishingProcessSection";
import ConsultationCTASection from "@/components/ConsultationCTASection";
import FeatureCarousel from "@/components/FeatureCarousel";
import SelfPublishingSection from "@/components/SelfPublishingSection";
import FAQSection from "@/components/FAQSection";
import Button from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { fadeUp } from "@/lib/motion";

const publishingServiceCards = [
  {
    title: "Manuscript Evaluation",
    icon: FaClipboardCheck,
    description:
      "We carefully review your manuscript to assess its structure, clarity, flow, and overall publishing readiness. This process helps identify areas that may need revision, determine the suitable level of editing required, and provide general feedback on content organization. All feedback is shared as constructive guidance while preserving your original writing style and creative direction.",
  },
  {
    title: "Editing & Formatting",
    icon: FaPenNib,
    description:
      "We provide professional editing and formatting services to prepare your manuscript for publication. Our editing support may include developmental editing, line editing, copy editing, and proofreading. Once the manuscript is polished, we format your book for print editions, digital formats, and audiobook preparation if selected, ensuring a clean and publication-ready presentation.",
  },
  {
    title: "Cover Design",
    icon: FaPalette,
    description:
      "We create custom book cover designs tailored to your genre, story, and target audience. Our design process focuses on developing a professional cover that reflects your theme, supports your book’s positioning, and meets publishing layout standards. Revisions are handled based on your feedback to ensure the final design aligns with your vision.",
  },
  {
    title: "Publishing Setup",
    icon: FaBookOpen,
    description:
      "We manage the technical process of preparing your book for publication across selected platforms. This includes file preparation, metadata setup, title and description placement, category selection, ISBN configuration if applicable, and pricing setup. Once everything is completed and approved, your book is prepared for release and made available for purchase.",
  },
  {
    title: "Distribution",
    icon: FaGlobe,
    description:
      "We help make your book accessible through multiple publishing and distribution channels. Depending on the selected services, distribution may include online retail platforms, print-on-demand networks, and other available publishing channels. Publishing in multiple formats can help improve accessibility, expand reader reach, and support your long-term author presence.",
  },
  {
    title: "Marketing & Promotion",
    icon: FaBullhorn,
    description:
      "We provide optional marketing services designed to improve your book’s visibility and audience reach. These may include social media promotion, advertising campaigns, content creation, outreach, and author branding support. Marketing services are offered as separate paid options and are designed to support visibility, though specific sales or rankings cannot be guaranteed.",
  },
];

const publishingFaqItems = [
  {
    question: "What services are included in your book publishing package?",
    answer:
      "Our book publishing package includes manuscript evaluation, professional editing, cover design, interior formatting, ISBN registration, publishing setup, and global distribution support. We guide you through each stage so your book is prepared to meet industry standards and reach readers on major retail platforms.",
  },
  {
    question: "Do I retain all the rights to my book if I publish with you?",
    answer:
      "Yes. Stamford Publishers is an author-focused publishing services provider, and you retain ownership of your work. We help you publish and distribute your book while keeping your creative control and rights at the center of the process.",
  },
  {
    question: "How long does the publishing process take, from submission to publication?",
    answer:
      "Timelines vary based on manuscript length, editing needs, and design complexity. Most projects move from submission to publication within several weeks to a few months. During your consultation, we provide a clear timeline tailored to your book and publishing goals.",
  },
  {
    question: "Will my book be available on platforms like Amazon and Barnes & Noble?",
    answer:
      "Yes. We prepare and distribute your book for major retail platforms, including Amazon, Barnes & Noble, and Ingram, so readers can access your title in both print and digital formats worldwide.",
  },
  {
    question: "What kind of marketing support do you offer for new authors?",
    answer:
      "We offer marketing support designed to help new authors build visibility, including social media guidance, press release distribution, promotional planning, and strategies to connect your book with the right audience. Packages can be tailored based on your goals and launch timeline.",
  },
];

export default function BookPublishingServicesPage() {
  return (
    <div className="w-full min-h-screen bg-background">
      <HeroSection
        heading="Book Publishing Services for"
        highlightedHeading="Independent Authors"
        description="Stamford Publishers offers publishing services for independent authors, including editing, formatting, cover design, distribution, and marketing support. Our solutions are designed to help authors prepare and publish their books across 40+ global distribution platforms, with flexible service options tailored to your project requirements, timeline, and budget. As a publishing services provider, we do not operate as a traditional publishing house, allowing authors to maintain full ownership and complete control of their work throughout the entire process."
        btn1Text="Book A Free Consultation"
        btn2Text="Call Now"
        btn2Href="tel:+15625732551"
        imageSrc="/about-1.webp"
        imageAlt="Author reading in a library"
        imageVariant="full"
        showForm
        formTitle="Let's Get Started - Special Offer: Up to 50% Off"
        formSubmitText="Submit Now"
        className="bg-gradient-to-b from-background via-background to-primary/5"
      />

      <LeftRightSection
        layout="image-left"
        imageVariant="photo"
        equalColumns
        className="bg-primary-light/40"
        image={{
          src: "/hero-image-1.webp",
          alt: "Author writing at a desk",
        }}
        customContent={
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-heading leading-[1.18] tracking-tight">
              Comprehensive Book Publishing Service
            </h2>

            <p className="text-[#333333] text-sm sm:text-[15px] font-normal leading-relaxed max-w-xl font-sans">
            Stamford Publishers provides a wide range of publishing services to support authors in preparing and releasing their books. Our offerings include manuscript editing, layout formatting, cover design, distribution, and promotional support. Each service is available through a structured, paid model, allowing authors to choose options based on their project requirements, timeline, and budget. We facilitate distribution across multiple global platforms without exclusivity requirements. Our role is to manage the technical and production aspects of publishing, while authors retain full control over their content and all publishing decisions.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Button
                text="Book A Free Consultation"
                icon={FaCommentDots}
                href="#consultancy"
                variant="primary"
              />
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

      <section className="w-full py-12 lg:py-16">
        <div className="max-w-[1140px] mx-auto w-full px-4">
          <PublishingProcessSection />
        </div>
      </section>

      <PublishingServicesSection
        services={publishingServiceCards}
        uniformGrid
        showHeading={false}
      />

      <ConsultationCTASection
        heading="Book a Free Consultation with Book Publishing Experts"
        description="Have a manuscript ready or just have an idea? Speak with our publishing experts to get guidance on the next steps for your book. We're here to help you achieve your goal of becoming a published author."
        btn1Text="Book A Free Consultation"
        btn2Href="tel:+15625732551"
      />

      <section className="w-full" aria-labelledby="why-choose-heading">
        <div className="max-w-[1140px] mx-auto w-full py-12 lg:py-16 px-4">
          <ScrollReveal className="text-center max-w-4xl mx-auto mb-12 sm:mb-24" variants={fadeUp}>
            <h2
              id="why-choose-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-heading leading-[1.2] tracking-tight"
            >
              Why Choose{" "}
              <span className="text-primary font-extrabold">Stamford Publishers</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-foreground/80 text-sm sm:text-[15px] leading-relaxed font-sans">
            Stamford Publishers offers structured publishing services designed to support authors at every stage of their project. We provide a range of service options, including editing, production, distribution, and marketing, allowing authors to choose the support that best fits their specific needs. Our approach is built on clear communication, flexible solutions, and a straightforward publishing process. Authors maintain full ownership and complete control of their work, including how their book is developed, published, and promoted.
            </p>
          </ScrollReveal>

          <FeatureCarousel />
        </div>
      </section>

      <SelfPublishingSection
        formPosition="right"
        heading="Consistent Quality Across Every Project"
        description="Stamford Publishers provides a simple, flexible, and author-focused self-publishing experience tailored to your goals. From manuscript development to publishing, distribution, and marketing, we support you throughout the process while keeping your creative vision at the center of every step."
        formTitle="Let's Get Started -"
        formHighlight="Special Offer: Up to 50% Off"
        submitText="Submit Now"
      />

      <FAQSection defaultOpenIndex={0} items={publishingFaqItems} />
    </div>
  );
}
