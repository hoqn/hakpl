import DailyTimetable from "@/components/timetable/daily-table";
import { getClassSession, getSchoolSession } from "@/helpers/school-session";
import { DailyTimetableData, TimetableSubjectData } from "@/types/timetable.types";
import { convertDateTo8digits } from "@/utils/date";
import { fetchTimetable } from "@lib/neis/api";

export default async function TimetableSection({ date }: { date: Date }) {
  const dateString = convertDateTo8digits(date);

  const school = await getSchoolSession();
  const schoolClass = await getClassSession();

  if (!school || !schoolClass) return null;

  const res = await fetchTimetable("his", {
    pSize: 200,
    ATPT_OFCDC_SC_CODE: school.regionCode,
    SD_SCHUL_CODE: school.code,
    GRADE: schoolClass.grade,
    CLASS_NM: schoolClass.classNum,
    ALL_TI_YMD: dateString,
  });

  // RES -> Daily
  const dailyTimetableData: DailyTimetableData = {
    minTime: 99,
    maxTime: 0,
    SCC: 1,
    version: 2,
    subjects: [],
  };

  res.items.forEach((it) => {
    let subjectIndex = dailyTimetableData.subjects.findIndex(
      (existed) => existed.name == it.ITRT_CNTNT.trim() && existed.place == it.CLRM_NM
    );

    const startTime = parseInt(it.PERIO);
    const endTime = startTime;

    if (subjectIndex >= 0) {
      // 기존에 있음
      dailyTimetableData.subjects[subjectIndex].cells.push({ startTime, endTime });
    } else {
      // 추가
      const subject: TimetableSubjectData = {
        id: dailyTimetableData.SCC++,
        name: it.ITRT_CNTNT,
        place: it.CLRM_NM,
        cells: [{ startTime, endTime }],
      };

      dailyTimetableData.subjects.push(subject);
    }

    // minTime, maxTime 조정
    if (startTime < dailyTimetableData.minTime) dailyTimetableData.minTime = startTime;
    if (endTime > dailyTimetableData.maxTime) dailyTimetableData.maxTime = endTime;
  });

  if (dailyTimetableData.subjects.length == 0) {
    return <div className="text-center">등록된 시간표가 없어요</div>;
  }

  return <DailyTimetable data={dailyTimetableData} />;
}
