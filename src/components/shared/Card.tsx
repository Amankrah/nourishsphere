import { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  children?: ReactNode;
}

export default function Card({ title, description, icon, href, children }: CardProps) {
  const content = (
    <div className="group rounded-2xl border border-soft-gray bg-white p-8 transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-parchment text-living-green">
          {icon}
        </div>
      )}
      <h3 className="mb-2 font-serif text-xl text-deep-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-mid-gray">{description}</p>
      {children}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
