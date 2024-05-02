"use client";

import Button from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler } from "react";

export default function SchoolSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const newSearchParams = new URLSearchParams(searchParams.toString());

    const searchQuery = formData.get("search-query")?.toString();

    if (searchQuery) newSearchParams.set("q", searchQuery);
    else newSearchParams.delete("q");

    router.replace(`/select/school?${newSearchParams.toString()}`);
  };

  return (
    <form className="block" onSubmit={onSubmit}>
      <span className="absolute top-5 h-0">
        <SearchIcon className="-translate-y-1/2 ml-3 stroke-muted" size={16} />
      </span>
      <input
        type="search"
        className="w-full pl-8 pr-4 py-2 h-10 text-sm leading-10 paint-base-container bg-muted/10 rounded placeholder:text-muted"
        placeholder="학교 이름으로 검색할 수 있어요"
        name="search-query"
        defaultValue={searchParams.get("q") || ""}
        autoFocus
      />
    </form>
  );
}
