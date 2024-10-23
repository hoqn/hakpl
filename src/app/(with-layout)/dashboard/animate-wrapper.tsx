"use client";

import { convert8digitsToDate } from "@/utils/date";
import { AnimatePresence, Transition, Variants, motion } from "framer-motion";
import { useMemo, useState } from "react";

const animMealCards: Variants = {
  in: (dir: 1 | -1) => ({
    opacity: 0,
    translateX: dir > 0 ? 32 : -32,
  }),
  out: (dir: 1 | -1) => ({
    opacity: 0,
    translateX: dir > 0 ? -32 : 32,
  }),
  active: {
    opacity: 1,
    translateX: 0,
  },
};

const transitionMealCards: Transition = {
  duration: 0.25,
  bounce: 0,
  ease: "circInOut",
};

export default function AnimateWrapper({ children, dateString }: { children: React.ReactNode; dateString: string }) {
  const [prevDate, setPrevDate] = useState(convert8digitsToDate(dateString));

  const direction = useMemo(() => {
    const _prevDate = prevDate;
    const _currDate = convert8digitsToDate(dateString);

    setPrevDate(_currDate);

    return _prevDate < _currDate ? 1 : -1;
  }, [dateString]);

  return (
    <AnimatePresence mode="wait" initial={false} custom={direction}>
      <motion.div
        key={dateString}
        className="py-6 w-full max-w-screen-sm mx-auto"
        variants={animMealCards}
        custom={direction}
        initial="in"
        animate="active"
        exit="out"
        transition={transitionMealCards}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
