import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  icon?: React.ElementType | React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
}

export default function Button({
  text,
  icon: Icon,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full text-[15px] font-semibold tracking-wide cursor-pointer transition-all duration-300 transform active:scale-95 group focus:outline-none select-none";

  const variantStyles = {
    primary:
      "bg-primary hover:bg-primary-hover text-white shadow-md hover:shadow-xl hover:-translate-y-0.5",
    secondary:
      "bg-black hover:bg-primary text-white shadow-xs hover:shadow-md hover:-translate-y-0.5",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-xs hover:shadow-md hover:-translate-y-0.5",
    dark:
      "bg-black hover:bg-gray-800 text-white shadow-md hover:shadow-xl hover:-translate-y-0.5",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const renderIcon = () => {
    if (!Icon) return null;
    if (typeof Icon === "function" || (typeof Icon === "object" && Icon !== null && "render" in (Icon as any))) {
      const Component = Icon as React.ElementType;
      return <Component className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 shrink-0" />;
    }
    return <span className="transition-transform duration-300 group-hover:scale-110 shrink-0">{Icon as React.ReactNode}</span>;
  };

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={combinedClasses}>
        {renderIcon()}
        <span>{text}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {renderIcon()}
      <span>{text}</span>
    </button>
  );
}
