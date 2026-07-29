import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Thank You | Stamford Publishers",
  description:
    "Thank you for contacting Stamford Publishers. Our team will review your submission and get back to you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <section className="w-full bg-background">
      <div className="max-w-[1140px] mx-auto w-full px-4 py-20 sm:py-28 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Submission Received
        </p>
        <h1 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
          Thank You!
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-[15px]">
          Your details have been sent to our team at Stamford Publishers. A publishing specialist
          will review your submission and contact you shortly to discuss your project.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="primary" text="Back to Home" />
          <Button href="tel:+15625732551" variant="outline" text="Call (562) 573-2551" />
        </div>
      </div>
    </section>
  );
}
