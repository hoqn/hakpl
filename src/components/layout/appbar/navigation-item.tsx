import cn from "@/utils/cn";
import { ChevronLeftIcon, LucideProps, XIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function Back({ className, ...restProps }: { className?: string } & LucideProps) {
  const router = useRouter();
  return (
    <ChevronLeftIcon className={cn("cursor-pointer", className)} onClick={router.back.bind(null)} {...restProps} />
  );
}

export function Close({ className, ...restProps }: { className?: string } & LucideProps) {
  const router = useRouter();
  return <XIcon className={cn("cursor-pointer", className)} onClick={router.back.bind(null)} {...restProps} />;
}
