import type { Season, SeasonKor } from "@/types";

export const BASE_URL = "http://localhost:3000";
export const STATIC_BASE_URL = "https://static.pium.life";

export const URL_PATH = {
  main: "/",
  dictSearch: "/dict",
  dictDetail: "/dict/:id",
  petList: "/pet",
  petDetail: "/pet/:id",
  timeline: "/pet/:id/timeline",
  petEdit: "/pet/:id/edit",
  petRegisterSearch: "/pet/register",
  petRegisterForm: "/pet/register/:id",
  reminder: "/reminder",
  garden: "/garden",
  gardenRegisterPick: "/garden/register",
  gardenRegisterForm: "/garden/register/:id",
  login: "/login",
  authorization: "/authorization",
  myPage: "/myPage",
  newDictionaryPlantRequest: "/dict/new-plant-request",
} as const;

export const MESSAGE = {
  noSearchResult: "아직 사전에 등록된 식물이 없어요 😅",
} as const;

export const ERROR = {
  radioContext: "컴포넌트가 RadioProvider의 자손이 아닙니다!",
  stackContext: "컴포넌트가 StackProvider의 자손이 아닙니다!",
  dateFormat: "주어진 값은 DateFormat 타입으로 변환할 수 없습니다.",
  yearFormat: "주어진 연도는 20세기 또는 21세기가 아닙니다.",
  invalidDate: "올바른 날짜 형식이 아닙니다.",
  simultaneousConfirm:
    "confirm은 동시에 열 수 없습니다. 연속적인 confirm일 경우 await을 사용했는지 확인해 주세요.",
} as const;

export const SEASONS: Record<Season, SeasonKor> = {
  spring: "봄",
  summer: "여름",
  autumn: "가을",
  winter: "겨울",
} as const;

export const NO_INFORMATION = "정보없음";
