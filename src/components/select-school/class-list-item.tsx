"use client";

import { useSchoolStore } from "@/providers/school-store-provider";
import Button from "../ui/button";
import { useRouter } from "next/navigation";
import { setClassSession } from "@/helpers/school.server";

export default function SchoolClassListItem({ grade, className }: { grade: string; className: string }) {
  const router = useRouter();

  const setGradeClass = useSchoolStore((s) => s.setGradeClass);

  const handleOnClick = () => {
    setGradeClass(grade, className);
    setClassSession({ grade, className });

    router.replace("/");
    router.refresh();
  };

  return (
    <Button variant="outline" onClick={handleOnClick}>
      <span>{grade}학년</span>
      <span className="ml-2">{className}반</span>
    </Button>
  );
}
