"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FaCommentDots, FaPhone } from "react-icons/fa6";
import Button from "./Button";
import BlobShape from "./BlobShape";
import { ScrollReveal } from "./ScrollReveal";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  motionTransition,
  motionViewport,
} from "@/lib/motion";

export interface HeroSectionProps {
  heading?: string;
  highlightedHeading?: string;
  description?: string;
  btn1Text?: string;
  btn1Icon?: React.ElementType | React.ReactNode;
  btn1Href?: string;
  btn1OnClick?: () => void;
  btn2Text?: string;
  btn2Icon?: React.ElementType | React.ReactNode;
  btn2Href?: string;
  btn2OnClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  blobColor?: string;
  imageVariant?: "book" | "full";
  imageBleedRight?: boolean;
  imagePosition?: "left" | "right";
  showForm?: boolean;
  formTitle?: string;
  formSubmitText?: string;
  onFormSubmit?: (data: HeroFormData) => void;
  className?: string;
}

export interface HeroFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

export default function HeroSection({
  heading = "Begin Your Publishing Journey with",
  highlightedHeading = "Stamford Publishers",
  description = "Whether you're publishing your first book or adding to an established portfolio, Stamford Publishers delivers comprehensive publishing solutions designed around your unique goals, guiding you through every stage of the publishing process with expert support and personalized service.",
  btn1Text = "Get A Free Consultancy",
  btn1Icon: Btn1Icon = FaCommentDots,
  btn1Href = "#consultancy",
  btn1OnClick,
  btn2Text = "Call Now",
  btn2Icon: Btn2Icon = FaPhone,
  btn2Href = "tel:+18001234567",
  btn2OnClick,
  imageSrc = "/homepage-hero.png",
  imageAlt = "Published Book Cover",
  blobColor = "#59101B",
  imageVariant = "book",
  imageBleedRight = false,
  imagePosition = "right",
  showForm = false,
  formTitle = "Let's Get Started - Special Offer: Up to 30% Off",
  formSubmitText = "Start Project",
  onFormSubmit,
  className = "",
}: HeroSectionProps) {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState<HeroFormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit?.(formData);
  };

  const textColSpan = imageVariant === "full" ? "lg:col-span-6" : "lg:col-span-7";
  const imageColSpan = imageVariant === "full" ? "lg:col-span-6" : "lg:col-span-5";
  const isFullBleedRight = imageVariant === "full" && imageBleedRight;
  const resolvedImageSrc = imageSrc.startsWith("/") ? imageSrc : `/${imageSrc}`;
  const fullGridImage = (
    <div className="w-full h-[280px] sm:h-[360px] lg:h-[420px] overflow-hidden rounded-2xl">
      <img
        src={resolvedImageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
    </div>
  );

  const fullImage = (
    <img
      src={resolvedImageSrc}
      alt={imageAlt}
      className={
        isFullBleedRight
          ? "w-full h-full object-contain"
          : "w-full h-full object-cover"
      }
    />
  );

  const bleedRightImage = isFullBleedRight ? (
    <motion.div
      className="hidden lg:block absolute inset-y-0 right-0 w-1/2 pointer-events-none"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={motionViewport}
      variants={fadeRight}
      transition={{ ...motionTransition, delay: 0.1 }}
    >
      {fullImage}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />
    </motion.div>
  ) : null;

  const mobileFullImage = isFullBleedRight ? (
    <motion.div
      className="lg:hidden mt-4 sm:mt-0"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={motionViewport}
      variants={fadeRight}
      transition={{ ...motionTransition, delay: 0.1 }}
    >
      <img src={resolvedImageSrc} alt={imageAlt} className="w-full h-auto" />
    </motion.div>
  ) : null;

  const textColumn = (
    <motion.div
      className={`${isFullBleedRight ? "" : textColSpan} space-y-4 sm:space-y-5 md:space-y-6`}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={motionViewport}
      variants={imagePosition === "left" ? fadeRight : fadeLeft}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] font-heading leading-[1.18] tracking-tight">
        {heading}{" "}
        <span className="text-primary font-extrabold">{highlightedHeading}</span>
      </h1>

      <p className="text-[#333333] text-sm sm:text-[15px] font-normal leading-relaxed max-w-xl font-sans">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
        <Button
          text={btn1Text}
          icon={Btn1Icon}
          href={btn1Href}
          onClick={btn1OnClick}
          variant="primary"
        />
        <Button
          text={btn2Text}
          icon={Btn2Icon}
          href={btn2Href}
          onClick={btn2OnClick}
          variant="secondary"
        />
      </div>
    </motion.div>
  );

  const imageColumn = isFullBleedRight ? null : (
    <motion.div
      className={`${imageColSpan} relative flex justify-center items-center mt-4 sm:mt-0 ${
        imageVariant === "full" ? "" : "overflow-visible"
      }`}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={motionViewport}
      variants={imagePosition === "left" ? fadeLeft : fadeRight}
      transition={{ ...motionTransition, delay: 0.1 }}
    >
      {imageVariant === "full" ? (
        fullGridImage
      ) : (
        <div className="relative w-[160px] sm:w-[220px] md:w-[280px] lg:w-[300px] aspect-[2/3]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] sm:w-[240%] md:w-[230%] lg:w-[220%] aspect-[5/4] pointer-events-none">
            <BlobShape color={blobColor} />
          </div>
          <div className="relative z-10 w-full h-full overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src={resolvedImageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </motion.div>
  );

  return (
    <section
      className={`relative overflow-hidden p-4 md:p-8 lg:py-16 lg:px-4 ${
        isFullBleedRight ? "lg:pr-0 lg:min-h-[520px]" : ""
      } ${className}`}
    >
      {bleedRightImage}
      <div className="relative z-10 max-w-[1140px] mx-auto w-full">
        <div
          className={`grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:gap-14 items-center ${
            isFullBleedRight ? "lg:grid-cols-2" : "lg:grid-cols-12"
          }`}
        >
          {imagePosition === "left" ? (
            isFullBleedRight ? (
              <>
                {imageColumn}
                <div className="contents">
                  {textColumn}
                  {mobileFullImage}
                </div>
              </>
            ) : (
              <>
                {imageColumn}
                {textColumn}
              </>
            )
          ) : isFullBleedRight ? (
            <>
              <div className="contents">
                {textColumn}
                {mobileFullImage}
              </div>
              {imageColumn}
            </>
          ) : (
            <>
              {textColumn}
              {imageColumn}
            </>
          )}
        </div>

        {showForm && (
          <div className="relative mt-8 sm:mt-10 md:mt-12 -mx-4 md:-mx-8 px-4 md:px-8 pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10 md:pb-12 hero-form-bg overflow-hidden">
            <div className="hero-form-bg-circle" aria-hidden="true" />

            <ScrollReveal
              className="relative z-10 max-w-4xl mx-auto"
              delay={0.15}
              variants={fadeUp}
            >
            <form
              onSubmit={handleFormSubmit}
              className="hero-form-card bg-primary rounded-xl sm:rounded-2xl p-4 sm:p-6"
            >
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center font-heading mb-5 sm:mb-6 md:mb-8">
                {formTitle}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white text-[#111111] placeholder:text-gray-700 border-0 focus:outline-none focus:ring-2 focus:ring-white/50 font-sans"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white text-[#111111] placeholder:text-gray-700 border-0 focus:outline-none focus:ring-2 focus:ring-white/50 font-sans"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white text-[#111111] placeholder:text-gray-700 border-0 focus:outline-none focus:ring-2 focus:ring-white/50 font-sans"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white text-[#111111] placeholder:text-gray-700 border-0 focus:outline-none focus:ring-2 focus:ring-white/50 font-sans"
                />
              </div>

              <textarea
                name="message"
                placeholder="What's in your mind? write down."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white text-[#111111] placeholder:text-gray-700 border-0 focus:outline-none focus:ring-2 focus:ring-white/50 font-sans resize-none mb-2"
              />

              <label className="flex items-start gap-3 mb-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, consent: e.target.checked }))
                  }
                  required
                  className="mt-1 w-4 h-4 rounded border-white accent-white shrink-0"
                />
                <span className="text-white/90 text-sm leading-relaxed font-sans">
                  By submitting, you consent to receive SMS notifications, alerts &amp; occasional
                  marketing communication from Stamford Publishers. Message frequency varies.
                  Message &amp; data rates may apply. You can reply STOP to unsubscribe at any time.
                </span>
              </label>

              <div className="hero-form-submit-3d">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-white text-primary font-semibold text-[15px] hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
                >
                  {formSubmitText}
                </button>
              </div>
            </form>
            </ScrollReveal>
          </div>
        )}
      </div>
    </section>
  );
}
