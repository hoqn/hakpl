"use client";

import Button from "@/components/ui/button";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { Drawer } from "vaul";
import SchoolGuard from "./school-guard";
import cn from "@/utils/cn";
import { useSchoolStore } from "@/providers/school-store-provider";
import ColorModeSwitch from "./color-mode-switch";

export default function MobileNav({ className }: { className?: string }) {
  const school = useSchoolStore((s) => s.school);
  const schoolGrade = useSchoolStore((s) => s.grade);
  const schoolClass = useSchoolStore((s) => s.className);

  return (
    <>
      <div className="w-full flex flex-row justify-end items-center h-16 px-6">
        <ColorModeSwitch className="mr-4" mode="light" variant="ghost" />
        <Drawer.Close asChild>
          <Button variant="outline" className="px-3 -mr-2 bg-surface-container-bg bg-opacity-100">
            <XIcon />
          </Button>
        </Drawer.Close>
      </div>
      <div className="px-6">
        <div className="pb-4">
          {school ? (
            <>
              <h4 className="text-lg font-bold">{school.name}</h4>
              {schoolGrade && schoolClass && (
                <p className="text-base">
                  {schoolGrade}학년 {schoolClass}반
                </p>
              )}
              <Button variant="link" size="sm" className="p-0" asChild>
                <Link href="/select">정보 수정</Link>
              </Button>
            </>
          ) : (
            <>
              <p className="mb-4">학교가 설정되어 있지 않아요</p>
              <Button variant="accent" size="md" asChild>
                <Link href="/select-school">설정하기</Link>
              </Button>
            </>
          )}
        </div>

        <div className="flex flex-col border-t pt-4">
          <Button variant="ghost" size="lg" className="-mx-6 h-12 justify-start" asChild>
            <Link href="/meal">급식</Link>
          </Button>
          <Button variant="ghost" size="lg" className="-mx-6 h-12 justify-start" asChild>
            <Link href="/dashboard">시간표</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
