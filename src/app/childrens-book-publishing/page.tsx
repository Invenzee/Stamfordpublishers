"use client";

import { FaCommentDots, FaPhone } from "react-icons/fa6";
import HeroSection from "@/components/HeroSection";
import LeftRightSection from "@/components/LeftRightSection";
import PublishingProcessSection, {
  type ProcessStep,
} from "@/components/PublishingProcessSection";
import ConsultationCTASection from "@/components/ConsultationCTASection";
import SelfPublishingSection from "@/components/SelfPublishingSection";
import FAQSection from "@/components/FAQSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { fadeUp } from "@/lib/motion";

const dualCtaButtons = [
  {
    text: "Get A Free Consultancy",
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

const childrensProcessSteps: ProcessStep[] = [
  {
    number: "01",
    title: (
      <>
        Manuscript Review
        <br />& Assessment
      </>
    ),
  },
  {
    number: "02",
    title: (
      <>
        Editing &
        <br />
        Proofreading
      </>
    ),
  },
  {
    number: "03",
    title: "Book Cover Design",
  },
  {
    number: "04",
    title: (
      <>
        Publishing &
        <br />
        Release
      </>
    ),
  },
  {
    number: "05",
    title: "Global Distribution",
  },
  {
    number: "06",
    title: (
      <>
        Marketing &
        <br />
        Promotional
        <br />
        Support
      </>
    ),
  },
];

const childrensFaqItems = [
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

export default function ChildrensBookPublishingPage() {
  return (
    <div className="w-full min-h-screen bg-background">
      <HeroSection
        heading="Children's Book Publishing Services for"
        highlightedHeading="Authors"
        description="At Stamford Publishers, we help authors turn imaginative ideas into professionally developed children’s books that are engaging, age-appropriate, and visually appealing. From story development and editing to illustration guidance, formatting, publishing, and distribution support, our team works with you to shape a book that connects with young readers while preserving your creative vision."
        btn1Text="Start Your Journey"
        btn2Text="Call Now"
        btn2Href="tel:+15625732551"
        imageSrc="/0.png"
        imageAlt="Children's book cover sample"
        imageVariant="full"
        showForm
        formTitle="Let's Get Started - Special Offer: Up to 30% Off"
        formSubmitText="Book Today"
        className="bg-gradient-to-b from-background via-background to-primary/5"
      />

      <LeftRightSection
        layout="image-right"
        imageVariant="photo"
        equalColumns
        image={{
          src: "/children-book-1.jpg",
          alt: "Children reading and playing with books",
        }}
        content={{
          heading: "Engaging Children's Books",
          description:
            "At Stamford Publishers, we help authors transform creative concepts into professionally developed children’s books that inspire, entertain, and connect with young readers. Our services support every stage of the process, from story development and age-appropriate writing to illustration guidance, editing, formatting, publishing, marketing, and distribution support. Whether you are creating a coloring book, fairy tale, comic, picture book, or educational story, our team works closely with you to shape engaging content while keeping your creative vision at the heart of the final product.",
          buttons: dualCtaButtons,
        }}
      />

      <LeftRightSection
        layout="image-left"
        imageVariant="photo"
        equalColumns
        className="bg-[#f0f7f2]"
        image={{
          src: "/children-book-2.jpg",
          alt: "Children reading books outdoors",
        }}
        content={{
          heading: "Inspiring Young Readers",
          description:
            "Creating a children’s book requires imagination, clarity, and a strong understanding of young audiences. Stamford Publishers provides professional support to help authors turn their ideas into stories that are easy to follow, visually appealing, and meaningful for children. Our team can assist with writing, editing, illustration planning, layout, and publishing preparation, helping ensure your book is crafted with care and presented in a way that captures attention.",
          buttons: callNowButton,
        }}
      />

      <section className="w-full py-12 lg:py-16" aria-labelledby="childrens-process-heading">
        <div className="max-w-[1140px] mx-auto w-full px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-8 sm:mb-12" variants={fadeUp}>
            <h2
              id="childrens-process-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-heading leading-[1.2] tracking-tight"
            >
              Our End-to-End Publishing Process
            </h2>
            <p className="mt-4 sm:mt-5 text-foreground/80 text-sm sm:text-[15px] leading-relaxed font-sans">
            We provide a complete, start-to-finish publishing experience for children’s book authors, helping your story move from initial idea to a professionally prepared book. From content development and design support to publishing setup, distribution, and promotional guidance, Stamford Publishers helps make the process smoother, clearer, and more author-focused.
            </p>
          </ScrollReveal>

          <PublishingProcessSection steps={childrensProcessSteps} />
        </div>
      </section>

      <ConsultationCTASection
        heading="Bring Timeless Children's Stories to Life with Stamford Publishers"
        description="Are you an aspiring children’s book author? At Stamford Publishers, we provide services designed to support authors at every stage of the children’s book publishing process. Our team helps develop story concepts, characters, and plots tailored to different age groups, ensuring your book is engaging, age-appropriate, and aligned with your creative vision."
        btn1Text="Start Your Journey"
        btn1Href="#consultancy"
        btn2Href="tel:+15625732551"
        backgroundImageSrc="/children-book-3.jpg"
        className="mb-12 sm:mb-24"
      />

      <SelfPublishingSection
        formPosition="left"
        heading="Ready to Inspire Young Readers?"
        description="Turn your children’s story into a beautifully developed book that captures imagination, encourages learning, and connects with young readers. Contact Stamford Publishers today and take the next step toward bringing your creative story to life."
        formTitle="Let's Get Started -"
        formHighlight="Special Offer: Up to 30% Off"
        submitText="Get Started"
      />

      <FAQSection defaultOpenIndex={0} items={childrensFaqItems} />
    </div>
  );
}
