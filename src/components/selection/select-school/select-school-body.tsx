import SchoolList from "@/components/selection/school-list";
import { fetchSchoolInfo } from "@lib/neis/api";

export default async function SelectSchoolBody({ searchQuery = "" }: { searchQuery?: string }) {
  const res = await fetchSchoolInfo({ SCHUL_NM: searchQuery, pSize: 50, pIndex: 1 });

  if (res.items.length === 0) {
    return (
      <div className="text-center">
        <p className="text-muted">해당하는 학교를 찾을 수 없어요</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-sm mx-auto paint-surface-container">
      <SchoolList items={res.items} />
      {res.items.length === 50 && (
        <div>
          <p className="text-center text-sm text-muted">
            최대 50개까지만 보여줘요.
            <br /> 다른 학교를 찾으신다면 검색어를 더 구체적으로 입력해보세요.
          </p>
        </div>
      )}
    </div>
  );
}
