import { Drawer } from "vaul";

function BottomSheetOverlay() {
  return <Drawer.Overlay className="fixed inset-0 bg-black/50" />;
}

function BottomSheetPortal({ children }: { children: React.ReactNode }) {
  return <Drawer.Portal>{children}</Drawer.Portal>;
}

function BottomSheetContent({ children }: { children: React.ReactNode }) {
  return (
    <Drawer.Content className="fixed bottom-0 left-0 right-0 flex flex-col max-w-screen-md w-full mx-auto max-h-[96%] paint-surface-container rounded-t-xl overflow-hidden shadow-lg">
      <div className="h-screen overflow-y-auto">{children}</div>
    </Drawer.Content>
  );
}

const BottomSheet = Object.assign(
  {},
  {
    Overlay: BottomSheetOverlay,
    Portal: BottomSheetPortal,
    Content: BottomSheetContent,
  }
);

export default BottomSheet;
