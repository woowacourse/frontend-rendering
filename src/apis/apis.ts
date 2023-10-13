import { request } from "./fetch";
import {
  GetDetailedRunnerPostResponse,
  GetRunnerPostResponse,
  ReviewStatus,
} from "@/types/runnerPost";

export const getRunnerPost = (
  limit: number,
  reviewStatus?: ReviewStatus,
  cursor?: number,
  tagName?: string
) => {
  const params = new URLSearchParams({
    limit: limit.toString(),
    ...(cursor && { cursor: cursor.toString() }),
    ...(reviewStatus && { reviewStatus }),
    ...(tagName && { tagName }),
  });

  return request.get<GetRunnerPostResponse>(`/posts/runner?${params.toString()}`, false);
};

export const getRunnerPostDetail = (runnerPostId: number) => {
  return request.get<GetDetailedRunnerPostResponse>(`/posts/runner/${runnerPostId}`, false);
};
