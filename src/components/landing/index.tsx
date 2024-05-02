"use client";

import cn from "@/utils/cn";
import Button from "../ui/button";
import Link from "next/link";
import { ChevronRightIcon, SchoolIcon, SparklesIcon, ZapIcon } from "lucide-react";
import SchoolSelectModal, { useSchoolSelectModal } from "../selection/modal";

const $section_inner = "container max-w-screen-md mx-auto px-6";

export default function Landing() {
  const { open, setOpen } = useSchoolSelectModal();

  return (
    <>
      <section className="paint-base-container">
        <div className={cn($section_inner, "flex flex-col justify-center py-16 h-screen min-h-[480px]")}>
          <h2 className="text-4xl font-black">HAKPL.</h2>
          <p className="mt-4 text-lg">학교 정보를 깔끔하게 확인할 수 있어요.</p>
          <div className="mt-6">
            <Button
              variant="accent"
              size="lg"
              className="rounded-full px-6 py-4 text-base shadow-xl font-bold hover:shadow-md"
              onClick={setOpen.bind(null, true)}
            >
              시작하기
              <ChevronRightIcon className="inline ml-2" size="1.25em" strokeWidth="4px" />
            </Button>
          </div>
        </div>
      </section>
      <SchoolSelectModal open={open} setOpen={setOpen} />
    </>
  );
}
