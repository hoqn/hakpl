"use client";

import cn from "@/utils/cn";
import { FrownIcon, OctagonAlertIcon } from "lucide-react";
import Link from "next/link";
import Button from "../ui/button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function InvalidPathPage({ className, ...restProps }: React.HTMLAttributes<HTMLDivElement>) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 3000);
  }, []);

  return (
    <div className={cn("", className)} {...restProps}>
      <div className="container max-w-screen-sm mx-auto px-6 py-8 text-center">
        <div className="flex justify-center items-center">
          <OctagonAlertIcon size="4em" />
        </div>
        <p className="text-base mt-6">잘못된 접근이에요!</p>
        <p className="mt-4 text-muted text-sm">잠시 후 홈화면으로 이동시켜 드릴게요</p>
      </div>
    </div>
  );
}
