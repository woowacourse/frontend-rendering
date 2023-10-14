export type InputLengthRange = Record<"MAX_LENGTH" | "MIN_LENGTH", number>;

// 게시글 관련 상수
export const POST = {
  NOT_VOTE: 0,
} as const;

export const POST_CATEGORY = {
  MIN_AMOUNT: 1,
  MAX_AMOUNT: 3,
};

export const POST_TITLE: InputLengthRange = {
  MAX_LENGTH: 100,
  MIN_LENGTH: 2,
} as const;

export const POST_CONTENT: InputLengthRange = {
  MAX_LENGTH: 1000,
  MIN_LENGTH: 2,
} as const;

type WritingOptionPolicy = {
  MIN_COUNT: number;
  MAX_COUNT: number;
} & InputLengthRange;
export const POST_WRITING_OPTION: WritingOptionPolicy = {
  MIN_LENGTH: 1,
  MAX_LENGTH: 50,
  MIN_COUNT: 2,
  MAX_COUNT: 5,
};

export const POST_COMMENT: InputLengthRange = {
  MAX_LENGTH: 200,
  MIN_LENGTH: 1,
} as const;

export const SEARCH_KEYWORD_MAX_LENGTH = 100;

/**
 * 게시글 마감 일자를 나타냅니다. 14일
 */
export const MAX_DEADLINE = 14;

export const MAX_FILE_SIZE = 10000000;
