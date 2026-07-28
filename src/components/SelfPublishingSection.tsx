"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import Button from "./Button";
import { fadeLeft, fadeRight, motionTransition, motionViewport } from "@/lib/motion";

export interface SelfPublishingFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

export interface SelfPublishingSectionProps {
  formTitle?: string;
  formHighlight?: string;
  heading?: string;
  description?: string;
  submitText?: string;
  formPosition?: "left" | "right";
  onFormSubmit?: (data: SelfPublishingFormData) => void;
  className?: string;
}

export default function SelfPublishingSection({
  formTitle = "Let's Get Started -",
  formHighlight = "Special Offer: Up to 30% Off",
  heading = "A Streamlined Path to Self-Publishing",
  description = "Stamford Publishers provides a simple, flexible, and author-focused self-publishing experience tailored to your goals. From manuscript development to publishing, distribution, and marketing, we support you throughout the process while keeping your creative vision at the center of every step.",
  submitText = "Start Project",
  formPosition = "left",
  onFormSubmit,
  className = "",
}: SelfPublishingSectionProps) {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState<SelfPublishingFormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const inputStyles =
    "w-full px-4 py-2.5 rounded-lg bg-primary-light text-foreground placeholder:text-foreground/50 border border-primary/25 focus:outline-none focus:ring-2 focus:ring-primary/30 font-sans";

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

  const formBlock = (
    <motion.form
      onSubmit={handleFormSubmit}
      className="bg-white rounded-2xl p-6 sm:p-8 w-full lg:w-[45%]"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={motionViewport}
      variants={formPosition === "left" ? fadeLeft : fadeRight}
    >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center font-heading mb-6 sm:mb-8 leading-tight">
              <span className="text-foreground">{formTitle} </span>
              <span className="text-primary">{formHighlight}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className={inputStyles}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={inputStyles}
              />
            </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className={`${inputStyles} sm:col-span-1 mb-4`}
              />

            <textarea
              name="message"
              placeholder="What's in your mind? write down"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className={`${inputStyles} resize-none mb-4`}
            />

            <label className="flex items-start gap-3 mb-6 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, consent: e.target.checked }))
                }
                required
                className="mt-1 w-4 h-4 rounded border-primary accent-primary shrink-0"
              />
              <span className="text-foreground/80 text-xs sm:text-sm leading-relaxed font-sans">
                Please CHECK THE BOX to COMMUNICATE VIA SMS OR EMAIL (
                <Link href="/privacy-policy" className="underline font-semibold">
                  PRIVACY POLICY
                </Link>{" "}
                &amp;{" "}
                <Link href="/terms-and-conditions" className="underline font-semibold">
                  TERM &amp; CONDITIONS
                </Link>
                ) - Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to STOP to
                unsubscribe anytime.
              </span>
            </label>

            <Button
              text={submitText}
              type="submit"
              variant="primary"
              className="!w-full !py-3"
            />
    </motion.form>
  );

  const textBlock = (
    <motion.div
      className="space-y-4 sm:space-y-5 lg:pl-4 w-full lg:w-[55%]"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={motionViewport}
      variants={formPosition === "left" ? fadeRight : fadeLeft}
      transition={{ ...motionTransition, delay: 0.1 }}
    >
      <h2
        id="self-publishing-heading"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-light font-heading leading-[1.18] tracking-tight"
      >
        {heading}
      </h2>

      <p className="text-primary-light text-sm sm:text-[15px] font-normal leading-relaxed font-sans">
        {description}
      </p>
    </motion.div>
  );

  return (
    <section
      className={`w-full bg-primary ${className}`}
      aria-labelledby="self-publishing-heading"
    >
      <div className="max-w-[1140px] mx-auto w-full py-12 lg:py-16 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {formPosition === "left" ? (
            <>
              {formBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {formBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
