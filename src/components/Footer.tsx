"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
import { isStandaloneLpPath } from "@/lib/standalone-lp";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

const serviceLinks = [
  { label: "Book Publishing Services", href: "/book-publishing-services" },
  { label: "Book Marketing Services", href: "/book-marketing-services" },
  { label: "Audiobook Services", href: "/audiobook-services" },
  { label: "Childrens Book Publishing", href: "/childrens-book-publishing" },
];

export default function Footer() {
  const pathname = usePathname();

  if (isStandaloneLpPath(pathname)) return null;

  return (
    <footer className="w-full bg-primary text-white" aria-label="Site footer">
      <div className="max-w-[1140px] mx-auto w-full px-4 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 w-full">
          <div className="lg:w-[35%] space-y-5">
            <Link href="/" className="inline-block">
              <img
                src="/logo.webp"
                alt="Stamford Publishers"
                width={140}
                height={140}
                className="w-[120px] sm:w-[140px] h-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm sm:text-[15px] leading-relaxed text-white/90 font-sans">
              Since 2014, Stamford Publishers has provided professional writing and marketing
              support to authors, offering a smooth process from initial concept to final
              promotion. Our team combines creativity, strategy, and publishing expertise to help
              authors bring their ideas to life and reach a wider audience.
            </p>
          </div>

            <div className="lg:w-[20%] flex-1">
              <h2 className="text-lg font-bold font-heading mb-4">Quick Links</h2>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-[15px] text-white/90 hover:text-white transition-colors font-sans"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-[25%] flex-1">
              <h2 className="text-lg font-bold font-heading mb-4">Services</h2>
              <ul className="space-y-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-[15px] text-white/90 hover:text-white transition-colors font-sans"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-[20%] flex-1">
              <h2 className="text-lg font-bold font-heading mb-4">Contact</h2>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="tel:+15625732551"
                  className="flex items-start gap-3 text-sm sm:text-[15px] text-white/90 hover:text-white transition-colors font-sans"
                >
                  <FaPhone className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>+1 562 573 2551</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@stamfordpublishers.com"
                  className="flex items-start gap-3 text-sm sm:text-[15px] text-white/90 hover:text-white transition-colors font-sans"
                >
                  <FaEnvelope className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>info@stamfordpublishers.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=1001+Wilshire+Boulevard+%231439+Los+Angeles+CA+90017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm sm:text-[15px] text-white/90 hover:text-white transition-colors font-sans"
                >
                  <FaLocationDot className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>1001 Wilshire Boulevard #1439 Los Angeles, CA 90017</span>
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-bold font-heading mb-4">Social Media</h3>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/80 text-white hover:bg-white hover:text-primary transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/80 text-white hover:bg-white hover:text-primary transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/25">
        <div className="max-w-[1140px] mx-auto w-full py-5 px-4 text-center text-xs sm:text-sm text-white/90 font-sans">
          <p className="break-words">
            Copyright © 2026 - Stamford Publishers | All rights reserved |{" "}
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
