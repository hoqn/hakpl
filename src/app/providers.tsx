"use client";

import { SchoolStoreProvider } from "@/providers/school-store-provider";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem enableColorScheme>
      <SchoolStoreProvider>{children}</SchoolStoreProvider>
    </ThemeProvider>
  );
}
