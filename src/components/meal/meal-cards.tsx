import { convertDateTo8digits } from "@/utils/date";
import { fetchMealServiceDiet } from "@lib/neis/api";

export default async function MealCards({
  schoolRegionCode,
  schoolCode,
  date,
}: {
  schoolRegionCode: string;
  schoolCode: string;
  date: Date;
}) {
  try {
    const res = await fetchMealServiceDiet({
      ATPT_OFCDC_SC_CODE: schoolRegionCode as any,
      SD_SCHUL_CODE: schoolCode,
      MLSV_YMD: convertDateTo8digits(date),
    });

    if (res.totalCount === 0) return <div className="text-center p-4 text-muted">데이터가 없어요 :(</div>;

    return (
      <>
        {Array.from({ length: 3 }).map((_, i) => {
          const item = res.items.find((it) => it.MMEAL_SC_CODE == i + 1);

          return (
            <div key={i} className="flex-1">
              {item && (
                <div className="paint-base-container overflow-hidden rounded-lg border">
                  <div className="p-4 text-accent-container-fg">
                    <h4 className="text-lg font-bold">{item.MMEAL_SC_NM}</h4>
                  </div>
                  <div className="p-4">
                    <p dangerouslySetInnerHTML={{ __html: item.DDISH_NM }}></p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </>
    );
  } catch (e) {
    console.error(e);

    return (
      <div className="text-center px-6 py-6">
        <p>앗! 오류가 발생했어요 :(</p>
      </div>
    );
  }
}
