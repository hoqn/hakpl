import cn from "@/utils/cn";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { Drawer } from "vaul";

export const Overlay = forwardRef<HTMLDivElement>((_, ref) => {
  return <Drawer.Overlay ref={ref} className="fixed inset-0 bg-black/50" />;
});

export const Content = forwardRef<HTMLDivElement, { children: React.ReactNode } & BaseProps>(
  ({ className, children }, ref) => {
    return (
      <Drawer.Content asChild>
        <motion.div
          ref={ref}
          layoutId="modal-root"
          className={cn(
            "fixed bottom-4 inset-x-4 mx-auto flex flex-col max-w-screen-sm max-h-[96%]",
            "paint-surface-container rounded-2xl overflow-hidden shadow-lg overflow-y-auto",
            className
          )}
        >
          {children}
        </motion.div>
      </Drawer.Content>
    );
  }
);
