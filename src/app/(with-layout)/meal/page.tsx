import NeedSchoolSet from "@/components/common/need-school-set";
import MealCards from "@/components/meal/meal-cards";
import { getSchoolSession } from "@/helpers/school-session";
import { convertDateTo8digits } from "@/utils/date";
import { Suspense } from "react";
import AnimateWrapper from "./animate-wrapper";
import DatePick from "./date-pick";
import { redirect } from "next/navigation";

export default async function Page({ searchParams }: { searchParams: { date?: string } }) {
  if (!searchParams.date || !/^\d{8}$/.test(searchParams.date)) {
    const dateString = convertDateTo8digits(new Date());
    redirect(`?date=${dateString}`);
  }

  const dateString = searchParams.date;
  const schoolSession = await getSchoolSession();

  if (!dateString) return null;
  if (!schoolSession) return <NeedSchoolSet />;
  
  return (
    <div className="container mx-auto px-6 overflow-x-hidden">
      <div className="flex flex-row justify-center items-center py-6 border-b">
        <DatePick />
      </div>
      <AnimateWrapper dateString={dateString}>
        <Suspense>
          <MealCards
            schoolRegionCode={schoolSession.regionCode}
            schoolCode={schoolSession.code}
            dateString={dateString}
          />
        </Suspense>
      </AnimateWrapper>
    </div>
  );
}
