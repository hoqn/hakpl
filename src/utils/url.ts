import { type ReadonlyURLSearchParams } from "next/navigation";

export function createUrl(pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) {
  const queryString = params.toString();

  return `${pathname}${queryString.length ? `?${queryString}` : ""}`;
}
