import MainNavbar from "@/components/layout/navbar";
import { Suspense } from "react";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Suspense>
        <MainNavbar className="fixed top-0" />
      </Suspense>
      <main className="min-h-full pt-16">{children}</main>
    </>
  );
}
