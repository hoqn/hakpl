"use client";

import { setClassSession } from "@/helpers/school-session";
import Button from "../ui/button";
import { useRouter } from "next/navigation";
// import { setClassSession } from "@/helpers/school.server";

export default function SchoolClassListItem({ grade, classNum }: { grade: string; classNum: string }) {
  const router = useRouter();

  const handleOnClick = async () => {
    await setClassSession({ grade, classNum });

    router.replace("/");
  };

  return (
    <Button variant="outline" onClick={handleOnClick}>
      <span>{grade}학년</span>
      <span className="ml-2">{classNum}반</span>
    </Button>
  );
}
