import MealCards from "@/components/meal/meal-cards";
import MealDatePicker from "@/components/meal/meal-date-picker";
import { convert8digitsToDate } from "@/utils/date";
import { Suspense } from "react";

export interface MealProps {
  dateString: string;
  schoolRegionCode: string;
  schoolCode: string;
}

export default function Meal({ dateString, schoolRegionCode, schoolCode }: MealProps) {
  // const schoolRegionCode = "P10";
  // const schoolCode = "8321097";
  const date = convert8digitsToDate(dateString);

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-row justify-center items-center py-6 border-b">
        <Suspense>
          <MealDatePicker />
        </Suspense>
      </div>
      <div className="py-6 flex flex-col lg:flex-row justify-center gap-4">
        <Suspense>
          <MealCards
            key={`${dateString}:${schoolCode}`}
            schoolRegionCode={schoolRegionCode}
            schoolCode={schoolCode}
            date={date}
          />
        </Suspense>
      </div>
    </div>
  );
}
