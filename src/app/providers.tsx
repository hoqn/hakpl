import { getClassSession, getSchoolSession } from "@/helpers/school-session";
import { SchoolSessionProvider } from "@/providers/school-session-provider";
// import { SchoolStoreProvider } from "@/providers/school-store-provider";
import { ThemeProvider } from "next-themes";

export default async function Providers({ children }: { children: React.ReactNode }) {
  const schoolSession = await getSchoolSession();
  const classSession = await getClassSession();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem enableColorScheme>
      {/* <SchoolStoreProvider>{children}</SchoolStoreProvider> */}
      <SchoolSessionProvider schoolSession={schoolSession} classSession={classSession}>
        {children}
      </SchoolSessionProvider>
    </ThemeProvider>
  );
}
