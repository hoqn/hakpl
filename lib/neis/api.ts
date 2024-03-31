import NeisHttpClient from "./http";
import type { MealServiceDietInfoParams, MealServiceDietInfoResponseItem } from "./types";
import { ClassInfoParams, ClassInfoResponseItem } from "./types/ClassInfo";
import { SchoolInfoParams, SchoolInfoResponseItem } from "./types/SchoolInfo";
import type { MetaNeisParams } from "./types/common";
import { TimetableParams, TimetableResponseItem } from "./types/timetable";

type OptionalMeta<T extends MetaNeisParams> = Omit<T, keyof MetaNeisParams> & Partial<MetaNeisParams>;

const NEIS_API_KEY = process.env.NEIS_API_KEY!;

// Singleton
const http = new NeisHttpClient("https://open.neis.go.kr/hub", NEIS_API_KEY);

// 학교 정보

export async function fetchSchoolInfo(params: OptionalMeta<SchoolInfoParams>) {
  return http.requestList<SchoolInfoResponseItem>("schoolInfo", { method: "GET", params });
}

// 학급 정보

export async function fetchClassInfo(params: OptionalMeta<ClassInfoParams>) {
  return http.requestList<ClassInfoResponseItem>("classInfo", { method: "GET", params });
}

// 급식

export async function fetchMealServiceDiet(params: OptionalMeta<MealServiceDietInfoParams>) {
  return http.requestList<MealServiceDietInfoResponseItem>("mealServiceDietInfo", { method: "GET", params });
}

// 시간표

export async function fetchTimetable(type: "his" | "mis" | "els" | "sps", params: OptionalMeta<TimetableParams>) {
  return http.requestList<TimetableResponseItem>(`${type}Timetable`, { method: "GET", params });
}
