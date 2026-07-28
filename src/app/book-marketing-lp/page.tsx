"use client";

import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaStar,
  FaXmark,
} from "react-icons/fa6";

const PHONE = "+1 562 573 2551";
const PHONE_HREF = "tel:+15625732551";
const EMAIL = "info@stamfordpublishers.com";
const POPUP_DELAY_MS = 30000;
const POPUP_SESSION_KEY = "book-marketing-lp-popup-closed";

const GENRE_OPTIONS = [
  "Fiction",
  "Non-Fiction",
  "Children's Book",
  "Memoir",
  "Self-Help",
  "Business",
  "Poetry",
  "Audiobook",
  "Other",
];

const HERO_STATS = [
  "99% Client Satisfaction Rate",
  "10+ Years in Publishing & Marketing",
  "150+ National Bestsellers Launched",
  "50+ In-House Marketing Specialists",
];

const TIMELINE_OPTIONS = ["1 Month", "3 Months", "6 Months", "12 Months"];
const PUBLISHED_OPTIONS = ["Yes", "No"];

const PARTNER_LOGOS = [
  { src: "/cl-1%20(1).webp", alt: "Penguin Random House" },
  { src: "/cl-4%20(1).webp", alt: "Macmillan" },
  { src: "/cl-3%20(1).webp", alt: "HarperCollins" },
  { src: "/cl-5%20(1).webp", alt: "Hachette" },
];

const PROMO_CHANNELS = [
  {
    id: "social",
    label: "Social Media Marketing",
    title: "Social Media Marketing",
    description:
      "We put your book in front of readers where they already spend their time. Through precision-targeted campaigns on Facebook, Instagram, and LinkedIn, we connect your story to the audiences most likely to engage with it — turning casual scrollers into engaged readers and buyers.",
    image: "/book-marketing-lp/social-media.jpg",
    imageAlt: "Social media marketing for book promotion",
  },
  {
    id: "seo",
    label: "Search Engine Optimization",
    title: "Search Engine Optimization",
    description:
      "Readers can’t buy a book they can’t find. We research the keywords, categories, and search terms your ideal readers are actually using, then apply them across your book’s metadata, listing copy, and author website. The result is stronger organic rankings on Amazon and Google alike, so your book keeps attracting new readers long after a campaign ends.",
    image: "/book-marketing-lp/seo.jpg",
    imageAlt: "Search engine optimization for authors",
  },
  {
    id: "amazon",
    label: "Amazon Marketing",
    title: "Amazon Marketing",
    description:
      "Amazon is where most book discovery and buying happens, so we treat your listing as a storefront, not an afterthought. From optimized titles, descriptions, and A+ Content to targeted Amazon Ads and category/bestseller-list positioning, we build a presence designed to convert browsers into buyers and keep your book climbing the rankings that matter.",
    image: "/book-marketing-lp/amazon.jpg",
    imageAlt: "Amazon book marketing campaigns",
  },
  {
    id: "content",
    label: "Content Marketing",
    title: "Content Marketing",
    description:
      "We help authors build authority, not just awareness. Through blog content, author interviews, guest features, and shareable reader-focused pieces, we position you as a voice in your genre — giving readers a reason to follow your work and giving search engines fresh, relevant content to rank.",
    image: "/book-marketing-lp/content.jpg",
    imageAlt: "Content marketing for book authors",
  },
  {
    id: "launch",
    label: "Book Launch Campaigns",
    title: "Book Launch Campaigns",
    description:
      "The first weeks after release set the trajectory for a book’s long-term success. We build coordinated launch campaigns — pre-release buzz, review pipelines, launch-day promotion, and post-launch momentum — timed to drive the concentrated sales and visibility that can push a title onto bestseller lists.",
    image: "/book-marketing-lp/book.jpg",
    imageAlt: "Book launch marketing campaign",
  },
  {
    id: "influencer",
    label: "Influencer Marketing",
    title: "Influencer Marketing",
    description:
      "We connect your book with bookstagrammers, BookTokers, YouTube reviewers, and genre-specific influencers who already have your readers’ attention. These partnerships generate authentic reviews, unboxings, and recommendations that build trust and buzz in ways traditional advertising can’t replicate.",
    image: "/book-marketing-lp/influencer.jpg",
    imageAlt: "Influencer marketing for book authors",
  },
];

