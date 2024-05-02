"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={true}>
      <Fragment key={pathname}>{children}</Fragment>
    </AnimatePresence>
  );
}
