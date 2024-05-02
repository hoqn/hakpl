import cn from "@/utils/cn";
import { ChevronLeftIcon, XIcon } from "lucide-react";
import { useMemo } from "react";
import * as NavItem from "./navigation-item";

export interface AppbarProps extends BaseProps, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  title?: string;
  navigation?: React.ReactNode;
  // leftMenu?: React.ReactNode;
}

function Appbar({ className, children, title, navigation, ...restProps }: AppbarProps) {
  const navItem = useMemo(() => {
    if (navigation === "back") return <ChevronLeftIcon />;
    else if (navigation === "exit") return <XIcon />;
    else return navigation;
  }, [navigation]);

  return (
    <header
      className={cn("fixed top-0 inset-x-0 z-20", "w-full h-16 paint-surface-container border-b", className)}
      {...restProps}
    >
      {children || (
        <div className="container mx-auto h-full">
          <div className="h-full relative px-4 flex flex-row items-center">
            <div className="absolute left-4 h-full flex flex-row items-center gap-4">{navItem}</div>
            <div className="mx-auto text-center text-lg font-bold">{title}</div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Object.assign(Appbar, NavItem);
