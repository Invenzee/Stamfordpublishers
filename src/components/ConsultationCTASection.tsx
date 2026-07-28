"use client";

import Image from "next/image";
import { FaCommentDots, FaPhone } from "react-icons/fa6";
import Button from "./Button";
import { ScrollReveal } from "./ScrollReveal";
import { fadeLeft, fadeUp } from "@/lib/motion";

export interface ConsultationCTASectionProps {
  heading?: string;
  description?: string;
  btn1Text?: string;
  btn1Href?: string;
  btn2Text?: string;
  btn2Href?: string;
  backgroundImageSrc?: string;
  className?: string;
}

export default function ConsultationCTASection({
  heading = "Book a Free Consultation with Book Publishing Experts",
  description = "Have questions about publishing your book? Want to see how our services can support your goals? Schedule a free consultation with one of Stamford Publishers' publishing specialists. We'll provide clear guidance, answer your questions, and help you take the next step in your publishing journey with confidence.",
  btn1Text = "Get A Free Consultancy",
  btn1Href = "#consultancy",
  btn2Text = "Call Now",
  btn2Href = "tel:+18001234567",
  backgroundImageSrc = "/consultation-image.jpg",
  className = "",
}: ConsultationCTASectionProps) {
  return (
    <section
      className={`w-full ${className}`}
      aria-labelledby="consultation-cta-heading"
    >
      <div className="max-w-[1140px] mx-auto w-full px-4">
        <ScrollReveal variants={fadeUp}>
          <div className="relative overflow-hidden rounded-[24px] min-h-[320px] sm:min-h-[420px] lg:min-h-[460px] bg-primary">
            <div className="absolute inset-0" aria-hidden="true">
              <Image
                src={backgroundImageSrc}
                alt=""
                fill
                sizes="1140px"
                className="object-cover object-[75%_center] scale-105 blur-[2px]"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary from-0% via-primary/92 via-[60%] to-primary/20 to-100%" />
            </div>

            <ScrollReveal
              className="relative z-10 flex flex-col justify-center p-4 sm:px-12 sm:py-14 md:px-16 md:py-16 lg:px-12 lg:py-12 max-w-full lg:max-w-[50%]"
              variants={fadeLeft}
              delay={0.15}
            >
              <h2
                id="consultation-cta-heading"
                className="text-primary-light font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight"
              >
                {heading}
              </h2>

              <p className="mt-5 sm:mt-6 text-primary-light text-sm sm:text-[15px] md:text-base leading-relaxed font-sans">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
                <Button
                  text={btn1Text}
                  icon={FaCommentDots}
                  href={btn1Href}
                  variant="outline"
                  className="!bg-primary-light !text-primary hover:!bg-primary-light hover:!text-primary-hover !border-0 !shadow-md"
                />
                <Button
                  text={btn2Text}
                  icon={FaPhone}
                  href={btn2Href}
                  variant="secondary"
                />
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
