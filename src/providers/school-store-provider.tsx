"use client";

import { createContext, useContext, useRef } from "react";
import { useStore, type StoreApi } from "zustand";
import { type SchoolStoreState, type SchoolStoreActions, createSchoolStore, type SchoolStore } from "@/stores/school";

// https://docs.pmnd.rs/zustand/guides/nextjs#using-the-store-with-different-architectures

export const SchoolStoreContext = createContext<StoreApi<SchoolStore> | null>(null);

export function SchoolStoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<StoreApi<SchoolStore>>();

  if (!storeRef.current) storeRef.current = createSchoolStore();

  return <SchoolStoreContext.Provider value={storeRef.current}>{children}</SchoolStoreContext.Provider>;
}

export function useSchoolStore<T>(selector: (store: SchoolStore) => T) {
  const context = useContext(SchoolStoreContext);

  if (!context) throw new Error("School Store Context 지정이 되어 있지 않음");

  return useStore(context, selector);
}
