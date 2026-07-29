"use client";

import { FaCommentDots, FaPhone } from "react-icons/fa6";
import HeroSection from "@/components/HeroSection";
import LeftRightSection from "@/components/LeftRightSection";
import SelfPublishingSection from "@/components/SelfPublishingSection";
import FAQSection from "@/components/FAQSection";

const dualCtaButtons = [
  {
    text: "Get Free Consultancy",
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

const callNowButton = [
  {
    text: "Call Now",
    icon: FaPhone,
    href: "tel:+15625732551",
    variant: "secondary" as const,
  },
];

const audiobookFaqItems = [
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

export default function AudiobookServicesPage() {
  return (
    <div className="w-full min-h-screen bg-background">
      <HeroSection
        heading="Professional Audiobook Creation Services for"
        highlightedHeading="Authors"
        description="Stories deserve to be heard, not just read. Stamford Publishers provides professional audiobook production services that bring your words to life through engaging narration, clear sound quality, and a voice that fits your story. Whether your book is fiction, nonfiction, poetry, or memoir, we help transform your manuscript into an immersive listening experience designed to connect with audiences across multiple platforms."
        btn1Text="Get Free Consultancy"
        btn2Text="Call Now"
        btn2Href="tel:+15625732551"
        imageSrc="/audiobook-1.webp"
        imageAlt="Author listening to an audiobook with headphones"
        imageVariant="full"
        showForm
        formTitle="Let's Get Started - Special Offer: Up to 30% Off"
        formSubmitText="Submit Request"
        className="bg-gradient-to-b from-background via-background to-primary/5"
      />

      <LeftRightSection
        layout="image-right"
        imageVariant="photo"
        equalColumns
        image={{
          src: "/audiobook-2.webp",
          alt: "Headphones on an open book",
        }}
        content={{
          heading: "Voice & Narration Choices",
          description:
            "Every audiobook project requires the right narration style, and Stamford Publishers provides flexible options to help you choose a voice that matches your content, genre, and audience. You can select from narration formats such as single narrator or dual narration, voice styles and accents including American, British, Canadian, and other regional options, and delivery tones such as neutral, conversational, formal, or expressive. Each selection is guided by your preferences and the overall style of your manuscript.",
          buttons: dualCtaButtons,
        }}
      />

      <LeftRightSection
        layout="image-left"
        imageVariant="photo"
        equalColumns
        image={{
          src: "/audiobook-3.webp",
          alt: "Headphones with a book",
        }}
        content={{
          heading: "Audiobook Production Process",
          description:
            "Stamford Publishers’ audiobook production process covers narration, recording, editing, and final file preparation based on your project requirements. This may include professional audio recording and editing, review of pacing and pronunciation accuracy, balanced and consistent audio levels, and formatting aligned with platform specifications. The final output is prepared according to standard audiobook production guidelines to ensure a clean, polished, and listener-ready experience.",
          buttons: callNowButton,
        }}
      />

      <LeftRightSection
        layout="image-right"
        imageVariant="photo"
        equalColumns
        image={{
          src: "/audiobook-4.webp",
          alt: "Woman listening with headphones in a library",
        }}
        content={{
          heading: "Additional Format for Your Book",
          description:
            "Audiobooks offer an additional way for readers to experience your written content. Stamford Publishers helps convert your book into audio format, making it accessible to listeners who prefer audio-based content while commuting, multitasking, or enjoying stories on the go. This option can be included as part of your overall publishing plan based on your project requirements, audience, and distribution goals.",
          buttons: callNowButton,
        }}
      />

      <LeftRightSection
        layout="image-left"
        imageVariant="photo"
        equalColumns
        className="bg-primary-light/30"
        image={{
          src: "/audiobook-5.webp",
          alt: "Headphones above an open book",
        }}
        content={{
          heading: "Audiobook Production Workflows",
          description:
            "Stamford Publishers’ audiobook production services include a clear workflow designed around your selected options and project requirements. The process may include choosing a voice from available narration options, professional audio recording and editing, final quality review, file preparation, and delivery of audio files in the required formats. Each step is handled with attention to sound quality, consistency, and platform-ready presentation.",
          buttons: callNowButton,
        }}
      />

      <SelfPublishingSection
        formPosition="left"
        heading="Ready to Be Heard?"
        description="Transform your book into a professional audiobook experience that connects with listeners worldwide. Stamford Publishers provides the production support, technical guidance, and workflow structure you need to bring your story to life in audio — while keeping your creative vision at the center of every step."
        formTitle="Let's Get Started -"
        formHighlight="Special Offer: Up to 30% Off"
        submitText="Submit Request"
      />

      <FAQSection defaultOpenIndex={0} items={audiobookFaqItems} />
    </div>
  );
}
