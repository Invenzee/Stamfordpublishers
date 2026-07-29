import React from "react";

export interface BlobShapeProps {
  color?: string;
  className?: string;
}

export default function BlobShape({
  color = "#59101B",
  className = "",
}: BlobShapeProps) {
  return (
    <div
      className={`absolute inset-0 animate-blob-float drop-shadow-[0_8px_24px_rgba(89,16,27,0.35)] ${className}`}
      style={{
        backgroundColor: color,
        WebkitMaskImage: "url('/blob.webp')",
        maskImage: "url('/blob.webp')",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
      aria-hidden="true"
    />
  );
}
