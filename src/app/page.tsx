import HeroSection from "@/components/HeroSection";
import FeatureCarousel from "@/components/FeatureCarousel";
import LeftRightSection from "@/components/LeftRightSection";
import PublishingServicesSection from "@/components/PublishingServicesSection";
import ConsultationCTASection from "@/components/ConsultationCTASection";
import SelfPublishingSection from "@/components/SelfPublishingSection";
import FAQSection from "@/components/FAQSection";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ScrollReveal";
import { fadeLeft } from "@/lib/motion";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background">
      <HeroSection
        heading="Begin Your Publishing Journey with"
        highlightedHeading="Stamford Publishers"
        description="Whether you're publishing your first book or adding to an established portfolio, Stamford Publishers delivers comprehensive publishing solutions designed around your unique goals, guiding you through every stage of the publishing process with expert support and personalized service."
        btn1Text="Get A Free Consultancy"
        btn2Text="Call Now"
        imageSrc="/homepage-hero.png"
        imageAlt="Indigenous Spirituality Book Cover"
        showForm
      />
      <FeatureCarousel />
      <LeftRightSection
        layout="image-left"
        image={{
          src: "/01.png",
          alt: "The Jade Whisper Book Cover",
        }}
        content={{
          heading: "Expand Your Reach",
          highlightedHeading: "with Stamford Publishers",
          description:
            "From strategy development to campaign execution, Stamford Publishers helps authors build meaningful connections with their target audience through customized marketing solutions. Our services include social media marketing, email outreach, professional book review campaigns, and influencer partnerships designed to increase visibility and reader engagement.",
        }}
      />
      <LeftRightSection
        layout="image-right"
        image={{
          src: "/0.png",
          alt: "The Jade Whisper Book Cover",
        }}
        content={{
          heading: "Expert Writing Guidance Aligned with",
          highlightedHeading: "Your Goals",
          description:
            "At Stamford Publishers, we offer personalized writing support designed around your ideas, timeline, and publishing goals. From developing your initial concept to refining the final manuscript, our team helps shape your book with clarity, structure, and attention to every important detail.",
        }}
      />
      <PublishingServicesSection />
      <ConsultationCTASection />

      <section
        className="w-full"
        aria-labelledby="why-authors-trust-heading"
      >
        <div className="max-w-[1140px] mx-auto w-full px-4 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal variants={fadeLeft}>
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src="/hero-image-1.jpg"
                  alt="Author working on manuscript"
                  className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:min-h-[500px]"
                />
              </div>
            </ScrollReveal>

            <ScrollStagger className="space-y-4 sm:space-y-5">
              <ScrollStaggerItem>
                <h2
                  id="why-authors-trust-heading"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-heading leading-[1.18] tracking-tight"
                >
                  Why Authors Trust{" "}
                  <span className="text-primary font-extrabold">Stamford Publishers</span>
                </h2>
              </ScrollStaggerItem>

              <ScrollStaggerItem>
                <p className="text-foreground text-sm sm:text-[15px] font-normal leading-relaxed font-sans">
                  Stamford Publishers offers a complete, author-focused publishing experience,
                  supporting writers through manuscript development, editing, publishing, and
                  promotion with expert guidance, flexible solutions, and dedicated support to help
                  turn your vision into a professionally published book, while our collaborative
                  process keeps your unique voice at the center of every project and tailors each
                  service to your goals, preferred publishing format, timeline, and budget.
                </p>
              </ScrollStaggerItem>
            </ScrollStagger>
          </div>
        </div>
      </section>

      <SelfPublishingSection />
      <FAQSection />
    </div>
  );
}
