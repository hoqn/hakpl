import DailyTimetable from "@/components/timetable/daily-table";
import WeeklyTimetable from "@/components/timetable/weekly-table";
import { getClassSession, getSchoolSession } from "@/helpers/school.server";
import { DailyTimetableData, TimetableSubjectData } from "@/types/timetable.types";
import { fetchTimetable } from "@lib/neis/api";
import { Suspense } from "react";

export default async function TimetableSection() {
  const school = await getSchoolSession();
  const schoolClass = await getClassSession();

  if (!school || !schoolClass) return null;

  const res = await fetchTimetable("his", {
    pSize: 200,
    ATPT_OFCDC_SC_CODE: school.regionCode,
    SD_SCHUL_CODE: school.code,
    GRADE: schoolClass.grade,
    CLASS_NM: schoolClass.className,
    ALL_TI_YMD: "20240328",
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

  return (
    <div className="">
      <WeeklyTimetable
        data={{
          minDay: 1,
          maxDay: 5,
          minTime: 1,
          maxTime: 7,
          SCC: 1,
          version: 2,
          subjects: [
            {
              id: 1,
              name: "테스트과목",
              cells: [{ day: 1, startTime: 4, endTime: 5 }],
            },
          ],
        }}
      />
      <DailyTimetable data={dailyTimetableData} />
    </div>
  );
}
