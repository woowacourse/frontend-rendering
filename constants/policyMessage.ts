import {
  MAX_DEADLINE,
  POST_CATEGORY,
  POST_CONTENT,
  POST_TITLE,
  POST_WRITING_OPTION,
} from "./policy";

export const POST_CATEGORY_POLICY = {
  AMOUNT: `${POST_CATEGORY.MIN_AMOUNT}개 ~ ${POST_CATEGORY.MAX_AMOUNT}개의 카테고리를 작성해주세요.`,
  MIN: `카테고리를 최소 ${POST_CATEGORY.MIN_AMOUNT}개 골라주세요.`,
  MAX: `카테고리를 최대 ${POST_CATEGORY.MAX_AMOUNT}개 골라주세요.`,
} as const;

export const POST_TITLE_POLICY = {
  REQUIRED: "제목은 필수로 입력해야 합니다.",
  DEFAULT: `제목을 입력해주세요 (${POST_TITLE.MAX_LENGTH}자 이내)`,
  LETTER_AMOUNT: `${POST_TITLE.MAX_LENGTH}자 이내로 입력해주세요.`,
} as const;

export const POST_PHOTO = {
  PHOTO_COUNT: "1장의 사진을 업로드 할 수 있습니다.",
  PHOTO_CAPACITY: "사진의 용량은 10MB 이하만 가능합니다.",
};

export const POST_CONTENT_POLICY = {
  REQUIRED: "내용은 필수로 입력해야 합니다.",
  DEFAULT: `내용을 입력해주세요 (${POST_CONTENT.MAX_LENGTH}자 이내)`,
  LETTER_AMOUNT: `${POST_CONTENT.MAX_LENGTH}자 이내로 입력해주세요.`,
  ...POST_PHOTO,
} as const;

export const CONTENT_PLACEHOLDER = [
  POST_CONTENT_POLICY.DEFAULT,
  POST_CONTENT_POLICY.PHOTO_COUNT,
  POST_CONTENT_POLICY.PHOTO_CAPACITY,
].join("\n - ");

export const POST_OPTION_POLICY = {
  REQUIRED: "선택지에 글을 입력해주세요.",
  DEFAULT: `선택지를 입력해주세요 (${POST_WRITING_OPTION.MAX_LENGTH}자 이내)`,
  LETTER_AMOUNT: `${POST_WRITING_OPTION.MAX_LENGTH}자 이내로 입력해주세요.`,
  AMOUNT: `${POST_WRITING_OPTION.MIN_COUNT}개 ~ ${POST_WRITING_OPTION.MAX_COUNT}개 선택지를 작성해주세요.`,
  MIN: `선택지는 최소 ${POST_WRITING_OPTION.MIN_COUNT}개 입력해주세요.`,
  MAX: `선택지는 최대 ${POST_WRITING_OPTION.MAX_COUNT}개 입력할 수 있습니다.`,
  ...POST_PHOTO,
} as const;

export const POST_DEADLINE_POLICY = {
  REQUIRED: "시간은 필수로 입력해야 합니다.",
  DEFAULT: `${MAX_DEADLINE}일 이내로 마감시간을 정해주세요.`,
} as const;

export const REPORT_MESSAGE = {
  BEHAVIOR: "부적절한 언행/혐오/차별적 표현이 포함되어있습니다.",
  SPAMMING: "도배성 내용이 포함되어있습니다.",
  ADVERTISING: "광고성 내용이 포함되어있습니다.",
  SENSUALITY: "음란성 내용이 포함되어 있습니다.",
  SPECIFIC_PERSON: "특정인이 거론되어있습니다.",
  PRIVACY: "개인정보가 포함되어있습니다.",
} as const;