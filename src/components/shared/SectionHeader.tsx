interface SectionHeaderProps {
  label: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeader({
  label,
  heading,
  description,
  align = "left",
  dark,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "";

  return (
    <div className={`mb-12 ${alignClass}`}>
      <p
        className={`section-label mb-3 ${
          dark ? "text-harvest-gold" : "text-living-green"
        }`}
      >
        {label}
      </p>
      <h2
        className={`font-serif text-3xl md:text-4xl ${
          dark ? "text-white" : "text-deep-ink"
        }`}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-white/70" : "text-mid-gray"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
