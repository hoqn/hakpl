"use client";

import { useSchoolStore } from "@/providers/school-store-provider";
import Button from "../../ui/button";
import { useRouter } from "next/navigation";
import cn from "@/utils/cn";

export interface SchoolSelectorProps extends React.HTMLAttributes<HTMLButtonElement> {}

export default function SchoolSelector({ className, ...restProps }: SchoolSelectorProps) {
  const router = useRouter();

  const school = useSchoolStore((s) => s.school);
  const grade = useSchoolStore((s) => s.grade);
  const schoolClass = useSchoolStore((s) => s.className);

  const handleOnClick = router.push.bind(null, "/select-school", {});

  if (school) {
    return (
      <Button variant="link" className={cn("no-underline space-x-1", className)} {...restProps} onClick={handleOnClick}>
        <span>{school.name}</span>
        {grade && <span>{grade}학년</span>}
        {schoolClass && <span>{schoolClass}반</span>}
      </Button>
    );
  } else {
    return (
      <Button variant="link" className={className} {...restProps} onClick={handleOnClick}>
        학교를 선택해주세요
      </Button>
    );
  }
}
