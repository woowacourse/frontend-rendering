export const ROUTER_PATH = {
  home: "/",
  reward: "/reward",
  mypage: "/mypage",
} as const;

export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_API_DEV_URL
    : process.env.NEXT_PUBLIC_API_PRO_URL;

export const FEEDBACK_FORM_LINK = "https://forms.gle/k2AsZnHQe7CKDBiBA";
