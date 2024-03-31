"use client";

import { usePathname, useRouter } from "next/navigation";
import { Drawer } from "vaul";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Drawer.Root
      open
      onOpenChange={(open) => {
        if (!open) router.back();
      }}
      modal
    >
      <Drawer.Trigger />
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/50" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 flex flex-col max-w-screen-md w-full mx-auto max-h-[96%] paint-surface-container rounded-t-xl overflow-hidden shadow-lg">
          <div key={pathname} className="h-screen overflow-y-auto">
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
