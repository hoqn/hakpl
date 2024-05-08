"use server";

import { fetchClassInfo } from "@lib/neis/api";

export async function getClassInfo(schoolRegionCode: string, schoolCode: string) {
  return fetchClassInfo({ pSize: 200, ATPT_OFCDC_SC_CODE: schoolRegionCode, SD_SCHUL_CODE: schoolCode });
}
