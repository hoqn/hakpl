"use client";

import Button, { type ButtonProps } from "@/components/ui/button";
import { CheckIcon, MoonIcon, SunIcon } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useCallback } from "react";
import { useTheme } from "next-themes";

type ColorMode = "light" | "dark" | "system";

export interface ColorModeSwitchProps extends Omit<ButtonProps, "children"> {
  mode: ColorMode;
}

export default function ColorModeSwitch({
  mode,
  ...restProps
}: ColorModeSwitchProps) {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button {...restProps}>
          {/* Light */}
          <SunIcon size="1em" className="block dark:hidden" />
          {/* Dark */}
          <MoonIcon size="1em" className="hidden dark:block" />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="paint-surface-container border shadow rounded-lg px-2 py-2">
          <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenu.RadioItem
              value="light"
              className="block w-full relative px-4 py-2 text-sm font-medium"
              asChild
            >
              <Button variant="ghost">밝은 화면</Button>
            </DropdownMenu.RadioItem>

            <DropdownMenu.RadioItem
              value="dark"
              className="block w-full relative px-4 py-2 text-sm font-medium"
              asChild
            >
              <Button variant="ghost">어두운 화면</Button>
            </DropdownMenu.RadioItem>

            <DropdownMenu.RadioItem
              value="system"
              className="block w-full relative px-4 py-2 text-sm font-medium"
              asChild
            >
              <Button variant="ghost">자동으로</Button>
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
