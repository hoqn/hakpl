"use client";

import Button from "@/components/ui/button";
import { createUrl } from "@/utils/url";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Page({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { register, handleSubmit } = useForm<{ searchQuery: string }>({
    defaultValues: { searchQuery: searchParams.get("q") || "" },
  });

  const handleOnSubmit = handleSubmit(({ searchQuery }) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("q", searchQuery);
    router.replace(createUrl(pathname, newSearchParams));
  });

  return (
    <div className="">
      {/* TOP */}
      <div className="pt-6 text-center">
        <h2 className="text-lg font-bold">학교 고르기</h2>
        <p className="mt-4 text-base">정보를 확인할 학교를 골라주세요</p>
      </div>
      <div className="sticky top-0 left-0 right-0">
        <div className="container max-w-screen-sm mx-auto px-6 py-4 paint-surface-container border-b">
          <form className="flex flex-row" onSubmit={handleOnSubmit}>
            <input
              type="search"
              className="flex-1 min-w-0 px-4 py-2 paint-base-container border rounded placeholder:text-muted"
              placeholder="학교 이름으로 검색할 수 있어요"
              {...register("searchQuery")}
            />
            <Button className="flex-none ml-2">검색</Button>
          </form>
        </div>
      </div>
      {/* BODY */}
      <div className="flex-grow py-4">{children}</div>
    </div>
  );
}
