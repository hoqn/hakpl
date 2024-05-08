// httpOnly Cookie를 client에서도 이용할 수 있도록 Context로 전달해준당

"use client";

import { ClassSession, SchoolSession, setClassSession } from "@/helpers/school-session";
import { createContext, useContext, useEffect, useState } from "react";

const SchoolClassContext = createContext<{ school: SchoolSession | null; class: ClassSession | null } | null>(null);

export function SchoolSessionProvider({
  children,
  schoolSession,
  classSession,
}: {
  children: React.ReactNode;
  schoolSession: SchoolSession | null;
  classSession: ClassSession | null;
}) {
  const [schoolClient, setSchoolClient] = useState(schoolSession);
  const [classClient, setClassClient] = useState(classSession);

  useEffect(() => {
    setSchoolClient(schoolSession);
  }, [schoolSession]);

  useEffect(() => {
    setClassClient(classSession);
  }, [classSession]);

  return (
    <SchoolClassContext.Provider value={{ school: schoolClient, class: classClient }}>
      {children}
    </SchoolClassContext.Provider>
  );
}

export function useSchoolSession() {
  const context = useContext(SchoolClassContext);

  if (!context) throw "Provider 설정되지 않음";

  return context.school;
}

export function useClassSession() {
  const context = useContext(SchoolClassContext);

  if (!context) throw "Provider 설정되지 않음";

  return context.class;
}
