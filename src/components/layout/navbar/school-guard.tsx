"use client";

import { useSchoolStore } from "@/providers/school-store-provider";

/**
 * school이 설정되어 있을 때만 렌더링
 */
export default function SchoolGuard({ children }: { children: React.ReactNode }) {
  const school = useSchoolStore((s) => s.school);

  return school ? children : null;
}
