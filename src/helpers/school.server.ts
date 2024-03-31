"use server";

import { cookies } from "next/headers";

export async function getSchoolSession() {
  const rawString = cookies().get("school")?.value;

  if (!rawString) return null;

  const [regionCode, code] = rawString.split(":");

  return { code, regionCode };
}

export async function getClassSession() {
  const rawString = cookies().get("class")?.value;

  if (!rawString) return null;

  const [grade, className] = rawString.split(":");

  return { grade, className };
}

export async function setSchoolSession(values: { code: string; regionCode: string }) {
  cookies().set("school", `${values.regionCode}:${values.code}`);
  cookies().delete("class");
}

export async function setClassSession(values: { grade: string; className: string }) {
  cookies().set("class", `${values.grade}:${values.className}`);
}
