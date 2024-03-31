import { MetaNeisParams } from "./common";

// Params
export interface ClassInfoParams extends MetaNeisParams {
  /** 시도교육청코드 */
  ATPT_OFCDC_SC_CODE: string;
  /** 행정표준코드 */
  SD_SCHUL_CODE: string;
  /** 학년도 */
  AY?: string;
  /** 학년 */
  GRADE?: string;
  /** 주야과정명 */
  DGHT_CRSE_SC_NM?: string;
  /** 학교과정명 */
  SCHUL_CRSE_SC_NM?: string;
  /** 계열명 */
  ORD_SC_NM?: string;
  /** 학과명 */
  DDDEP_NM?: string;
}

// Response
export interface ClassInfoResponseItem {
  /** 시도교육청코드 */
  ATPT_OFCDC_SC_CODE: string;
  /** 시도교육청명 */
  ATPT_OFCDC_SC_NM: string;
  /** 행정표준코드 */
  SD_SCHUL_CODE: string;
  /** 학교명 */
  SCHUL_NM: string;
  /** 학년도 */
  AY: string;
  /** 학년 */
  GRADE: string;
  /** 주야과정명 */
  DGHT_CRSE_SC_NM: string;
  /** 학교과정명 */
  SCHUL_CRSE_SC_NM: string;
  /** 계열명 */
  ORD_SC_NM: string;
  /** 학과명 */
  DDDEP_NM: string;
  /** 학급명 */
  CLASS_NM: string;
  /** 수정일자 */
  LOAD_DTM: string;
}
