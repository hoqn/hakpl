import Button from "@/components/ui/button";
import * as Popover from "@radix-ui/react-popover";
import { addDays, formatDate } from "date-fns";
import { ko } from "date-fns/locale";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { DayPicker, ClassNames as DayPickerClassNames } from "react-day-picker";

const dayPickerClassNames: DayPickerClassNames = {
  root: " paint-base-container border rounded-lg shadow",
  caption: "flex flex-row justify-between items-center p-4 border-b",
  caption_label: "font-medium text-md",
  nav_button: "paint-base-container w-8 h-8 inline-flex justify-center items-center",
  table: "m-4 border-collapse",
  day: "w-8 h-8 text-center rounded",
  day_selected: "paint-accent-fill",
};

export interface MealDatePickerProps {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}

export default function MealDatePicker({ date, setDate }: MealDatePickerProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleOnSelect = useCallback((date: Date) => {
    setOpen(false);
    setDate(date);
  }, []);

  const handleOnClickPrevDayButton = handleOnSelect.bind(null, addDays(date, -1));
  const handleOnClickNextDayButton = handleOnSelect.bind(null, addDays(date, +1));

  return (
    <Popover.Root modal open={open} onOpenChange={setOpen}>
      <div className="flex flex-row justify-center items-center gap-2">
        <Button variant="ghost" onClick={handleOnClickPrevDayButton}>
          <ChevronLeftIcon className="-ml-1 w-4 h-4" />
          이전 날
        </Button>
        <Popover.Trigger asChild>
          <Button className="min-w-44" variant="accent">
            {formatDate(date, "PPPP", { locale: ko })}
          </Button>
        </Popover.Trigger>
        <Button variant="ghost" onClick={handleOnClickNextDayButton}>
          다음 날
          <ChevronRightIcon className="-mr-1 w-4 h-4" />
        </Button>
      </div>
      <Popover.Portal>
        <Popover.Content className="">
          <DayPicker
            mode="single"
            classNames={dayPickerClassNames}
            selected={date}
            required
            onSelect={(day) => {
              day && handleOnSelect(day);
            }}
            locale={ko}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
