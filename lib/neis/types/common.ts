import { SchoolRegionCode } from "../enums";

export interface MetaNeisParams {
  KEY: string;
  Type: "json";
  pIndex: number;
  pSize: number;
}

export interface SchoolNeisParams {
  ATPT_OFCDC_SC_CODE: SchoolRegionCode;
  SD_SCHUL_CODE: string;
}

// type NeisReponseResult = {
//   RESULT: { CODE: string; MESSAGE: string };
// };

// export type NeisResponse<H = {}, B = {}> = {
//   head: H & {
//     RESULT: { CODE: string; MESSAGE: string };
//   };
// } & B;

export type NeisListResponse<I = {}> = {
  totalCount: number;
  items: I[];
};
