"use client";

import { setSchoolSession } from "@/helpers/school.server";
import { SchoolInfoResponseItem } from "@lib/neis/types/SchoolInfo";
import { useRouter } from "next/navigation";
import Button from "../ui/button";
import { useSchoolStore } from "@/providers/school-store-provider";

export default function SchoolSelectActions({ item }: { item: SchoolInfoResponseItem }) {
  const router = useRouter();

  const setSchool = useSchoolStore((s) => s.setSchool);

  const handleOnClick = () => {
    const regionCode = item.ATPT_OFCDC_SC_CODE;
    const code = item.SD_SCHUL_CODE;
    const name = item.SCHUL_NM;

    setSchool({ regionCode, code, name });
    setSchoolSession({ regionCode, code });

    router.replace("/select-class");
  };

  return (
    <Button variant="outline" onClick={handleOnClick}>
      선택
    </Button>
  );
}
