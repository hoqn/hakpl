export interface TimetableSubjectData {
  id: number;
  name: string;
  professor?: string;
  place?: string;
  memo?: string;
  cells: {
    day?: number | null | undefined;
    startTime: number;
    endTime: number;
  }[];
}

export interface DailyTimetableData {
  version: 2;

  minTime: number;
  maxTime: number;

  subjects: TimetableSubjectData[];

  SCC: number; // Next Subject Code Cursor
}

export interface WeeklyTimetableData extends DailyTimetableData {
  version: 2;

  minDay: number;
  maxDay: number;
}
