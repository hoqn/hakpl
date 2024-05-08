"use server";

import { cookies } from "next/headers";

export type SchoolSession = {
  regionCode: string;
  code: string;
  name: string;
};

export type ClassSession = {
  grade: string;
  classNum: string;
};

export async function setSchoolSession(values: SchoolSession) {
  cookies().set("school", encodeURIComponent(`${values.regionCode}.${values.code}.${values.name}`), {
    httpOnly: true,
    path: "/",
  });
  cookies().delete("class");
}

export async function setClassSession(values: ClassSession) {
  cookies().set("class", encodeURIComponent(`${values.grade}.${values.classNum}`), { httpOnly: true, path: "/" });
}

export async function getSchoolSession(): Promise<SchoolSession | null> {
  const raw = cookies().get("school")?.value;

  const [regionCode, code, name] = decodeURIComponent(raw || "").split(".");

  if (regionCode && code) return { regionCode, code, name };
  else return null;
}

export async function getClassSession(): Promise<ClassSession | null> {
  const raw = cookies().get("class")?.value;

  const [grade, classNum] = decodeURIComponent(raw || "").split(".");

  if (grade && classNum) return { grade, classNum };
  else return null;
}
