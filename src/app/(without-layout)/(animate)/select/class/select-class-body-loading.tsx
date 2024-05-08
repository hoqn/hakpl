import Skeleton from "@/components/ui/skeleton";

export default function SelectClassBodyLoading() {
  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <Skeleton className="w-36 h-12" />
      <Skeleton className="w-36 h-12" />
    </div>
  );
}
