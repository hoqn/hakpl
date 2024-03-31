import { Slot } from "@radix-ui/react-slot";
import Button from "@/components/ui/button";
import cn from "@/utils/cn";

export interface DateButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    SlottableProps {
  date: Date;
}

export default function DateButton({
  className,
  asChild,
  date,
  ...restProps
}: DateButtonProps) {
  const Component = asChild ? Slot : Button;

  const dateString = new Intl.DateTimeFormat().format(date);

  return (
    <Button asChild className={cn("", className)} {...restProps}>
      <Component className="space-x-1">
        <span>{dateString}</span>
      </Component>
    </Button>
  );
}
