"use client";

import { ClassInfoResponseItem } from "@lib/neis/types/ClassInfo";
import { useMemo, useState } from "react";
import Button from "../ui/button";
import SchoolClassListItem from "./class-list-item";

export default function SchoolClassList({ items }: { items: ClassInfoResponseItem[] }) {
  const [activeKey, setActiveKey] = useState<number>(-1);

  const hierarchy = useMemo(() => {
    // hierarchy[학기/주야/계열][학년] = [...반]
    const hierarchy: Record<string, Record<string, string[]>> = {};

    for (const { AY, DGHT_CRSE_SC_NM, DDDEP_NM, GRADE, CLASS_NM } of items) {
      // 학기 주야 계열
      const key1 = [AY, DGHT_CRSE_SC_NM, DDDEP_NM].filter(Boolean).join(" ");
      // 학년
      const key2 = GRADE;

      // 반
      const value = CLASS_NM;

      if (key1 in hierarchy) {
        if (key2 in hierarchy[key1]) hierarchy[key1][key2].push(value);
        else hierarchy[key1][key2] = [value];
      } else {
        hierarchy[key1] = { [key2]: [value] };
      }
    }

    // sort
    for (const v1 in hierarchy)
      for (const v2 in hierarchy[v1]) hierarchy[v1][v2].sort((a, b) => parseInt(a) - parseInt(b));

    return hierarchy;
  }, [items.length]);

  const keys = useMemo(() => {
    return Object.keys(hierarchy).sort();
  }, [hierarchy]);

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center gap-2 pb-4 border-b">
        {keys.map((key, i) => (
          <Button
            key={key}
            variant={activeKey === i ? "accent" : "outline"}
            className="rounded-full"
            onClick={setActiveKey.bind(null, i)}
          >
            {key}
          </Button>
        ))}
      </div>
      <div className="px-6">
        {activeKey < 0 ? (
          <p className="text-center text-sm p-4">먼저, 위에서 계열 정보를 선택해주세요</p>
        ) : (
          <ul className="space-y-4">
            {Object.entries(hierarchy[keys[activeKey]]).map(([grade, classes]) => (
              <li key={grade}>
                <div className="text-sm font-medium text-muted mt-6 mb-4">{grade}학년</div>
                <ul key={grade} className="flex flex-row flex-wrap gap-4">
                  {classes.map((classNum) => (
                    <li key={classNum}>
                      <SchoolClassListItem grade={grade} classNum={classNum} />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
