export const SCHOOL_REGION = {
  '서울': 'B10',
  '부산': 'C10',
  '대구': 'D10',
  '인천': 'E10',
  '광주': 'F10',
  '대전': 'G10',
  '울산': 'H10',
  '세종': 'I10',
  '경기': 'J10',
  '강원': 'K10',
  '충북': 'M10',
  '충남': 'N10',
  '전북': 'P10',
  '전남': 'Q10',
  '경북': 'R10',
  '경남': 'S10',
  '제주': 'T10',
} as const;

export type SchoolRegionCode = typeof SCHOOL_REGION[keyof typeof SCHOOL_REGION];

export const SCHOOL_FOUND_TYPE = ["공립", "사립"] as const;

export type SchoolFoundType = typeof SCHOOL_FOUND_TYPE[number];

export const MEAL_TYPE = {
  "조식": 1, "중식": 2, "석식": 3,
} as const;

export type MealTypeCode = typeof MEAL_TYPE[keyof typeof MEAL_TYPE];
