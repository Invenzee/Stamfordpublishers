"use client";

import React from "react";

export interface ProcessStep {
  number: string;
  title: React.ReactNode;
}

const defaultSteps: ProcessStep[] = [
  {
    number: "01",
    title: (
      <>
        Manuscript Review
        <br />
        & Assessment
      </>
    ),
  },
  {
    number: "02",
    title: (
      <>
        Editing &
        <br />
        Structural
        <br />
        Formatting
      </>
    ),
  },
  {
    number: "03",
    title: "Book Cover Design",
  },
  {
    number: "04",
    title: (
      <>
        Publishing &
        <br />
        Release
      </>
    ),
  },
  {
    number: "05",
    title: "Global Distribution",
  },
  {
    number: "06",
    title: (
      <>
        Marketing &
        <br />
        Promotional
        <br />
        Support
      </>
    ),
  },
];

export interface PublishingProcessSectionProps {
  steps?: ProcessStep[];
  className?: string;
}

export default function PublishingProcessSection({
  steps = defaultSteps,
  className = "",
}: PublishingProcessSectionProps) {
  return (
    <section
      className={`uc-process-section ${className}`}
      aria-label="Our publishing process"
    >
      <ul className="uc-process-list">
        {steps.map((step) => (
          <li key={step.number}>
            <h5 className="uc-step-title">{step.title}</h5>
            <span className="uc-step-dots" aria-hidden="true" />
            <div className="uc-step-number">{step.number}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
