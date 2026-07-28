"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaCommentDots, FaPhone } from "react-icons/fa6";
import Button from "./Button";

interface PublishingJourneySectionProps {
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
  className?: string;
}

export default function LeftRightSection({
  heading = "Begin Your Publishing Journey with",
  highlightedHeading = "Stamford Publishers",
  description = "Whether you’re publishing your first book or adding to an established portfolio, Stamford Publishers delivers comprehensive publishing solutions designed around your unique goals, guiding you through every stage of the publishing process with expert support and personalized service.",
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
  className = "",
}: PublishingJourneySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to trigger entrance transition when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderIcon = (Icon: React.ElementType | React.ReactNode) => {
    if (!Icon) return null;
    if (typeof Icon === "function" || (typeof Icon === "object" && Icon !== null && "render" in (Icon as any))) {
      const Component = Icon as React.ElementType;
      return <Component className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />;
    }
    return <span className="shrink-0 transition-transform duration-300 group-hover:scale-110">{Icon as React.ReactNode}</span>;
  };

  return (
    <section
      ref={sectionRef}
      className={`relative py-20 max-sm:px-4 max-sm:py-8 overflow-hidden ${className}`}
    >
      {/* 1140px container without any x-axis padding */}
      <div className="max-w-[1140px] mx-auto px-0 w-full">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center transition-all duration-700 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Left Column: Text Content & Dual Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-heading leading-[1.18] tracking-tight">
              {heading}{" "}
              <span className="text-[#59101B] font-extrabold">{highlightedHeading}</span>
            </h2>

            <p className="text-[#333333] text-[15px] font-normal leading-relaxed max-w-xl font-sans">
              {description}
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">

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
          </div>

          {/* Right Column: Organic Animated Liquid Blob & Overlaid Book Cover Image Placeholder */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-square flex items-center justify-center">
              {/* Animated Morphing Organic Liquid Blob */}
              <div
                className="absolute inset-2 bg-[#59101B] animate-blob-liquid shadow-lg"
                style={{ backgroundColor: blobColor }}
              />
              {/* Overlaid Book Image / Placeholder Container */}
              <div className="relative z-10 w-[220px] sm:w-[300px] aspect-[2/3] overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
