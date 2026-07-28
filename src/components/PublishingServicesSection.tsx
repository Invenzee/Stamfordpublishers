"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ScrollStagger, ScrollStaggerItem } from "./ScrollReveal";
import { fadeUp, motionViewport } from "@/lib/motion";

export interface ServiceCard {
  title: string;
  description: string;
  icon?: React.ElementType;
}

export interface PublishingServicesSectionProps {
  heading?: string;
  highlightedHeading?: string;
  featuredServices?: ServiceCard[];
  services?: ServiceCard[];
  uniformGrid?: boolean;
  showHeading?: boolean;
  className?: string;
}

const defaultFeaturedServices: ServiceCard[] = [
  {
    title: "Book Publishing",
    description:
      "Turn your manuscript into a professionally prepared book, ready for printing, publishing, and distribution, with expert guidance from Stamford Publishers.",
  },
  {
    title: "Audiobook Production",
    description:
      "Bring your story to life in audio format with Stamford Publishers, helping you reach more listeners through professional audiobook production support.",
  },
];

const defaultServices: ServiceCard[] = [
  {
    title: "Book Marketing",
    description:
      "Promote your book with customized marketing strategies from Stamford Publishers, designed to increase visibility and connect your work with the right readers.",
  },
  {
    title: "Book Editing",
    description:
      "Strengthen your manuscript with professional editing services from Stamford Publishers, improving clarity, structure, flow, and overall quality.",
  },
  {
    title: "Ghost Writing",
    description:
      "Work with Stamford Publishers to turn your ideas into a complete manuscript while preserving your unique voice, message, and vision.",
  },
];

function ServiceCardItem({
  service,
  large = false,
}: {
  service: ServiceCard;
  large?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const Icon = service.icon;
  const cardShape =
    "rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-none rounded-bl-none";

  return (
    <article
      className={`group border-primary border-2 relative overflow-hidden py-4 px-6 border border-white/25 h-full
        bg-gradient-to-br from-[#2d0812] to-[#7a3540]
        transition-all duration-500 ease-out
        hover:scale-[1.03]
        hover:from-[#3a0c18] hover:to-[#8f4249] cursor-default
        ${cardShape}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 opacity-0 transition-opacity duration-500 group-hover:from-white/5 group-hover:via-white/10 group-hover:to-white/5 group-hover:opacity-100 ${cardShape}`}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {Icon && (
          <motion.div
            className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-primary"
            animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          >
            <Icon className="h-5 w-5" />
          </motion.div>
        )}

        <h3
          className={`font-bold text-white font-heading leading-tight mb-2 ${
            large
              ? "text-xl sm:text-2xl lg:text-[28px]"
              : "text-lg sm:text-xl lg:text-2xl"
          }`}
        >
          {service.title}
        </h3>
        <p className="text-white text-sm sm:text-[15px] leading-relaxed font-sans">
          {service.description}
        </p>
      </div>
    </article>
  );
}

export default function PublishingServicesSection({
  heading = "Comprehensive Publishing Services Designed for",
  highlightedHeading = "Every Author",
  featuredServices = defaultFeaturedServices,
  services = defaultServices,
  uniformGrid = false,
  showHeading = true,
  className = "",
}: PublishingServicesSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={`relative overflow-hidden p-4 md:p-8 lg:py-16 lg:px-4 ${className}`}
      aria-labelledby={showHeading ? "publishing-services-heading" : undefined}
    >
      <div className="max-w-[1140px] mx-auto w-full">
        {showHeading && (
          <motion.h2
            id="publishing-services-heading"
            className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] font-heading leading-[1.2] tracking-tight max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14"
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={motionViewport}
            variants={fadeUp}
          >
            {heading}{" "}
            <span className="text-primary font-extrabold">{highlightedHeading}</span>
          </motion.h2>
        )}

        {uniformGrid ? (
          <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {services.map((service) => (
              <ScrollStaggerItem key={service.title} className="h-full">
                <ServiceCardItem service={service} />
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        ) : (
          <div className="space-y-5 sm:space-y-6">
            <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
              {featuredServices.map((service) => (
                <ScrollStaggerItem key={service.title} className="h-full">
                  <ServiceCardItem service={service} large />
                </ScrollStaggerItem>
              ))}
            </ScrollStagger>

            <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
              {services.map((service) => (
                <ScrollStaggerItem key={service.title} className="h-full">
                  <ServiceCardItem service={service} />
                </ScrollStaggerItem>
              ))}
            </ScrollStagger>
          </div>
        )}
      </div>
    </section>
  );
}