const EXECUTION_STEPS = [
  {
    number: "01",
    title: "Evaluation & Strategy",
    description:
      "We start by analyzing your book, genre, and target audience to build a marketing strategy aligned with your publishing goals.",
  },
  {
    number: "02",
    title: "Market Research",
    description:
      "We study market trends, competitor performance, and reader behavior to identify most effective channels and opportunities for your book.",
  },
  {
    number: "03",
    title: "Campaign Execution",
    description:
      "We launch and actively manage your marketing campaigns, tracking performance in real time to keep growth and engagement on target.",
  },
  {
    number: "04",
    title: "Optimization & Reporting",
    description:
      "We continuously refine your campaigns based on performance data — improving visibility, increasing reader interest, and maximizing your return on investment.",
  },
];

const WHY_CHOOSE = [
  {
    number: "01",
    title: "Personally Backed Strategy",
    description:
      "Every author receives a dedicated strategist who understands your book and tailors every campaign to your unique goals.",
  },
  {
    number: "02",
    title: "Proven Results",
    description:
      "Our team has supported hundreds of authors across genres, building campaigns that improve visibility and reader engagement.",
  },
  {
    number: "03",
    title: "Dedicated & Ongoing Support",
    description:
      "From launch day to long-term promotion, we stay with you — answering questions, adjusting strategy, and reporting on progress.",
  },
];

const PACKAGE_FEATURES = [
  "Social media setup and management",
  "Email campaign creation",
  "Amazon & Google ad setup",
  "Press release writing",
  "Author website landing page",
  "Monthly performance report",
  "Dedicated account manager",
  "Content calendar planning",
];

const WORK_COVERS = [
  { src: "/children-book-1.jpg", alt: "Children's book cover" },
  { src: "/children-book-2.jpg", alt: "Children's book cover design" },
  { src: "/children-book-3.jpg", alt: "Illustrated children's book" },
  { src: "/audiobook-2.jpg", alt: "Fiction book cover" },
  { src: "/audiobook-3.jpg", alt: "Non-fiction book cover" },
  { src: "/audiobook-4.jpg", alt: "Published book showcase" },
];

const TESTIMONIALS = [
  {
    title: "The Best Service",
    quote:
      "Stamford Publishers transformed how my book reached readers. Their marketing team understood my audience and built campaigns that genuinely moved the needle. I saw more reviews, more sales, and more engagement within the first month.",
    author: "Sarah Mitchell",
    role: "Independent Author",
  },
  {
    title: "The Best Service",
    quote:
      "I was overwhelmed by book marketing until I partnered with Stamford Publishers. They handled social media, email outreach, and Amazon ads while keeping me informed every step of the way. Professional, responsive, and results-driven.",
    author: "James Rodriguez",
    role: "Non-Fiction Author",
  },
];

function handleFormSubmit(e: React.FormEvent) {
  e.preventDefault();
}

