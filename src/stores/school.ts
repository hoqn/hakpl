import { create, createStore } from "zustand";
import { persist } from "zustand/middleware";

export interface SchoolStoreState {
  school: {
    name: string;
    regionCode: string;
    code: string;
  } | null;
  grade: string | null;
  className: string | null;
}

export interface SchoolStoreActions {
  clearAll(): void;

  setSchool(values: SchoolStoreState["school"] | null): void;

  setGradeClass(grade: string, className: string): void;
  setGradeClass(grade: null, className: null): void;
}

export type SchoolStore = SchoolStoreState & SchoolStoreActions;

const defaultSchoolStoreState: SchoolStoreState = {
  school: null,
  grade: null,
  className: null,
};

export const createSchoolStore = (initState: SchoolStoreState = defaultSchoolStoreState) => {
  return createStore(
    persist<SchoolStore>(
      (set) => ({
        ...initState,

        clearAll() {
          set({ ...defaultSchoolStoreState });
        },

        setSchool(school) {
          set({ school, grade: null, className: null });
        },

        setGradeClass(grade, className) {
          set({ grade, className });
        },
      }),
      { name: "school" }
    )
  );
};
