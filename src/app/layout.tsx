import "@/styles/global.css";
import type { Metadata } from "next";

import localFont from "next/font/local";
import Providers from "./providers";
import { Drawer } from "vaul";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  drawer,
}: Readonly<{
  children: React.ReactNode;
  drawer: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${pretendard.className} paint-surface-container`}>
        <div className="min-h-screen paint-surface-container" vaul-drawer-wrapper="">
          <Providers>
            {children}
            {drawer}
          </Providers>
        </div>
      </body>
    </html>
  );
}
