import type { MealTypeCode, SchoolRegionCode } from "../enums";
import type { MetaNeisParams, SchoolNeisParams } from "./common";

// Params
export interface MealServiceDietInfoParams
  extends MetaNeisParams,
    SchoolNeisParams {
  MMEAL_SC_CODE?: MealTypeCode;
  MLSV_YMD?: string;
  MLSV_FROM_YMD?: string;
  MLSV_TO_YMD?: string;
}

// Response
export interface MealServiceDietInfoResponseItem {
  ATPT_OFCDC_SC_CODE: SchoolRegionCode; // 시도교육청코드
  ATPT_OFCDC_SC_NM: string; // 시도교육청명
  SD_SCHUL_CODE: string; // 행정표준코드
  SCHUL_NM: string; // 학교명
  MMEAL_SC_CODE: MealTypeCode; // 식사코드
  MMEAL_SC_NM: string; // 식사명
  MLSV_YMD: string; // 급식일자
  MLSV_FGR: string; // 급식인원수
  DDISH_NM: string; // 요리명
  ORPLC_INFO: string; // 원산지정보
  CAL_INFO: string; // 칼로리정보
  NTR_INFO: string; // 영양정보
  MLSV_FROM_YMD: string; // 급식시작일자
  MLSV_TO_YMD: string; // 급식종료일자
  LOAD_DTM: string; // 수정일자
}
