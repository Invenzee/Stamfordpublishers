import Link from "next/link";
import LegalDocumentPage from "@/components/LegalDocumentPage";

const contactText = (
  <>
    For questions about these Terms &amp; Conditions, please contact Stamford Publishers at{" "}
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

const termsSections = [
  {
    title: "Copyrights",
    body: "Our company philosophy is to grant you ownership of the content we deliver under the terms below. The final product we create carries no ownership claim from Stamford Publishers, and you may use it in the way you see fit once all agreed payments have been completed.",
  },
  {
    title: "Payment",
    body: "We require full payment in advance for any services we provide, with the client being partly responsible for any applicable taxes, processing fees, or related charges.",
  },
  {
    title: "Revision",
    paragraphs: [
      "Our standard revision period is 14 days. This time limit may be extended only in exceptional circumstances at the discretion of Stamford Publishers.",
      "The following categories apply to revision turnaround time:",
    ],
    bullets: [
      "Revision turnaround time for projects requiring 24-hour urgency shall be 24 hours.",
      "Projects requiring 24 to 48 hours of speed must have a 48-hour turnaround time for revisions.",
      "Revision turnaround time shall be 72 hours for projects requiring more than 48 hours.",
    ],
  },
  {
    title: "Conditions for a Project",
    body: "Before starting the project, Stamford Publishers conducts one-on-one communication with each client to review project requirements. Based on the terms and conditions agreed upon at the beginning of the project, we make sure to communicate any changes, differences, or service-related updates clearly during the process.",
  },
  {
    title: "Refund Procedure",
    paragraphs: [
      "Your refund will be handled after the deduction of transactional charges, which are $150 or 10% of the purchase price, whichever is smaller, as long as you request a full refund before submitting your work.",
      "After the purchase but before 90 calendar days have passed, no refunds will be issued.",
      'Once the order is paid for, we do not automatically refund the services. Therefore, the client is not entitled to a refund for "Change of Mind," and Stamford Publishers is not required to offer one.',
      "75% of the purchase price must be paid once your manuscript has been submitted but before design work starts. Design work includes, but is not limited to, formatting, editing, image arrangement, corrections, resizing, and pre-production.",
      "50% of the purchase price applies once design work starts but before final approval.",
      "No refund will be made after your final approval of the work.",
      "Within 7 days following the completion of your order, you may send us a refund request if you are unhappy with our services. We may offer a percentage-based refund based on the status of the project and our revision policies. However, refund requests must be submitted within the required window to satisfy both parties.",
    ],
  },
  {
    title: "Terms of Use",
    paragraphs: [
      "The services offered by Stamford Publishers are included in the information provided on our website. This information is not restricted; however, we do not provide any additional recommendations, certifications, warranties, or guarantees unless stated in writing.",
      "Our business disclaims all liability for any losses or damages resulting from errors, omissions, or careless mistakes made on this website.",
      "Our business will not be held responsible for any performance issues, operational delays, omissions, disruptions, communication gaps, theft, data loss, or unauthorized access to information on the website.",
      "By accepting our terms and conditions, you agree to indemnify and hold Stamford Publishers and its subsidiaries harmless from and against any third-party claims, liabilities, losses, damages, or expenses resulting from or connected to your access to or use of the website and services supplied, your violation of these Terms of Use, or your violation of any third-party right, including without limitation any intellectual property right, publicity, confidentiality, property, or privacy right.",
      "No partnership, joint venture, or employment relationship between Stamford Publishers and its clients is created by any agreement made through the website.",
    ],
  },
  {
    title: "Email & Mobile Phone Policy — Consent and Usage",
    body: "By providing your email address and/or mobile phone number, you consent to receive communication from Stamford Publishers. This may include transactional messages, periodic updates about your service or project, newsletters, service delivery messages, design attachments, project updates, and revision updates.",
  },
  {
    title: "Email & Mobile Phone Policy — Carrier Charges",
    body: "Standard messaging and data rates may apply. Please consult your mobile service carrier for details.",
  },
  {
    title: "Email & Mobile Phone Policy — Stop & Unsubscribe",
    paragraphs: [
      "If you wish to stop receiving emails or mobile communications, you can unsubscribe at any time.",
    ],
    bullets: [
      'For emails, click the "unsubscribe" link located at the bottom of any email you receive from us.',
      'For mobile communications, reply "STOP," "Unsub," or "Unsubscribe" to any SMS message you receive from us. SMS messages will be stopped right away.',
    ],
  },
  {
    title: "Email & Mobile Phone Policy — Frequency of Communication",
    body: "We strive to limit the frequency of our communications to a reasonable level. However, there may be exceptions during special project updates or urgent notifications.",
  },
  {
    title: "Email & Mobile Phone Policy — Security of Information",
    body: "Your email address and mobile phone number will be kept confidential and will not be shared with third parties without your explicit consent, except as required by law.",
  },
  {
    title: "Email & Mobile Phone Policy — Changes to Policy",
    body: "Stamford Publishers reserves the right to modify this policy at any time. Any changes will be posted on our website, and it is your responsibility to review these changes.",
  },
  {
    title: "SMS and Email Terms — Overview",
    body: "By subscribing to our SMS and email communication services, you agree to receive text messages and emails from Stamford Publishers. These communications may include updates, promotional content, notifications, and other information related to our services. Your participation in these programs is subject to the following Terms & Conditions, in compliance with 10DLC TCR regulations for the US and Canada.",
  },
  {
    title: "SMS and Email Terms — Opt-In Process",
    paragraphs: [
      'SMS Subscription: When you provide your mobile number on our website, you may receive a confirmation text message asking for your consent to subscribe to our SMS service. By replying to the confirmation message with the designated keyword, such as "YES," you agree to opt in to receive SMS messages from Stamford Publishers.',
      "Email Subscription: By providing your email address and selecting the option to receive communications from us, you consent to receiving emails related to our services, promotions, and updates.",
    ],
  },
  {
    title: "SMS and Email Terms — Message Frequency",
    paragraphs: [
      "SMS: The number of SMS messages you receive may vary based on your communication requirements with our team. This allows us to provide timely updates and respond to your needs effectively.",
      "Email: Emails will be sent periodically and may vary in frequency depending on the type of communication and your preferences.",
    ],
  },
  {
    title: "SMS and Email Terms — Opt-Out Process",
    paragraphs: [
      'SMS Opt-Out: You can opt out of our SMS communications at any time by replying to any of our messages with the word "STOP." Upon receipt of your opt-out request, we will send a confirmation message, and you will no longer receive SMS messages from us.',
      "Email Opt-Out: To unsubscribe from our email communications, click the \"unsubscribe\" link provided at the bottom of any email we send. You can also contact us directly at info@stamfordpublishers.com to request removal from our email list.",
    ],
  },
  {
    title: "SMS and Email Terms — Cost",
    paragraphs: [
      "SMS: Message and data rates may apply based on your mobile carrier plan. Please check with your carrier for details.",
      "Email: There is no charge for email communications.",
    ],
  },
  {
    title: "SMS and Email Terms — Privacy Policy",
    content: (
      <p>
        Your privacy is important to us. Please review our{" "}
        <Link
          href="/privacy-policy"
          className="text-primary font-semibold hover:text-primary-hover transition-colors"
        >
          Privacy Policy
        </Link>{" "}
        for detailed information on how we collect, use, and protect your personal information.
      </p>
    ),
  },
  {
    title: "SMS and Email Terms — Support",
    content: (
      <p>
        If you have any questions or need assistance with our SMS or email services, please contact
        our support team at{" "}
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
      </p>
    ),
  },
  {
    title: "SMS and Email Terms — Modifications",
    body: "We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting to our website. Continued use of our SMS and email services after any changes indicates your acceptance of the new terms.",
  },
  {
    title: "SMS and Email Terms — Compliance",
    body: "We adhere to the rules and regulations set forth by the 10DLC TCR, The Campaign Registry, and comply with all relevant laws and guidelines for SMS and email marketing in the US and Canada. Your participation in our messaging programs is subject to these regulations.",
  },
];

const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms & Conditions",
  url: "https://stamfordpublishers.com/terms-and-conditions",
  description:
    "Terms and Conditions for Stamford Publishers publishing, editing, design, audiobook, marketing, and related services.",
  publisher: {
    "@type": "Organization",
    name: "Stamford Publishers",
    email: "info@stamfordpublishers.com",
    telephone: "+1-562-573-2551",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalDocumentPage
      breadcrumbLabel="Terms & Conditions"
      pageTitle="Terms &"
      titleHighlight="Conditions"
      intro="Welcome to Stamford Publishers. By accessing our website or using our publishing, writing, editing, design, audiobook, marketing, or related services, you agree to the following Terms & Conditions. Please read them carefully before placing an order or submitting any project information."
      sections={termsSections}
      contactText={contactText}
      schema={termsSchema}
      ariaLabel="Terms and conditions content"
    />
  );
}
