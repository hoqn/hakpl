import Button from "@/components/ui/button";
import cn from "@/utils/cn";
import { addDays, formatDate } from "date-fns";
import { ko } from "date-fns/locale";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { DayPicker, ClassNames as DayPickerClassNames } from "react-day-picker";
import { Drawer } from "vaul";

const dayPickerClassNames: DayPickerClassNames = {
  root: "paint-base-container",
  caption: "flex flex-row justify-between items-center p-4 border-b",
  caption_label: "font-medium text-md",
  nav_button: "paint-base-container w-8 h-8 inline-flex justify-center items-center",
  table: "mx-auto m-4 border-collapse",
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
    <Drawer.Root modal open={open} onOpenChange={setOpen} direction="top">
      <div className="flex flex-row justify-center items-center gap-2">
        <Button variant="ghost" onClick={handleOnClickPrevDayButton}>
          <ChevronLeftIcon className="-ml-1 w-4 h-4" />
          이전 날
        </Button>
        <Drawer.Trigger asChild>
          <Button className="min-w-44" variant="accent">
            {formatDate(date, "PPPP", { locale: ko })}
          </Button>
        </Drawer.Trigger>
        <Button variant="ghost" onClick={handleOnClickNextDayButton}>
          다음 날
          <ChevronRightIcon className="-mr-1 w-4 h-4" />
        </Button>
      </div>
      <Drawer.Portal>
        <Drawer.Content asChild>
          <div
            className={cn(
              "fixed z-50 top-4 inset-x-4 mx-auto max-w-sm flex flex-col max-h-[96%]",
              "paint-surface-container rounded-2xl overflow-hidden shadow-lg"
            )}>
            <DayPicker
              mode="single"
              classNames={dayPickerClassNames}
              selected={date}
              required
              onSelect={(day) => {
                day && handleOnSelect(day);
              }}
              locale={ko} />
          </div>
        </Drawer.Content>
        <Drawer.Overlay className="fixed z-40 inset-0 bg-black/50" />
      </Drawer.Portal>
    </Drawer.Root>
  );
}
