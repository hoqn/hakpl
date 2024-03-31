"use client";

import * as Popover from "@radix-ui/react-popover";
import Button from "@/components/ui/button";
import { DayPicker, ClassNames as DayPickerClassNames } from "react-day-picker";
import { addDays, formatDate } from "date-fns";
import { ko } from "date-fns/locale";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { convert8digitsToDate, convertDateTo8digits } from "@/utils/date";
import { createUrl } from "@/utils/url";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const dayPickerClassNames: DayPickerClassNames = {
  root: " paint-base-container border rounded-lg shadow",
  caption: "flex flex-row justify-between items-center p-4 border-b",
  caption_label: "font-medium text-md",
  nav_button: "paint-base-container w-8 h-8 inline-flex justify-center items-center",
  table: "m-4 border-collapse",
  day: "w-8 h-8 text-center rounded",
  day_selected: "paint-accent-fill",
};

export default function MealDatePicker() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [date, setDate] = useState<Date>(() => {
    const dateString = searchParams.get("date");

    if (dateString && dateString.length === 8) {
      return convert8digitsToDate(dateString);
    } else {
      return new Date();
    }
  });
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("date", convertDateTo8digits(date));

    router.replace(createUrl(pathname, newSearchParams));
  }, [date]);

  const handleOnSelect = useCallback((date: Date) => {
    setOpen(false);
    setDate(date);
  }, []);

  const handleOnClickPrevDayButton = handleOnSelect.bind(null, addDays(date, -1));
  const handleOnClickNextDayButton = handleOnSelect.bind(null, addDays(date, +1));

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <div className="flex flex-row justify-center items-center gap-2">
        <Button variant="ghost" onClick={handleOnClickPrevDayButton}>
          <ChevronLeftIcon className="-ml-1 w-4 h-4" />
          이전 날
        </Button>
        <Popover.Trigger asChild>
          <Button variant="accent">{formatDate(date, "PPPP", { locale: ko })}</Button>
        </Popover.Trigger>
        <Button variant="ghost" onClick={handleOnClickNextDayButton}>
          다음 날
          <ChevronRightIcon className="-mr-1 w-4 h-4" />
        </Button>
      </div>
      <Popover.Portal>
        <Popover.Content>
          <DayPicker
            mode="single"
            classNames={dayPickerClassNames}
            selected={date}
            required
            onSelect={(day) => handleOnSelect(day!)}
            locale={ko}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
