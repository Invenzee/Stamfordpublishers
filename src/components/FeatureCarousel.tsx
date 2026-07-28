"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  FaCheck,
  FaGlobe,
  FaPenNib,
  FaTableColumns,
  FaBookOpen,
  FaHandshake,
} from "react-icons/fa6";
import { ScrollReveal } from "./ScrollReveal";

export interface FeatureItem {
  icon: React.ElementType;
  label: string;
}

export interface FeatureCarouselProps {
  items?: FeatureItem[];
  className?: string;
}

const defaultItems: FeatureItem[] = [
  { icon: FaCheck, label: "Client Satisfaction Guaranteed" },
  { icon: FaPenNib, label: "Expert Author Support" },
  { icon: FaTableColumns, label: "Personalized Client Dashboard" },
  { icon: FaGlobe, label: "Global Book Distribution" },
  { icon: FaBookOpen, label: "Professional Editing & Design" },
  { icon: FaHandshake, label: "100% Author Ownership" },
];

const GAP_PX = 20;

function useVisibleCount() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setVisibleCount(3);
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visibleCount;
}

export default function FeatureCarousel({
  items = defaultItems,
  className = "",
}: FeatureCarouselProps) {
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, items.length - visibleCount);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(Math.max(0, Math.min(index, maxIndex)));
    },
    [maxIndex]
  );

  const cardWidth = `calc((100% - ${(visibleCount - 1) * GAP_PX}px) / ${visibleCount})`;
  const slideOffset = `calc(-${activeIndex} * (${cardWidth} + ${GAP_PX}px))`;
  const dotCount = maxIndex + 1;

  return (
    <section
      className={`w-full px-4 -mt-8 sm:-mt-16 lg:-mt-20 ${className}`}
      aria-label="Publishing benefits"
    >
      <ScrollReveal className="max-w-[1140px] mx-auto w-full">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              gap: `${GAP_PX}px`,
              transform: `translateX(${slideOffset})`,
            }}
          >
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={index}
                  className="shrink-0 flex flex-col items-center justify-center gap-4 rounded-2xl border border-gray-300 bg-white px-4 py-8 sm:px-6 sm:py-10"
                  style={{ width: cardWidth }}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-center text-[15px] font-semibold text-primary font-sans leading-snug">
                    {item.label}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {dotCount > 1 && (
          <div
            className="mt-6 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Carousel navigation"
          >
            {Array.from({ length: dotCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index
                    ? "h-2.5 w-8 bg-primary"
                    : "h-2.5 w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}
