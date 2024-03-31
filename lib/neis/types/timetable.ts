import { MetaNeisParams } from "./common";

// Params
export interface TimetableParams extends MetaNeisParams {
  /** 시도교육청코드 */
  ATPT_OFCDC_SC_CODE: string;
  /** 행정표준코드 */
  SD_SCHUL_CODE: string;
  /** 학년도 */
  AY?: string;
  /** 학기 */
  SEM?: string;
  /** 시간표일자 */
  ALL_TI_YMD?: string;
  /** 학교과정명 */
  SCHUL_CRSE_SC_NM?: string;
  /** 학년 */
  GRADE?: string;
  /** 강의실명 */
  CLRM_NM?: string;
  /** 학급명 */
  CLASS_NM?: string;
  /** 교시 */
  PERIO?: string;
  /** 시간표시작일자 */
  TI_FROM_YMD?: string;
  /** 시간표종료일자 */
  TI_TO_YMD?: string;
}

// Response
export interface TimetableResponseItem {
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
  /** 학기 */
  SEM: string;
  /** 시간표일자 */
  ALL_TI_YMD: string;
  /** 학교과정명 */
  SCHUL_CRSE_SC_NM: string;
  /** 학년 */
  GRADE: string;
  /** 강의실명 */
  CLRM_NM: string;
  /** 학급명 */
  CLASS_NM: string;
  /** 교시 */
  PERIO: string;
  /** 수업내용 */
  ITRT_CNTNT: string;
  /** 수정일자 */
  LOAD_DTM: string;
}
