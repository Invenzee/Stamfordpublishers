"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import {
  FaCommentDots,
  FaChevronDown,
  FaBars,
  FaXmark,
  FaBook,
  FaBullhorn,
  FaHeadphones,
  FaBookOpen,
} from "react-icons/fa6";
import { isStandaloneLpPath } from "@/lib/standalone-lp";

export default function Header({ onOpenChat, onOpenSubmit }: { onOpenChat?: () => void; onOpenSubmit?: () => void }) {
  const pathname = usePathname();
  const isStandaloneLp = isStandaloneLpPath(pathname);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const servicesList = [
    { title: "Book Publishing Services", desc: "End-to-end publishing for authors", icon: FaBook, href: "/book-publishing-services" },
    { title: "Book Marketing Services", desc: "Promote your book and grow your audience", icon: FaBullhorn, href: "/book-marketing-services" },
    { title: "Audiobook Services", desc: "Professional audiobook production", icon: FaHeadphones, href: "/audiobook-services" },
    { title: "Childrens Book Publishing", desc: "Publishing support for children's books", icon: FaBookOpen, href: "/childrens-book-publishing" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const isServicesActive = servicesList.some((service) => isActive(service.href));

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinkClass = (href: string) =>
    isActive(href)
      ? "relative py-1 font-semibold text-[#59101B] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#59101B] after:rounded-full after:transition-all after:duration-300"
      : "relative py-1 font-medium text-gray-700 hover:text-[#59101B] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#59101B] after:rounded-full after:transition-all after:duration-300 hover:after:w-full";

  const mobileNavLinkClass = (href: string) =>
    isActive(href)
      ? "text-[#59101B] font-semibold py-2 px-3 rounded-lg bg-[#59101B]/5"
      : "hover:text-[#59101B] py-2 px-3 rounded-lg hover:bg-gray-50";

  if (isStandaloneLp) return null;

  return (
    <header className="sticky top-0 z-50 max-w-[1140px] mx-auto w-full px-4">
      <nav className="bg-white/95 backdrop-blur-md rounded-2xl border border-[#59101B]/20 shadow-[0_8px_30px_rgb(89,16,27,0.2)] px-5 md:px-7 py-3 transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.webp" alt="Stamford Publishers" width={100} height={100} className="w-20 h-auto sm:w-[100px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative py-1"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`relative flex items-center gap-1.5 py-1 transition-colors font-medium focus:outline-none after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#59101B] after:rounded-full after:transition-all after:duration-300 ${
                  isServicesOpen || isServicesActive
                    ? "text-[#59101B] after:w-full"
                    : "text-gray-700 hover:text-[#59101B] after:w-0 hover:after:w-full"
                }`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <FaChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180 text-[#59101B]" : "text-gray-500"
                    }`}
                />
              </button>

              {/* Dropdown Menu with contiguous hover bridge */}
              {isServicesOpen && (
                <div className="absolute top-8 left-1/2 -translate-x-1/2 pt-2 w-80 z-50">
                  <div className="bg-white backdrop-blur-md rounded-xl border border-[#59101B]/20 shadow-[0_8px_30px_rgb(89,16,27,0.2)] p-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="space-y-1">
                      {servicesList.map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={index}
                            href={service.href}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#59101B]/20 transition-colors group/item"
                          >
                            <div className="p-2 rounded-lg bg-[#59101B]/5 text-[#59101B] group-hover/item:bg-[#59101B] group-hover/item:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-[15px] font-semibold text-gray-900 group-hover/item:text-[#59101B]">
                                {service.title}
                              </div>
                              <div className="text-[13px] text-gray-500 line-clamp-1">
                                {service.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about-us" className={navLinkClass("/about-us")}>
              About Us
            </Link>

            <Link href="/contact-us" className={navLinkClass("/contact-us")}>
              Contact Us
            </Link>
          </div>

          {/* Live Chat Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              text="Live Chat"
              icon={FaCommentDots}
              onClick={onOpenChat}
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenChat}
              className="bg-[#59101B] text-white p-2 rounded-full text-xs font-medium flex items-center justify-center cursor-pointer"
              aria-label="Live Chat"
            >
              <FaCommentDots className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 p-2 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <FaXmark className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-100 mt-3 animate-in fade-in duration-200">
            <div className="flex flex-col gap-3 font-medium text-gray-800 px-2 text-[15px]">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={mobileNavLinkClass("/")}
              >
                Home
              </Link>

              <div className="py-1 px-3">
                <div className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-2">
                  Our Services
                </div>
                <div className="grid grid-cols-1 gap-2 pl-2 border-l-2 border-[#59101B]/20">
                  {servicesList.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[15px] text-gray-700 hover:text-[#59101B] py-1"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/about-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className={mobileNavLinkClass("/about-us")}
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className={mobileNavLinkClass("/contact-us")}
              >
                Contact Us
              </Link>

              <Button
                text="Start Live Chat"
                icon={FaCommentDots}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onOpenChat) onOpenChat();
                }}
                className="w-full mt-2"
              />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
