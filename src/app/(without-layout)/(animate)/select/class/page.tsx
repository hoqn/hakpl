import { Suspense } from "react";
import SelectClassBody from "./select-class-body";
import SelectClassBodyLoading from "./select-class-body-loading";

export default async function Page() {
  return (
    <div className="">
      {/* TOP */}
      <div className="pt-6 text-center">
        <p className="mt-4 text-base">정보를 확인할 학급을 골라주세요</p>
      </div>
      {/* BODY */}
      <div className="flex-grow py-4">
        <Suspense fallback={<SelectClassBodyLoading />}>
          <SelectClassBody />
        </Suspense>
      </div>
    </div>
  );
}
