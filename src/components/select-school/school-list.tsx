import { SchoolInfoResponseItem } from "@lib/neis/types/SchoolInfo";
import Button from "../ui/button";
import SchoolSelectActions from "./school-select-actions";

function SchoolListItem({ item }: { item: SchoolInfoResponseItem }) {
  return (
    <li>
      <div className="flex flex-row p-4">
        <div className="flex-grow">
          <p className="text-base font-medium">{item.SCHUL_NM}</p>
          <p className="text-sm text-muted">
            <span>{item.SCHUL_KND_SC_NM}</span>
            <span className="mx-2">・</span>
            <span>{item.LCTN_SC_NM}</span>
          </p>
        </div>
        <div className="flex-none">
          <SchoolSelectActions item={item} />
        </div>
      </div>
    </li>
  );
}

export default function SchoolList({ items }: { items: SchoolInfoResponseItem[] }) {
  return (
    <ul className="divide-y">
      {items.map((item) => (
        <SchoolListItem key={item.SD_SCHUL_CODE} item={item} />
      ))}
    </ul>
  );
}
