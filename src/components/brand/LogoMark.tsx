type LogoMarkProps = {
  className?: string;
  /** Use on dark backgrounds (e.g. footer). */
  variant?: "default" | "light";
  /** When false, hide from assistive tech when paired with visible text. */
  decorative?: boolean;
};

const defaultPalette = {
  ring: "#1b4332",
  grid: "#40916c",
  core: "#d4a373",
};

const lightPalette = {
  ring: "#ffffff",
  grid: "#95d5b2",
  core: "#d4a373",
};

export default function LogoMark({
  className,
  variant = "default",
  decorative = true,
}: LogoMarkProps) {
  const p = variant === "light" ? lightPalette : defaultPalette;

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={decorative ? true : undefined}
      role={decorative ? "presentation" : "img"}
    >
      <circle
        cx="16"
        cy="16"
        r="13.25"
        stroke={p.ring}
        strokeWidth="1.35"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="6.25"
        ry="12.75"
        stroke={p.grid}
        strokeWidth="1.65"
      />
      <path
        d="M3.25 16h25.5"
        stroke={p.grid}
        strokeWidth="1.65"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="2.35" fill={p.core} />
    </svg>
  );
}
