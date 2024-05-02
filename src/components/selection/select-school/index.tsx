import Button from "@/components/ui/button";
import { redirect } from "next/navigation";
import SelectSchoolBody from "./select-school-body";
import SchoolSearch from "./search";

export default function SelectSchool({ searchQuery }: { searchQuery?: string }) {
  async function updateSearchQuery(formData: FormData) {
    "use server";
    const searchQuery = formData.get("search-query")?.toString() || "";
    // redirect(`/select/school?q=${searchQuery}`);
    redirect(`/`);
  }

  return (
    <div className="">
      {/* TOP */}
      <div className="text-center py-4">
        <p className="text-sm text-muted">정보를 확인할 학교를 골라주세요</p>
      </div>
      <div className="sticky top-16 inset-x-0">
        <div className="container max-w-screen-sm mx-auto px-4 pb-4 paint-surface-container border-b">
          <SchoolSearch />
        </div>
      </div>
      {/* BODY */}
      <div className="flex-grow py-4">
        <SelectSchoolBody searchQuery={searchQuery} />
      </div>
    </div>
  );
}
