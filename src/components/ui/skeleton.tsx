import cn from "@/utils/cn";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Skeleton({ className, ...restProps }: SkeletonProps) {
  return <div className={cn("rounded-lg bg-base-fill-muted/50 animate-pulse", className)} {...restProps} />;
}
