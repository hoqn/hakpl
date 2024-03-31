import NeedSchoolSet from "@/components/common/need-school-set";
import Meal from "@/components/meal";
import { getSchoolSession } from "@/helpers/school.server";
import { convertDateTo8digits } from "@/utils/date";

export default async function Page({ searchParams }: { searchParams: { date?: string } }) {
  const dateString = searchParams.date || convertDateTo8digits(new Date());
  const schoolSession = await getSchoolSession();

  if (!dateString) return null;
  if (!schoolSession) return <NeedSchoolSet />;

  return <Meal dateString={dateString} schoolRegionCode={schoolSession.regionCode} schoolCode={schoolSession.code} />;
}
