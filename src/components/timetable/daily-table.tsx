"use client";

import { DailyTimetableData, TimetableSubjectData } from "@/types/timetable.types";
import { useMemo } from "react";

export interface DailyTimetableProps {
  data: DailyTimetableData;
}

export default function DailyTimetable({ data }: DailyTimetableProps) {
  const { renderedList } = useMemo(() => {
    const cells: (number | null)[] = Array.from({ length: data.maxTime - data.minTime + 1 }, () => null);

    const subjects: Record<number, TimetableSubjectData> = data.subjects.reduce((ac, subject) => {
      subject.cells.forEach((cell) => {
        if (cell.startTime < data.minTime || data.maxTime < cell.startTime) return;
        if (cell.day != null) return;
        cells[cell.startTime - data.minTime] = subject.id;
      });

      return { ...ac, [subject.id]: subject };
    }, {});

    const renderedList = cells.map((subjectId, i) => {
      const time = i + data.minTime;
      const subject = subjectId != null ? subjects[subjectId] : null;

      return (
        <tr key={time} className="">
          <th className="w-auto px-4 whitespace-nowrap text-sm">{time}교시</th>
          <td className="w-full h-12 py-2">
            {subject ? (
              <div className="px-4 py-2 paint-base-container border rounded">
                <div className="">
                  <span className="text-base font-medium">{subject.name}</span>
                </div>
                <div className="space-x-2">
                  {subject.professor && <span className="text-sm text-muted">{subject.professor} 선생님</span>}
                  {subject.place && <span className="text-sm text-muted">{subject.place} 교실</span>}
                </div>
              </div>
            ) : null}
          </td>
        </tr>
      );
    });

    return { renderedList };
  }, []);

  return <table className="table-auto w-full">{renderedList}</table>;
}
