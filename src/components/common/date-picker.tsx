import { DayPicker } from "react-day-picker";

export interface DatePickerProps {
  date: Date | null;
}

export default function DatePicker({ date }: DatePickerProps) {
  return <DayPicker mode="single" />;
}
