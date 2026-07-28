import LegalDocumentPage from "@/components/LegalDocumentPage";

const contactText = (
  <>
    For questions about this Privacy Policy, please contact Stamford Publishers at{" "}
    <a
      href="mailto:info@stamfordpublishers.com"
      className="text-primary font-semibold hover:text-primary-hover transition-colors"
    >
      info@stamfordpublishers.com
    </a>{" "}
    or call us at{" "}
    <a
      href="tel:+15625732551"
      className="text-primary font-semibold hover:text-primary-hover transition-colors"
    >
      +1 562 573 2551
    </a>
    .
  </>
);

const privacySections = [
  {
    title: "Services",
    body: "Stamford Publishers provides professional publishing services for authors, including manuscript editing, formatting, cover design, audiobook production, publishing setup, distribution support, ghostwriting, and book marketing. All services are offered as paid, project-based solutions and are delivered according to the selected package, project scope, and agreed requirements.",
  },
  {
    title: "Client Responsibility",
    body: "The client is responsible for providing accurate project details, manuscript files, reference materials, approvals, and any required information needed to complete the project. Delays in providing required materials may affect the project timeline.",
  },
  {
    title: "Project Scope",
    body: "Each project begins based on the services selected and the requirements shared by the client. Any additional work outside the original project scope may require extra charges and a revised timeline. Stamford Publishers will communicate any major scope changes before proceeding.",
  },
  {
    title: "Payment Terms",
    body: "Full or agreed payment must be made before work begins. The client may also be responsible for applicable taxes, transaction fees, or processing charges. Work will only proceed once the required payment has been received and confirmed.",
  },
  {
    title: "Revisions",
    body: "Stamford Publishers offers revisions based on the selected service package and agreed project scope. Revision requests must be submitted within the allowed revision period. Revisions must relate to the original project requirements and may not include a completely new direction, new concept, or additional service not originally agreed upon.",
  },
  {
    title: "Turnaround Time",
    body: "Project timelines may vary depending on the type of service, project size, client response time, revision requirements, and overall workload. Stamford Publishers makes every effort to complete projects within the estimated timeline, but delays may occur due to changes in scope, late client feedback, or technical requirements.",
  },
  {
    title: "Refund Policy",
    body: "Refund requests are reviewed based on the status of the project and the services already completed. Once work has started, partial or full refunds may not be available depending on the progress made. No refund will be issued after final approval, delivery of completed work, or completion of the agreed service. Transactional charges may be deducted from any approved refund.",
  },
  {
    title: "Ownership & Copyright",
    body: "Once full payment has been completed, the client retains ownership of the final approved content created for their project. Stamford Publishers does not claim ownership over the final approved manuscript, design, or completed publishing materials delivered to the client, unless otherwise agreed in writing.",
  },
  {
    title: "Content Accuracy",
    body: "The client is responsible for reviewing and approving all final content, including spelling, grammar, facts, names, pricing, legal information, and publishing details. Stamford Publishers is not responsible for errors or omissions after the client has approved the final work.",
  },
  {
    title: "Publishing & Distribution",
    body: "Stamford Publishers may assist with publishing setup and distribution preparation across selected platforms. However, approval, acceptance, processing time, availability, and final publishing decisions may depend on third-party platforms. Stamford Publishers does not control third-party publishing platforms, retailers, or distribution networks.",
  },
  {
    title: "Marketing Services",
    body: "Book marketing services are provided to support visibility, promotion, and audience outreach. Stamford Publishers does not guarantee book sales, rankings, reviews, media coverage, bestseller status, or specific financial results from marketing campaigns.",
  },
  {
    title: "Third-Party Platforms",
    body: "Some services may involve third-party tools, platforms, printers, distributors, advertising networks, or publishing marketplaces. Stamford Publishers is not responsible for policy changes, delays, account issues, rejections, fees, or technical problems caused by third-party platforms.",
  },
  {
    title: "Communication Consent",
    body: 'By submitting your contact details, you agree that Stamford Publishers may contact you by phone, email, or SMS regarding your inquiry, project, service updates, revisions, promotions, or support. Message and data rates may apply for SMS communication. You may opt out at any time by replying "STOP" or using the unsubscribe option where available.',
  },
  {
    title: "Limitation of Liability",
    body: "Stamford Publishers will not be held liable for indirect losses, business losses, lost profits, publishing delays, third-party platform issues, data loss, or damages resulting from the use of our website or services. Our liability is limited to the amount paid for the specific service in question.",
  },
  {
    title: "No Guarantee",
    body: "Stamford Publishers provides professional services based on the selected package and project requirements. We do not guarantee publishing acceptance, sales performance, reader response, bestseller status, media placement, reviews, or specific commercial outcomes.",
  },
  {
    title: "Confidentiality",
    body: "Stamford Publishers respects client confidentiality and handles project materials with care. Client manuscripts, personal information, and project details will not be intentionally shared with unauthorized third parties, except when required for service delivery or by law.",
  },
  {
    title: "Changes to Terms",
    body: "Stamford Publishers reserves the right to update or modify these Terms & Conditions at any time. Any changes will be posted on our website. Continued use of our website or services after updates means you accept the revised terms.",
  },
];

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  url: "https://stamfordpublishers.com/privacy-policy",
  description:
    "Privacy Policy for Stamford Publishers publishing, editing, design, audiobook, marketing, and related author services.",
  publisher: {
    "@type": "Organization",
    name: "Stamford Publishers",
    email: "info@stamfordpublishers.com",
    telephone: "+1-562-573-2551",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      breadcrumbLabel="Privacy Policy"
      pageTitle="Privacy"
      titleHighlight="Policy"
      intro="Welcome to Stamford Publishers. By accessing our website or using our publishing, writing, editing, design, audiobook, marketing, or related services, you agree to the policies outlined below. Please read them carefully before placing an order or submitting any project information."
      sections={privacySections}
      contactText={contactText}
      schema={privacySchema}
      ariaLabel="Privacy policy content"
    />
  );
}
