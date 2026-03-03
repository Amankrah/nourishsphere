import { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "dark";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-living-green text-white hover:bg-living-green/90",
  secondary:
    "border border-living-green text-living-green hover:bg-living-green/5",
  dark: "bg-deep-forest text-white hover:bg-deep-forest/90",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={classes}>
      {children}
    </button>
  );
}
