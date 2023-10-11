import { request } from "./fetch";
import { GetRunnerPostResponse, ReviewStatus } from "@/types/runnerPost";

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
