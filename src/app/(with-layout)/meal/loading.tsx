import LoadingIndicator from "@/components/ui/loading-indicater";

export default function Loading() {
  // return <div>Loading...</div>;
  return (
    <div className="text-center">
      <LoadingIndicator className="text-accent-fill-bg text-[2rem]" />
    </div>
  );
}
