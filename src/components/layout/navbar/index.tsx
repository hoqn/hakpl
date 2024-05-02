"use client";

import cn from "@/utils/cn";
import Link from "next/link";
import { HTMLAttributes, useEffect, useState } from "react";
import Button from "../../ui/button";
import ColorModeSwitch from "./color-mode-switch";
import SchoolGuard from "./school-guard";
import SchoolSelector from "./school-selector";
import { MenuIcon, XIcon } from "lucide-react";
import { Drawer } from "vaul";
import { usePathname, useSearchParams } from "next/navigation";
import MobileNav from "./mobile-nav";
import Appbar from "../appbar";

interface Props extends BaseProps, HTMLAttributes<HTMLDivElement> {}

export default function MainNavbar({ className, ...restProps }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [navOpen, setNavOpen] = useState<boolean>(false);

  const openNav = setNavOpen.bind(null, true);
  const closeNav = setNavOpen.bind(null, false);

  useEffect(() => {
    closeNav();
  }, [pathname, searchParams]);

  return (
    <Appbar className={cn("paint-surface-container bg-opacity-50 backdrop-blur-sm border-b", className)} {...restProps}>
      <div className="container h-full mx-auto px-6 flex flex-row items-center">
        <Link className="font-medium text-xl whitespace-nowrap" href="/">
          학플
        </Link>
        <div className={"flex-1 flex flex-row justify-end md:justify-start"}>
          <SchoolSelector />
        </div>
        {/* Nav */}
        {/* Mobile */}
        <div className="flex-none flex flex-row justify-end items-center md:hidden">
          <Drawer.Root direction="right" open={navOpen} onOpenChange={setNavOpen} modal>
            <Drawer.Trigger asChild>
              <Button variant="outline" className="px-3 -mr-2">
                <MenuIcon />
              </Button>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="z-30 fixed inset-0 bg-surface-container-bg bg-opacity-50 backdrop-blur-xl" />
              <Drawer.Content className="z-40 fixed top-0 bottom-0 right-0 w-full max-w-xs paint-surface-container bg-opacity-75 backdrop-blur-sm border shadow-xl rounded-l-2xl">
                <MobileNav />
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
        <div className="flex-1 flex-row justify-end px-6 hidden md:flex">
          <Button variant="ghost" size="md" asChild>
            <Link href="/meal">급식</Link>
          </Button>
          <Button variant="ghost" size="md" asChild>
            <Link href="/dashboard">시간표</Link>
          </Button>
        </div>
        <div className="hidden md:flex flex-row space-x-2">
          {/* <Button variant="outline">로그인/회원가입</Button> */}
          <ColorModeSwitch mode="light" variant="ghost" />
        </div>
      </div>
    </Appbar>
  );
}
