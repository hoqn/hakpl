import TimetableSection from "./timetable";
import NeedSchoolSet from "@/components/common/need-school-set";
import NeedClassSet from "@/components/common/need-class-set";
import { getClassSession, getSchoolSession } from "@/helpers/school-session";

export default async function Page() {
  const schoolSession = await getSchoolSession();
  const classSession = await getClassSession();

  if (!schoolSession) return <NeedSchoolSet />;
  if (!classSession) return <NeedClassSet />;

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Timetable */}
        <section className="flex-1">
          <TimetableSection />
        </section>
        {/* Meal */}
        <section className="flex-1">
          <TimetableSection />
        </section>
      </div>
    </div>
  );
}