export default function BookMarketingLpPage() {
  const [activeChannel, setActiveChannel] = useState(PROMO_CHANNELS[0].id);
  const [popupOpen, setPopupOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  const activePromo = PROMO_CHANNELS.find((c) => c.id === activeChannel) ?? PROMO_CHANNELS[0];

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(POPUP_SESSION_KEY)) return;

    const timer = window.setTimeout(() => {
      setPopupOpen(true);
    }, POPUP_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setPopupOpen(false);
    sessionStorage.setItem(POPUP_SESSION_KEY, "1");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          headerScrolled
            ? "bg-white border-b border-[#e5e5e5] shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1140px] mx-auto w-full px-4 py-3 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 text-sm font-medium text-[#111] min-w-0 justify-self-start"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#ffc800] shrink-0">
              <FaPhone className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
            <span className="hidden sm:block">
              <span className="text-[#666] text-xs block leading-tight">Call Now</span>
              <span className="font-semibold">{PHONE}</span>
            </span>
          </a>

          <a href="#" className="justify-self-center shrink-0" aria-label="Stamford Publishers">
            <img
              src="/book-marketing-lp/logo.png"
              alt="Stamford Publishers"
              width={100}
              height={100}
              className="h-14 sm:h-16 w-auto"
            />
          </a>

          <a
            href="#lp-hero-form"
            className="group relative inline-flex items-center justify-center gap-2 shrink-0 text-xs sm:text-sm px-4 py-2.5 sm:px-6 justify-self-end rounded-full overflow-hidden bg-[#ffc800] text-[#111] font-semibold transition-colors duration-300 hover:text-white normal-case"
          >
            <span className="absolute inset-0 bg-[#111] rounded-full scale-x-0 origin-left transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100" aria-hidden="true" />
            <span className="relative z-10">Get Started</span>
          </a>
        </div>
      </header>

      <div>
        {/* Hero */}
        <section
          className="relative pt-12 bg-[#fff8e6] min-h-[780px]"
          aria-labelledby="lp-hero-heading"
        >
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-45 bg-[#fff8e6] bg-[url('/book-marketing-lp/bannerbg%20(1).webp')] bg-cover bg-[center_30%] bg-no-repeat"
            aria-hidden="true"
          />
          <img
            src="/book-marketing-lp/Bannerrr%20(2).jpg"
            alt=""
            className="absolute bottom-0 left-0 right-0 z-0 block w-full h-auto opacity-80 pointer-events-none object-contain object-bottom"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(180deg,rgba(255,248,230,0.94)_0%,rgba(255,248,230,0.82)_22%,rgba(255,248,230,0.58)_48%,rgba(255,248,230,0.18)_72%,rgba(255,255,255,0)_100%)]"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-[1140px] mx-auto w-full px-4 pt-24 sm:pt-28 pb-32 sm:pb-36 lg:pb-40">
            <div className="text-center max-w-5xl mx-auto">
              <h1
                id="lp-hero-heading"
                className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-[#111] mb-2"
              >
                Turn Your Book Into a Bestseller
              </h1>
              <p className="text-[#333] text-sm sm:text-[15px] leading-relaxed mb-6 sm:mb-8 max-w-4xl mx-auto">
                Every great book deserves an audience. At Stamford Publishers, we build data-driven marketing campaigns that put your book in front of the readers most likely to buy it — driving visibility, credibility, and lasting sales, whether you&apos;re launching a debut title or reigniting momentum for an existing one.
              </p>

              <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 max-w-2xl mx-auto mb-8 sm:mb-10 text-left list-none">
                {HERO_STATS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm sm:text-[14px] text-[#222] font-medium">
                    <span className="flex items-center justify-center w-[22px] h-[22px] shrink-0 bg-[#ffc800] rounded-full text-[11px] font-bold text-[#111]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <form
              id="lp-hero-form"
              onSubmit={handleFormSubmit}
              className="max-w-3xl mx-auto space-y-3"
            >
              <div className="grid sm:grid-cols-3 gap-3">
                <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-2 border border-black/10 rounded-lg outline-none focus:border-[#ffc800] bg-[#B3B5A1] text-white placeholder:text-white" />
                <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 border border-black/10 rounded-lg outline-none focus:border-[#ffc800] bg-[#B3B5A1] text-white placeholder:text-white" />
                <input type="tel" name="phone" placeholder="Your Phone" required className="w-full px-4 py-2 border border-black/10 rounded-lg outline-none focus:border-[#ffc800] bg-[#B3B5A1] text-white placeholder:text-white" />
              </div>
              <div className="grid sm:grid-cols-[1fr_1fr_1.4fr] gap-3">
                <select name="timeline" required className="w-full px-4 py-2 pr-10 border border-black/10 rounded-lg outline-none focus:border-[#ffc800] bg-[#B3B5A1] text-white appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%278%27 viewBox=%270 0 12 8%27%3E%3Cpath fill=%27%23fff%27 d=%27M1 1l5 5 5-5%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_1rem_center]" defaultValue="3 Months">
                  {TIMELINE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <select name="published" required className="w-full px-4 py-2 pr-10 border border-black/10 rounded-lg outline-none focus:border-[#ffc800] bg-[#B3B5A1] text-white appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%278%27 viewBox=%270 0 12 8%27%3E%3Cpath fill=%27%23fff%27 d=%27M1 1l5 5 5-5%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_1rem_center]" defaultValue="Yes">
                  {PUBLISHED_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <button type="submit" className="group relative inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full overflow-hidden bg-[#ffc800] text-[#111] font-bold text-sm uppercase tracking-wide transition-colors duration-300 hover:text-white h-[46px] sm:h-auto">
                  <span className="absolute inset-0 bg-[#111] rounded-full scale-x-0 origin-left transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100" aria-hidden="true" />
                  <span className="relative z-10">Submit Now</span>
                </button>
              </div>
            </form>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-[15] leading-none pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-16 md:h-20 drop-shadow-[0_-4px_12px_rgba(0,0,0,0.04)]">
              <path
                d="M0,55 C180,95 360,15 540,45 C720,75 900,25 1080,50 C1260,75 1380,85 1440,90 L1440,100 L0,100 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </section>

        {/* Publisher trust row */}
        <section className="py-8 bg-white border-b border-[#eee]" aria-label="Publishing partners">
          <div className="max-w-[1140px] mx-auto w-full px-4">
            <div className="flex items-center justify-between gap-4 sm:gap-8">
              {PARTNER_LOGOS.map((logo) => (
                <img
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-10 lg:h-12 w-auto object-contain flex-1 max-w-[22%]"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Promotional Channels */}
        <section className="py-12 lg:py-16 bg-white" aria-labelledby="lp-channels-heading">
          <div className="max-w-[1140px] mx-auto w-full px-4">
            <h2
              id="lp-channels-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12"
            >
              Our{" "}
              <span className="text-[#ffc800]">Promotional Channels</span>
            </h2>

            <div className="flex items-start gap-8">
              <nav
                className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible w-[25%] pb-2 lg:pb-0 scrollbar-hide"
                aria-label="Marketing channels"
              >
                {PROMO_CHANNELS.map((channel) => (
                  <button
                    key={channel.id}
                    type="button"
                    onClick={() => setActiveChannel(channel.id)}
                    className={`group relative text-left px-5 py-3 text-sm whitespace-nowrap lg:whitespace-normal rounded-full overflow-hidden transition-colors duration-300 hover:text-white ${
                      activeChannel === channel.id
                        ? "bg-[#ffc800] text-[#111] font-semibold"
                        : "bg-[#fbeccc] text-[#4a2c2a] font-medium"
                    }`}
                  >
                    <span className="absolute inset-0 bg-[#111] rounded-full scale-x-0 origin-left transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100" aria-hidden="true" />
                    <span className="relative z-10">{channel.label}</span>
                  </button>
                ))}
              </nav>

              <div className="relative overflow-hidden rounded-[20px] min-h-[320px] w-[70%] bg-[#fbeccc]">
                <img
                  src={activePromo.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain object-right pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 z-[1] pointer-events-none hidden md:block bg-[linear-gradient(to_right,#FBEBCD_65%,transparent_100%)]"
                  aria-hidden="true"
                />
                <div className="relative z-[2] w-full md:w-[80%] md:max-w-[80%] p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[320px]">
                  <h3 className="text-2xl font-bold text-[#59101B] mb-3 sm:mb-4">
                    {activePromo.title}
                  </h3>
                  <p className="text-[#333] text-[14px]! leading-relaxed mb-6 sm:mb-8">
                    {activePromo.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                    <a
                      href="#lp-hero-form"
                      className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full overflow-hidden bg-[#ffc800] text-[#111] font-semibold text-sm transition-colors duration-300 hover:text-white normal-case"
                    >
                      <span className="absolute inset-0 bg-[#111] rounded-full scale-x-0 origin-left transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100" aria-hidden="true" />
                      <span className="relative z-10">Get A Quote</span>
                    </a>
                    <a href={PHONE_HREF} className="flex items-center gap-3 group">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ffc800] shrink-0 group-hover:bg-[#e6b400] transition-colors">
                        <FaPhone className="w-4 h-4 text-[#111]" aria-hidden="true" />
                      </span>
                      <span className="text-sm leading-tight">
                        <span className="text-[#666] text-xs block">Call Now</span>
                        <span className="font-bold text-[#111]">{PHONE}</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Marketing Matters */}
        <WhyMarketingSection sectionId="lp-why-heading" />

        {/* Execution */}
        <section className="py-12 lg:py-16 bg-white" aria-labelledby="lp-execution-heading">
          <div className="max-w-[1140px] mx-auto w-full px-4">
            <h2
              id="lp-execution-heading"
              className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center mb-10 lg:mb-14"
            >
              How Should It Be{" "}
              <span className="text-[#ffc800]">Executed?</span>
              <p></p>
            </h2>

            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              <div className="flex-[1] flex flex-col justify-center gap-14 xl:gap-20 min-w-0">
                {EXECUTION_STEPS.slice(0, 2).map((step) => (
                  <div key={step.number} className="text-right">
                    <span className="block text-4xl xl:text-5xl font-bold text-[#ffc800] leading-none mb-3">
                      {step.number}
                    </span>
                    <h3 className="font-bold text-lg xl:text-xl mb-2 text-[#111]">{step.title}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex-[1.45] flex items-center justify-center shrink-0">
                <div className="w-52 h-52 xl:w-60 xl:h-60 rounded-full bg-white flex items-center justify-center shadow-[0_0_50px_rgba(255,200,0,0.35)]">
                  <img
                    src="/book-marketing-lp/logo.png"
                    alt="Stamford Publishers"
                    width={140}
                    height={140}
                    className="w-28 xl:w-32 h-auto"
                  />
                </div>
              </div>

              <div className="flex-[1] flex flex-col justify-center gap-14 xl:gap-20 min-w-0">
                {EXECUTION_STEPS.slice(2, 4).map((step) => (
                  <div key={step.number} className="text-left">
                    <span className="block text-4xl xl:text-5xl font-bold text-[#ffc800] leading-none mb-3">
                      {step.number}
                    </span>
                    <h3 className="font-bold text-lg xl:text-xl mb-2 text-[#111]">{step.title}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:hidden">
              <div className="flex justify-center mb-10">
                <div className="w-44 h-44 rounded-full bg-white flex items-center justify-center shadow-[0_0_50px_rgba(255,200,0,0.35)]">
                  <img
                    src="/book-marketing-lp/logo.png"
                    alt="Stamford Publishers"
                    width={120}
                    height={120}
                    className="w-24 h-auto"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {EXECUTION_STEPS.map((step) => (
                  <div key={step.number}>
                    <span className="block text-3xl font-bold text-[#ffc800] leading-none mb-2">
                      {step.number}
                    </span>
                    <h3 className="font-bold text-lg mb-2 text-[#111]">{step.title}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 lg:mt-14">
              <a
                href="#lp-hero-form"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full overflow-hidden bg-[#ffc800] text-[#111] font-bold text-sm uppercase tracking-wide transition-colors duration-300 hover:text-white"
              >
                <span className="absolute inset-0 bg-[#111] rounded-full scale-x-0 origin-left transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100" aria-hidden="true" />
                <span className="relative z-10">Get A Quote</span>
              </a>
              <a href={PHONE_HREF} className="flex items-center gap-3 text-sm font-semibold text-[#111]">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ffc800] shrink-0">
                  <FaPhone className="w-4 h-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="text-[#666] text-xs block leading-tight">Call Now</span>
                  <span className="font-semibold">{PHONE}</span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-[#fff8e6] py-12 lg:py-16" aria-labelledby="lp-choose-heading">
          <div className="max-w-[1140px] mx-auto w-full px-4">
            <h2
              id="lp-choose-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12"
            >
              Why Authors Choose Stamford Publishers
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {WHY_CHOOSE.map((item) => (
                <div
                  key={item.number}
                  className="bg-[#ffc800] rounded-xl p-6 lg:p-8 text-[#111]"
                >
                  <span className="text-3xl font-bold block mb-3">{item.number}</span>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-12 lg:py-16 bg-white" aria-labelledby="lp-packages-heading">
          <div className="max-w-[1140px] mx-auto w-full px-4">
            <div className="text-center mb-8 lg:mb-12">
              <h2 id="lp-packages-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                Marketing Packages
              </h2>
              <p className="text-[#555] text-sm max-w-2xl mx-auto">
                Choose a plan that fits your book, budget, and promotional goals. All packages include
                dedicated support and transparent reporting.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {["Starter Plan", "Growth Plan", "Premium Plan"].map((planName) => (
                <div key={planName} className="border border-[#e5e5e5] rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-[#ffc800] py-4 px-6 text-center">
                    <h3 className="font-bold text-lg">{planName}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2.5 mb-6">
                      {PACKAGE_FEATURES.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-[#444]">
                          <span className="text-green-500 font-bold shrink-0">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#lp-hero-form"
                      className="group relative inline-flex items-center justify-center gap-2 w-full mb-4 px-6 py-3 rounded-full overflow-hidden bg-[#ffc800] text-[#111] font-bold text-sm uppercase tracking-wide transition-colors duration-300 hover:text-white"
                    >
                      <span className="absolute inset-0 bg-[#111] rounded-full scale-x-0 origin-left transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100" aria-hidden="true" />
                      <span className="relative z-10">Get Started</span>
                    </a>
                    <a
                      href={PHONE_HREF}
                      className="flex items-center justify-center gap-2 text-sm font-semibold text-[#111]"
                    >
                      <FaPhone className="text-[#ffc800]" aria-hidden="true" />
                      {PHONE}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Works */}
        <section className="bg-[#fff8e6] py-12 lg:py-16" aria-labelledby="lp-works-heading">
          <div className="max-w-[1140px] mx-auto w-full px-4">
            <div className="text-center mb-8">
              <h2 id="lp-works-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                Our Works
              </h2>
              <p className="text-[#555] text-sm max-w-xl mx-auto">
                A selection of books we have helped promote across fiction, non-fiction, and children&apos;s genres.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {WORK_COVERS.map((cover) => (
                <div key={cover.src} className="rounded-lg overflow-hidden shadow-md aspect-[3/4]">
                  <img src={cover.src} alt={cover.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Marketing Matters (repeat) */}
        <WhyMarketingSection sectionId="lp-why-heading-2" />

        {/* Testimonials */}
        <section className="py-12 lg:py-16 bg-white" aria-labelledby="lp-testimonials-heading">
          <div className="max-w-[1140px] mx-auto w-full px-4">
            <h2
              id="lp-testimonials-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12"
            >
              What Authors Say
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {TESTIMONIALS.map((item) => (
                <article key={item.author} className="border border-[#e5e5e5] rounded-xl p-6 lg:p-8 bg-white shadow-sm">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <div className="flex gap-0.5 mb-4 text-[#ffc800]" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} className="w-4 h-4" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-sm text-[#555] leading-relaxed mb-4">&ldquo;{item.quote}&rdquo;</p>
                  <p className="font-bold text-sm">{item.author}</p>
                  <p className="text-xs text-[#888]">{item.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* LP Footer */}
      <footer className="relative bg-[#fff8e6] pt-16 pb-8" aria-label="Contact and footer">
        <div className="max-w-[1140px] mx-auto w-full px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-10">
            <div className="space-y-5">
              <img src="/logo.png" alt="Stamford Publishers" width={100} height={100} className="h-16 w-auto" />

              <ul className="space-y-4 text-sm">
                <li>
                  <a href={PHONE_HREF} className="flex items-start gap-3 hover:opacity-80 transition-opacity">
                    <FaPhone className="w-4 h-4 mt-0.5 text-[#ffc800] shrink-0" aria-hidden="true" />
                    <span>{PHONE}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="flex items-start gap-3 hover:opacity-80 transition-opacity">
                    <FaEnvelope className="w-4 h-4 mt-0.5 text-[#ffc800] shrink-0" aria-hidden="true" />
                    <span>{EMAIL}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=1001+Wilshire+Boulevard+%231439+Los+Angeles+CA+90017"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:opacity-80 transition-opacity"
                  >
                    <FaLocationDot className="w-4 h-4 mt-0.5 text-[#ffc800] shrink-0" aria-hidden="true" />
                    <span>1001 Wilshire Boulevard #1439 Los Angeles, CA 90017</span>
                  </a>
                </li>
              </ul>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-[#ccc] hover:bg-[#ffc800] hover:border-[#ffc800] transition-colors"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-[#ccc] hover:bg-[#ffc800] hover:border-[#ffc800] transition-colors"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-5">We Would Love To Hear From You</h2>
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input type="text" name="name" placeholder="Name" required className="w-full px-3 py-2.5 border border-[#d9d9d9] rounded-md bg-white text-[#111] text-sm outline-none focus:border-[#ffc800] transition-colors" />
                  <input type="email" name="email" placeholder="Email" required className="w-full px-3 py-2.5 border border-[#d9d9d9] rounded-md bg-white text-[#111] text-sm outline-none focus:border-[#ffc800] transition-colors" />
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input type="tel" name="phone" placeholder="Phone Number" required className="w-full px-3 py-2.5 border border-[#d9d9d9] rounded-md bg-white text-[#111] text-sm outline-none focus:border-[#ffc800] transition-colors" />
                  <select name="genre" required className="w-full px-3 py-2.5 border border-[#d9d9d9] rounded-md bg-white text-[#111] text-sm outline-none focus:border-[#ffc800] transition-colors" defaultValue="">
                    <option value="" disabled>Genre</option>
                    {GENRE_OPTIONS.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  required
                  className="w-full min-h-[100px] resize-y px-3 py-2.5 border border-[#d9d9d9] rounded-md bg-white text-[#111] text-sm outline-none focus:border-[#ffc800] transition-colors"
                />
                <button type="submit" className="group relative inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full overflow-hidden bg-[#ffc800] text-[#111] font-bold text-sm uppercase tracking-wide transition-colors duration-300 hover:text-white">
                  <span className="absolute inset-0 bg-[#111] rounded-full scale-x-0 origin-left transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100" aria-hidden="true" />
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-[#ddd] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888]">
            <p>Copyright © 2026 Stamford Publishers. All rights reserved.</p>
            <img src="/logo.png" alt="" className="h-8 w-auto opacity-60" aria-hidden="true" />
          </div>
        </div>
      </footer>

      {/* 30-second popup */}
      {popupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/55 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="lp-popup-heading">
          <div className="relative grid max-w-[900px] w-full max-h-[90vh] overflow-hidden rounded shadow-[0_24px_64px_rgba(0,0,0,0.25)] md:grid-cols-2 bg-white">
            <div className="bg-[#ffc800] p-6 lg:p-8 flex flex-col min-h-[280px]">
              <h2 id="lp-popup-heading" className="text-xl sm:text-2xl font-bold leading-snug mb-6">
                Turn Your Book Into a Bestseller With Stamford Publishers
              </h2>

              <div className="space-y-4 text-sm mb-6">
                <div className="flex items-start gap-3">
                  <FaPhone className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <a href={PHONE_HREF} className="hover:underline">{PHONE}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Discuss your ideas</p>
                    <a href={`mailto:${EMAIL}`} className="hover:underline">{EMAIL}</a>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex items-end">
                <img
                  src="/homepage-hero.png"
                  alt="Author using smartphone for book marketing"
                  className="w-full max-w-[220px] mx-auto object-contain"
                />
              </div>
            </div>

            <div className="p-6 lg:p-8 relative">
              <button
                type="button"
                onClick={closePopup}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-[#111] text-white rounded-sm hover:bg-[#333] transition-colors"
                aria-label="Close popup"
              >
                <FaXmark className="w-4 h-4" />
              </button>

              <form onSubmit={(e) => { handleFormSubmit(e); closePopup(); }} className="space-y-3 mt-2">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input type="text" name="name" placeholder="Name" required className="w-full px-3 py-2.5 border border-[#d9d9d9] rounded-md bg-white text-[#111] text-sm outline-none focus:border-[#ffc800] transition-colors" />
                  <input type="email" name="email" placeholder="Email" required className="w-full px-3 py-2.5 border border-[#d9d9d9] rounded-md bg-white text-[#111] text-sm outline-none focus:border-[#ffc800] transition-colors" />
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input type="tel" name="phone" placeholder="123-456-7890" required className="w-full px-3 py-2.5 border border-[#d9d9d9] rounded-md bg-white text-[#111] text-sm outline-none focus:border-[#ffc800] transition-colors" />
                  <select name="genre" required className="w-full px-3 py-2.5 border border-[#d9d9d9] rounded-md bg-white text-[#111] text-sm outline-none focus:border-[#ffc800] transition-colors" defaultValue="Audiobook">
                    {GENRE_OPTIONS.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
                <input type="text" name="bookTitle" placeholder="Book Title" required className="w-full px-3 py-2.5 border border-[#d9d9d9] rounded-md bg-white text-[#111] text-sm outline-none focus:border-[#ffc800] transition-colors" />
                <textarea
                  name="aboutBook"
                  placeholder="Tell Us About Your Book"
                  required
                  className="w-full min-h-[100px] resize-y px-3 py-2.5 border border-[#d9d9d9] rounded-md bg-white text-[#111] text-sm outline-none focus:border-[#ffc800] transition-colors"
                />
                <button type="submit" className="group relative inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full overflow-hidden bg-[#ffc800] text-[#111] font-bold text-sm uppercase tracking-wide transition-colors duration-300 hover:text-white">
                  <span className="absolute inset-0 bg-[#111] rounded-full scale-x-0 origin-left transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100" aria-hidden="true" />
                  <span className="relative z-10">Submit Now</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const WHY_MARKETING_SHAPE_DIVIDER_MASK = `url("data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path d="m0 4 150 40h160l190 50 190-50h160l150-40V0H0v4z" fill="black"/></svg>',
)}")`;

function WhyMarketingSection({ sectionId }: { sectionId: string }) {
  const dividerHeight = "h-[60px] sm:h-[80px] lg:h-[100px]";

  const backgroundLayers = (
    <>
      <div
        className="absolute inset-0 pointer-events-none bg-[url('/book-marketing-lp/bannerbg%20(1).webp')] bg-cover bg-[center_30%] bg-fixed bg-no-repeat"
        aria-hidden="true"
      />
      <div className="absolute inset-0 pointer-events-none bg-[#dbdcc0] opacity-[0.88]" aria-hidden="true" />
    </>
  );

  const ShapeBand = ({ className = "" }: { className?: string }) => (
    <div
      className={`relative w-full ${dividerHeight} overflow-hidden rotate-180 ${className}`}
      style={{
        WebkitMaskImage: WHY_MARKETING_SHAPE_DIVIDER_MASK,
        maskImage: WHY_MARKETING_SHAPE_DIVIDER_MASK,
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }}
      aria-hidden="true"
    >
      {backgroundLayers}
    </div>
  );

  return (
    <section className="relative mt-20" aria-labelledby={sectionId}>
      <ShapeBand className="-mb-2" />

      <div className="relative">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {backgroundLayers}
        </div>

        <div className="relative z-10 max-w-[1140px] mx-auto w-full py-10 sm:py-12 lg:py-14">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <img
                src="/book-marketing-lp/girlwithtablet.png"
                alt="Author reviewing book marketing on a tablet"
                className="absolute -top-76 left-0 z-[5] w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[400px] h-auto"
              />
            </div>

            <div>
              <h2
                id={sectionId}
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight text-[#111] mb-5 sm:mb-6"
              >
                Why Book Marketing
                <br />
                Matters
              </h2>
              <p className="text-[#111] text-sm sm:text-[15px] leading-relaxed mb-8 max-w-xl">
                Publishing a book is only half the journey — getting it read is the other. Our marketing
                programs are built to close that gap, combining audience research, targeted promotion,
                and ongoing optimization so your book doesn&apos;t just exist online, it gets discovered.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                <a
                  href="#lp-hero-form"
                  className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full overflow-hidden bg-[#ffc800] text-[#111] font-semibold text-sm transition-colors duration-300 hover:text-white normal-case"
                >
                  <span className="absolute inset-0 bg-[#111] rounded-full scale-x-0 origin-left transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100" aria-hidden="true" />
                  <span className="relative z-10">Get A Quote</span>
                </a>
                <a href={PHONE_HREF} className="flex items-center gap-3 group">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ffc800] shrink-0 group-hover:bg-[#e6b400] transition-colors">
                    <FaPhone className="w-4 h-4 text-[#111]" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-tight">
                    <span className="text-[#666] text-xs block">Call Now</span>
                    <span className="font-bold text-[#111]">{PHONE}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShapeBand className="-mt-2 rotate-360" />
    </section>
  );
}
