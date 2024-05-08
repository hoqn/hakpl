import SchoolClassList from "@/components/selection/class-list";
import { getSchoolSession } from "@/helpers/school-session";
import { redirect } from "next/navigation";
import { getClassInfo } from "./actions";

export default async function SelectClassBody({}) {
  const schoolSession = await getSchoolSession();

  if (!schoolSession) redirect("/select/school");

  const data = await getClassInfo(schoolSession.regionCode, schoolSession.code);

  return (
    <div className="max-w-screen-sm mx-auto paint-surface-container">
      <SchoolClassList items={data.items} />
    </div>
  );
}
