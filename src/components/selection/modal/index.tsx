// "use client";

import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Drawer } from "vaul";
import { useShallow } from "zustand/react/shallow";
import { AnimatePresence, MotionConfig, motion, useAnimate } from "framer-motion";
import cn from "@/utils/cn";
import { useClassSession, useSchoolSession } from "@/providers/school-session-provider";

export function useSchoolSelectModal() {
  const [open, setOpen] = useState<boolean>(false);

  return { open, setOpen };
}

const Content = forwardRef<HTMLDivElement>((_, ref) => {
  const router = useRouter();

  const schoolSession = useSchoolSession();
  const classSession = useClassSession();

  useLayoutEffect(() => {
    router.prefetch("/select/school");
    router.prefetch("/select/class");
  }, []);

  const [routerRequest, setRouterRequest] = useState<string | null>(null);

  const handleOnClickSelectSchool = () => {
    setRouterRequest("/select/school");
  };

  const handleOnClickSelectClass = () => {
    setRouterRequest("/select/class");
  };

  if (!routerRequest) {
    return (
      <Drawer.Content asChild>
        <motion.div
          ref={ref}
          layoutId="modal-root"
          className={cn(
            "fixed z-50 bottom-4 inset-x-4 mx-auto flex flex-col max-w-screen-sm max-h-[96%]",
            "paint-surface-container rounded-2xl overflow-hidden shadow-lg"
          )}
        >
          <div className="p-6 flex flex-row items-center">
            <h4 className="flex-1 font-bold text-lg">학교 설정</h4>
            <Drawer.Close>
              <XIcon />
            </Drawer.Close>
          </div>
          <div className="pb-6 px-6 space-y-4">
            <dl
              className={cn(
                "p-4 border cursor-pointer rounded-lg transition active:scale-95",
                schoolSession ? "paint-accent-container" : "paint-base-container"
              )}
              onClick={handleOnClickSelectSchool}
            >
              <dt className="font-bold">학교</dt>
              {schoolSession ? (
                <dd className="text-sm">{schoolSession.name}</dd>
              ) : (
                <dd className="text-sm text-muted">여기를 눌러 설정해주세요</dd>
              )}
            </dl>
            <dl
              className={cn(
                "p-4 border cursor-pointer rounded-lg transition active:scale-95",
                !schoolSession && "opacity-50 pointer-events-none",
                classSession ? "paint-accent-container" : "paint-base-container"
              )}
              onClick={handleOnClickSelectClass}
              aria-disabled={!schoolSession}
            >
              <dt className="font-bold">학년과 반</dt>
              {classSession ? (
                <dd className="text-sm">
                  {classSession.grade}학년 {classSession.classNum}반
                </dd>
              ) : (
                <dd className="text-sm text-muted">여기를 눌러 설정해주세요</dd>
              )}
            </dl>
          </div>
        </motion.div>
      </Drawer.Content>
    );
  } else {
    return (
      <motion.div
        className="fixed z-50 inset-0 paint-surface-container"
        layoutId="modal-root"
        onLayoutAnimationComplete={() => {
          router.push(routerRequest);
        }}
      ></motion.div>
    );
  }
});

export default function SchoolSelectModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Drawer.Root open={open} onOpenChange={setOpen} modal>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed z-40 inset-0 bg-black/50" />
        <Content />
      </Drawer.Portal>
    </Drawer.Root>
  );
}
