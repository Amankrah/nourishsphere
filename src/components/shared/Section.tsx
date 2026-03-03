import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  dark?: boolean;
  children: ReactNode;
}

export default function Section({ id, className = "", dark, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`px-6 py-16 md:py-24 ${
        dark ? "bg-deep-forest text-white" : ""
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
