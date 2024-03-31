"use client";

import { useCallback, useState } from "react";

export function useDate() {
  const [date, setDate] = useState<Date>(new Date());

  const updateDate = useCallback(() => {

  }, []);

  return { date, updateDate };
}