import querystring from "querystring";
import { MetaNeisParams, NeisListResponse } from "./types/common";

export default class NeisHttpClient {
  private readonly baseUrl: string;
  private readonly key: string;

  constructor(baseUrl: string, key: string) {
    this.baseUrl = baseUrl;
    this.key = key;
  }

  public async requestList<I>(
    endpoint: string,
    init: { params: Record<string, any>; method: "GET" }
  ): Promise<NeisListResponse<I>> {
    const { method = "GET", params } = init;
    const searchParams = querystring.stringify({
      KEY: this.key,
      pIndex: 1,
      pSize: 10,
      Type: "json",
      ...params,
    } satisfies MetaNeisParams);

    try {
      console.log(`${this.baseUrl}/${endpoint}?${searchParams}`);

      const res = await fetch(`${this.baseUrl}/${endpoint}?${searchParams}`, {
        method,
      });
      const data = await res.json();

      if (data.RESULT) {
        const code = data.RESULT.CODE;
        const message = data.RESULT.message;

        // 항목 없음
        if (code == "INFO-200") return { totalCount: 0, items: [] };
        // 오류
        else throw { code, message };
      }

      const tokens = Object.values(data)[0] as any[];

      const headTokens = tokens[0].head as any[];
      const bodyTokens = tokens[1].row as any[];

      const totalCount: number = headTokens.find((cu) => "list_total_count" in cu).list_total_count;
      const items: I[] = bodyTokens;

      return { totalCount, items };
    } catch (e) {
      throw e;
    }
  }
}
