import { StringDate } from "@/types/time";

export const checkClosedPost = (deadline: StringDate) => {
  return Date.now() >= Number(new Date(deadline));
};
