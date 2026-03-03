import { ReactNode } from "react";

interface PainPointCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function PainPointCard({
  icon,
  title,
  description,
}: PainPointCardProps) {
  return (
    <div className="rounded-2xl border border-soft-gray bg-white p-6">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-parchment text-living-green">
        {icon}
      </div>
      <h3 className="mb-2 font-serif text-lg text-deep-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-mid-gray">{description}</p>
    </div>
  );
}
