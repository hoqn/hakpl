"use client";

import { SchoolStoreProvider } from "@/providers/school-store-provider";
import { ThemeProvider } from "next-themes";
import { usePathname, useRouter } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem enableColorScheme>
      <SchoolStoreProvider>{children}</SchoolStoreProvider>
    </ThemeProvider>
  );
}
