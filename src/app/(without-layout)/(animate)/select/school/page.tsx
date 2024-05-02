import SelectSchool from "@/components/selection/select-school";

export default function Page({ searchParams }: { searchParams: { q?: string } }) {
  const { q = "" } = searchParams;

  return <SelectSchool searchQuery={q} />;
}
