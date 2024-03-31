import cn from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const variants = cva(
  "inline-flex flex-row items-center justify-center whitespace-nowrap transition focus-visible:outline-none focus-visible:ring-4",
  {
    variants: {
      variant: {
        accent: "paint-accent-fill hover:brightness-95 active:brightness-75",
        base: "paint-base-container hover:brightness-95 active:brightness-75",
        positive: "",
        negative: "",
        outline:
          "paint-base-container bg-base-container-fg border bg-opacity-0 hover:bg-opacity-10 active:bg-opacity-25",
        ghost:
          "paint-base-container bg-base-container-fg border-none bg-opacity-0 hover:bg-opacity-10 active:bg-opacity-25",
        link: "bg-transparent underline hover:text-muted",
      },
      size: {
        sm: "px-3 py-2 font-medium text-xs rounded-md",
        md: "px-4 py-2 font-medium text-sm rounded-md",
        lg: "px-6 py-2 font-medium text-sm rounded-lg",
      },
    },
    defaultVariants: {
      variant: "accent",
      size: "md",
    },
  }
);

export type ButtonProps = SlottableProps<BaseProps> & HTMLAttributes<HTMLButtonElement> & VariantProps<typeof variants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function (
  { className, asChild, variant, size, ...restProps },
  ref
) {
  const Component = asChild ? Slot : "button";

  return <Component ref={ref} className={cn(variants({ className, variant, size }))} {...restProps} />;
});
Button.displayName = "Button";

export default Button;
