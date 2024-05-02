"use client";

import { convert8digitsToDate } from "@/utils/date";
import { compareAsc } from "date-fns";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const animMealCards: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export default function AnimateWrapper({ children, dateString }: { children: React.ReactNode; dateString: string }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={dateString}
        className="py-6 flex flex-col lg:flex-row justify-center gap-4"
        variants={animMealCards}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
