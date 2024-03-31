import cn from "@/utils/cn";
import { FrownIcon } from "lucide-react";
import Link from "next/link";
import Button from "../ui/button";

export default function NeedSchoolSet({ className, ...restProps }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...restProps}>
      <div className="container max-w-screen-sm mx-auto px-6 py-8 text-center">
        <div className="flex justify-center items-center">
          <FrownIcon size="4em" />
        </div>
        <p className="text-base mt-6">이 기능은 학교를 선택해주신 다음 이용 가능해요</p>
        <div className="mt-6">
          <Button variant="accent" asChild>
            <Link href="/select-school">학교 설정하기</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
