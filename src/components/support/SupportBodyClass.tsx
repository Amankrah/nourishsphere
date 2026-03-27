"use client";

import { useEffect, type ReactNode } from "react";

export default function SupportBodyClass({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.body.classList.add("support-print-mode");
    return () => document.body.classList.remove("support-print-mode");
  }, []);
  return <>{children}</>;
}
