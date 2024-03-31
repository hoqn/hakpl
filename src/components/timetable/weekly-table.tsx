import { WeeklyTimetableData, TimetableSubjectData } from "@/types/timetable.types";
import { useMemo } from "react";

const dayStrings = ["일", "월", "화", "수", "목", "금", "토"];

export interface WeeklyTimetable {
  data: WeeklyTimetableData;
}

export default function WeeklyTimetable({ data }: WeeklyTimetable) {
  const renderedDays = useMemo(
    () => (
      <tr className="h-full">
        <th className="border-r border-b">&nbsp;</th>
        {Array.from({ length: data.maxDay - data.minDay + 1 }, (_, i) => data.minDay + i).map((day) => (
          <th key={day} className="text-xs font-bold text-center border-b">
            {dayStrings[day]}
          </th>
        ))}
      </tr>
    ),
    [data.minDay, data.maxDay]
  );

  const { cells, subjects, renderedCells } = useMemo(() => {
    const cells: (number | null)[][] = Array.from({ length: data.maxTime - data.minTime + 1 }, () =>
      Array.from({ length: data.maxDay - data.minDay + 1 }, () => null)
    );

    const subjects: Record<number, TimetableSubjectData> = data.subjects.reduce((ac, subject) => {
      subject.cells.forEach((cell) => {
        if (cell.startTime < data.minTime || data.maxTime <= cell.startTime) return;
        if (cell.day == null || cell.day < data.minDay || data.maxDay <= cell.day) return;
        cells[cell.startTime - data.minTime][cell.day - data.minDay] = subject.id;
      });

      return { ...ac, [subject.id]: subject };
    }, {});

    const renderedCells = cells.map((items, i) => {
      const time = i + data.minTime;

      return (
        <tr key={time}>
          <th className="text-xs font-bold p-2 border-r">{time}</th>
          {items.map((subjectId, j) => {
            if (subjectId == null)
              return (
                <td key={j} className="border">
                  &nbsp;
                </td>
              );

            const subject = subjects[subjectId];

            return (
              <td key={j} className="border text-center">
                <span className="text-sm">{subject.name}</span>
              </td>
            );
          })}
        </tr>
      );
    });

    return { cells, subjects, renderedCells };
  }, [data.minTime, data.maxTime, data.minDay, data.maxDay, data.subjects]);

  return (
    <div className="paint-base-container border rounded-lg overflow-hidden">
      <table className="w-full table-fixed border-collapse border border-hidden">
        <colgroup>
          <col className="w-6" />
        </colgroup>
        <thead className="w-full h-6 mx-0">{renderedDays}</thead>
        <tbody className="w-full">{renderedCells}</tbody>
      </table>
    </div>
  );
}
