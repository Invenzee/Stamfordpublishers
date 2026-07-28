"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { FaCommentDots, FaPhone } from "react-icons/fa6";
import Button from "./Button";
import BlobShape from "./BlobShape";
import {
  fadeLeft,
  fadeRight,
  motionTransition,
  motionViewport,
} from "@/lib/motion";

export interface LeftRightSectionImage {
  src: string;
  alt: string;
  blobColor?: string;
}

export interface LeftRightSectionButton {
  text: string;
  icon?: React.ElementType | React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
}

export interface LeftRightSectionContent {
  heading?: string;
  highlightedHeading?: string;
  description?: React.ReactNode;
  buttons?: LeftRightSectionButton[];
}

export interface LeftRightSectionProps {
  image: LeftRightSectionImage;
  content?: LeftRightSectionContent;
  customContent?: React.ReactNode;
  layout?: "image-left" | "image-right";
  imageVariant?: "book" | "photo";
  equalColumns?: boolean;
  className?: string;
}

const defaultButtons: LeftRightSectionButton[] = [
  {
    text: "Get A Free Consultancy",
    icon: FaCommentDots,
    href: "#consultancy",
    variant: "primary",
  },
  {
    text: "Call Now",
    icon: FaPhone,
    href: "tel:+18001234567",
    variant: "secondary",
  },
];

export default function LeftRightSection({
  image,
  content,
  customContent,
  layout = "image-left",
  imageVariant = "book",
  equalColumns = false,
  className = "",
}: LeftRightSectionProps) {
  const reduceMotion = useReducedMotion();

  const textColSpan = equalColumns ? "lg:col-span-6" : "lg:col-span-7";
  const imageColSpan = equalColumns ? "lg:col-span-6" : "lg:col-span-5";

  const {
    heading = "",
    highlightedHeading = "",
    description,
    buttons = defaultButtons,
  } = content ?? {};

  const { src, alt, blobColor = "#59101B" } = image;
  const imageSrc = src.startsWith("/") ? src : `/${src}`;

  const imageVariants = layout === "image-left" ? fadeLeft : fadeRight;
  const textVariants = layout === "image-left" ? fadeRight : fadeLeft;

  const textColumn = customContent ?? (
    <motion.div
      className={`${textColSpan} space-y-4 sm:space-y-5 md:space-y-6`}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={motionViewport}
      variants={textVariants}
      transition={{ ...motionTransition, delay: 0.1 }}
    >
      {(heading || highlightedHeading) && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] font-heading leading-[1.18] tracking-tight">
          {heading}{" "}
          {highlightedHeading && (
            <span className="text-primary font-extrabold">{highlightedHeading}</span>
          )}
        </h2>
      )}

      {description && (
        <div className="text-[#333333] text-sm sm:text-[15px] font-normal leading-relaxed max-w-xl font-sans space-y-4">
          {typeof description === "string" ? <p>{description}</p> : description}
        </div>
      )}

      {buttons.length > 0 && (
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
          {buttons.map((button, index) => (
            <Button
              key={`${button.text}-${index}`}
              text={button.text}
              icon={button.icon}
              href={button.href}
              onClick={button.onClick}
              variant={button.variant ?? (index === 0 ? "primary" : "secondary")}
            />
          ))}
        </div>
      )}
    </motion.div>
  );

  const imageColumn =
    imageVariant === "photo" ? (
      <motion.div
        className={`${imageColSpan} overflow-hidden rounded-[20px] mt-4 sm:mt-0`}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={motionViewport}
        variants={imageVariants}
      >
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:min-h-[500px]"
        />
      </motion.div>
    ) : (
      <motion.div
        className={`${imageColSpan} relative flex justify-center items-center mt-4 sm:mt-0 overflow-visible`}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={motionViewport}
        variants={imageVariants}
      >
        <div className="relative w-[160px] sm:w-[220px] md:w-[280px] lg:w-[300px] aspect-[2/3]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] sm:w-[240%] md:w-[230%] lg:w-[220%] aspect-[5/4] pointer-events-none">
            <BlobShape color={blobColor} />
          </div>
          <div className="relative z-10 w-full h-full overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    );

  const wrappedCustomContent =
    customContent != null ? (
      <motion.div
        className={textColSpan}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={motionViewport}
        variants={textVariants}
        transition={{ ...motionTransition, delay: 0.1 }}
      >
        {customContent}
      </motion.div>
    ) : null;

  return (
    <section
      className={`relative overflow-hidden p-4 md:p-8 lg:py-16 lg:px-4 ${className}`}
    >
      <div className="relative z-10 max-w-[1140px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-14 items-center">
          {layout === "image-left" ? (
            <>
              {imageColumn}
              {customContent != null ? wrappedCustomContent : textColumn}
            </>
          ) : (
            <>
              {customContent != null ? wrappedCustomContent : textColumn}
              {imageColumn}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
