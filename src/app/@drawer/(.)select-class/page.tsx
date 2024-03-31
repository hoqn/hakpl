import SchoolClassList from "@/components/select-school/class-list";
import SchoolList from "@/components/select-school/school-list";
import { getSchoolSession } from "@/helpers/school.server";
import { fetchClassInfo, fetchSchoolInfo } from "@lib/neis/api";

export default async function Page() {
  const school = await getSchoolSession();

  if (!school) throw new Error("잘못된 접근이에요.");

  const res = await fetchClassInfo({ pSize: 200, ATPT_OFCDC_SC_CODE: school.regionCode, SD_SCHUL_CODE: school.code });

  return (
    <div className="max-w-screen-sm mx-auto paint-surface-container">
      <SchoolClassList items={res.items} />
    </div>
  );
}
