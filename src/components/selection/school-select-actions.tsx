"use client";

import { SchoolInfoResponseItem } from "@lib/neis/types/SchoolInfo";
import { useRouter } from "next/navigation";
import Button from "../ui/button";
import { useCallback } from "react";
import { setSchoolSession } from "@/helpers/school-session";

export default function SchoolSelectActions({ item }: { item: SchoolInfoResponseItem }) {
  const router = useRouter();

  const handleOnClick = useCallback(async () => {
    const regionCode = item.ATPT_OFCDC_SC_CODE;
    const code = item.SD_SCHUL_CODE;
    const name = item.SCHUL_NM;

    setSchoolSession({ regionCode, code, name });

    router.replace("/select/class");
  }, [item.SD_SCHUL_CODE]);

  return (
    <Button variant="outline" onClick={handleOnClick}>
      선택
    </Button>
  );
}
