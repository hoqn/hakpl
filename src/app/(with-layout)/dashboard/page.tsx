import TimetableSection from "./timetable";
import NeedSchoolSet from "@/components/common/need-school-set";
import NeedClassSet from "@/components/common/need-class-set";
import { getClassSession, getSchoolSession } from "@/helpers/school-session";
import DatePick from "./date-pick";
import { redirect } from "next/navigation";
import { convert8digitsToDate, convertDateTo8digits } from "@/utils/date";
import AnimateWrapper from "./animate-wrapper";

export default async function Page({ searchParams }: { searchParams: { date?: string } }) {
  if (!searchParams.date || !/^\d{8}$/.test(searchParams.date)) {
    const dateString = convertDateTo8digits(new Date());
    redirect(`?date=${dateString}`);
  }

  const schoolSession = await getSchoolSession();
  const classSession = await getClassSession();

  if (!schoolSession) return <NeedSchoolSet />;
  if (!classSession) return <NeedClassSet />;

  const dateString = searchParams.date;
  const date = convert8digitsToDate(dateString);

  if (!dateString) return null;
  if (!schoolSession) return <NeedSchoolSet />;
  if (!classSession) return <NeedClassSet />;

  return (
    <div className="container mx-auto px-6 overflow-x-hidden">
      <div className="flex flex-row justify-center items-center py-6 border-b">
        <DatePick initialDate={date} />
      </div>
      <section className="flex-1">
        <AnimateWrapper dateString={dateString}>
          <TimetableSection date={date} />
        </AnimateWrapper>
      </section>
    </div>
  );
}
