import cn from "@/utils/cn";

export interface LoadingIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

const $dot = "animate-spin";

export default function LoadingIndicator({
  className,
  ...restProps
}: LoadingIndicatorProps) {
  return (
    <span
      className={cn("inline-block text-accent-fill-bg", className)}
      {...restProps}
    >
      {/* <svg height="1em" viewBox="-28 -16 56 32" fill="currentColor">
        <circle className={cn($dot)} cx="-20" cy="0" r="8" />
        <circle
          className={cn($dot)}
          style={{ animationDelay: "0.2s" }}
          cx="0"
          cy="0"
          r="8"
        />
        <circle
          className={cn($dot)}
          style={{ animationDelay: "0.4s" }}
          cx="20"
          cy="0"
          r="8"
        />
      </svg> */}
      <svg
        width="1em"
        height="1em"
        viewBox="-16 -16 32 32"
        fill="none"
        stroke="currentColor"
      >
        <path
          className={$dot}
          d="M -14 0 A 14 14, 0 1 0, 0 -14"
          strokeWidth="4"
        />
      </svg>
    </span>
  );
}
