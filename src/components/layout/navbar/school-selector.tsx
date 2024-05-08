"use client";

import SchoolSelectModal, { useSchoolSelectModal } from "@/components/selection/modal";
import { useClassSession, useSchoolSession } from "@/providers/school-session-provider";
import cn from "@/utils/cn";
import Button from "../../ui/button";

export interface SchoolSelectorProps extends React.HTMLAttributes<HTMLButtonElement> {}

export default function SchoolSelector({ className, ...restProps }: SchoolSelectorProps) {
  const schoolSession = useSchoolSession();
  const classSession = useClassSession();

  const { open, setOpen } = useSchoolSelectModal();

  if (!schoolSession) {
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
        <span>{schoolSession.name}</span>
        {classSession && classSession.grade && <span>{classSession.grade}학년</span>}
        {classSession && classSession.classNum && <span>{classSession.classNum}반</span>}
      </Button>
      <SchoolSelectModal open={open} setOpen={setOpen} />
    </>
  );
}
