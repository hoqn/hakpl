"use client";

import MealDatePicker from "@/components/meal/meal-date-picker";
import { convert8digitsToDate, convertDateTo8digits } from "@/utils/date";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export default function DatePick() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const dateString = searchParams.get("date");
  const date = dateString ? convert8digitsToDate(dateString) : new Date();

  const updateDate: Dispatch<SetStateAction<Date>> = (newDate) => {
    newDate = typeof newDate === "function" ? newDate(date) : newDate;

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("date", convertDateTo8digits(newDate));

    router.replace(`${pathname}?${newSearchParams.toString()}`);
  };

  return <MealDatePicker date={date} setDate={updateDate} />;
}
