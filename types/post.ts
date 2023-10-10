import { StringDate } from "./time";

export interface WrittenVoteOptionType {
  id: number;
  text: string;
  peopleCount: number;
  percent: number;
  imageUrl: string;
}

export interface PostInfo {
  postId: number;
  title: string;
  writer: { id: number; nickname: string };
  content: string;
  imageUrl: string;
  category: { id: number; name: string }[];
  createTime: StringDate;
  imageCount: number;
  commentCount: number;
  deadline: StringDate;
  voteInfo: {
    selectedOptionId: number;
    allPeopleCount: number;
    options: WrittenVoteOptionType[];
  };
}

export interface PostList {
  pageNumber: number;
  postList: PostInfo[];
}

export const POST_TYPE = {
  ALL: "posts",
  MY_POST: "myPost",
  MY_VOTE: "myVote",
  CATEGORY: "category",
  SEARCH: "search",
} as const;

export const REQUEST_POST_KIND_URL = {
  [POST_TYPE.ALL]: "posts",
  [POST_TYPE.MY_POST]: "posts/me",
  [POST_TYPE.MY_VOTE]: "posts/votes/me",
  [POST_TYPE.CATEGORY]: "posts",
  [POST_TYPE.SEARCH]: "posts/search",
} as const;

export type PostRequestKind = keyof typeof REQUEST_POST_KIND_URL;
