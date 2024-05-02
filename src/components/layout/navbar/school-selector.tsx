"use client";

import { useSchoolStore } from "@/providers/school-store-provider";
import Button from "../../ui/button";
import { useRouter } from "next/navigation";
import cn from "@/utils/cn";
import Link from "next/link";
import SchoolSelectModal, { useSchoolSelectModal } from "@/components/selection/modal";

export interface SchoolSelectorProps extends React.HTMLAttributes<HTMLButtonElement> {}

export default function SchoolSelector({ className, ...restProps }: SchoolSelectorProps) {
  const school = useSchoolStore((s) => s.school);
  const grade = useSchoolStore((s) => s.grade);
  const schoolClass = useSchoolStore((s) => s.className);

  const { open, setOpen } = useSchoolSelectModal();

  if (!school) {
    return (
      <>
        <Button variant="link" className={className} {...restProps} onClick={setOpen.bind(null, true)}>
          학교를 선택해주세요
        </Button>
        <SchoolSelectModal open={open} setOpen={setOpen} />
      </>
    );
  }

  return (
    <>
      <Button
        variant="link"
        className={cn("no-underline space-x-1", className)}
        {...restProps}
        onClick={setOpen.bind(null, true)}
      >
        <span>{school.name}</span>
        {grade && <span>{grade}학년</span>}
        {schoolClass && <span>{schoolClass}반</span>}
      </Button>
      <SchoolSelectModal open={open} setOpen={setOpen} />
    </>
  );
}
