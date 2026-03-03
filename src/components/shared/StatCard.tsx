"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  description: string;
  dark?: boolean;
}

export default function StatCard({ value, label, description, dark }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`rounded-2xl p-8 text-center ${
        dark
          ? "bg-white/5 border border-white/10"
          : "border border-soft-gray bg-white"
      }`}
    >
      <p
        className={`font-serif text-4xl md:text-5xl ${
          dark ? "text-harvest-gold" : "text-deep-forest"
        }`}
      >
        {value}
      </p>
      <p
        className={`mt-2 text-sm font-semibold uppercase tracking-wider ${
          dark ? "text-white/80" : "text-living-green"
        }`}
      >
        {label}
      </p>
      <p
        className={`mt-3 text-sm leading-relaxed ${
          dark ? "text-white/50" : "text-mid-gray"
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}
