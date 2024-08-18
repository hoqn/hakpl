"use client";

import MealDatePicker from "@/components/meal/meal-date-picker";
import { convertDateTo8digits } from "@/utils/date";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export default function DatePick({ initialDate }: { initialDate: Date }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateDate: Dispatch<SetStateAction<Date>> = (newDate) => {
    newDate = typeof newDate === "function" ? newDate(initialDate) : newDate;

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("date", convertDateTo8digits(newDate));

    router.replace(`${pathname}?${newSearchParams.toString()}`);
  };

  return <MealDatePicker date={initialDate} setDate={updateDate} />;
}
