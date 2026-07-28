import LeftRightSection from "@/components/LeftRightSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#FAFAF9]">
      <LeftRightSection
        heading="Begin Your Publishing Journey with"
        highlightedHeading="Stamford Publishers"
        description="Whether you’re publishing your first book or adding to an established portfolio, Stamford Publishers delivers comprehensive publishing solutions designed around your unique goals, guiding you through every stage of the publishing process with expert support and personalized service."
        btn1Text="Get A Free Consultancy"
        btn2Text="Call Now"
        imageSrc="homepage-hero.png"
        imageAlt="Indigenous Spirituality Book Cover"
      />
    </main>
  );
}
