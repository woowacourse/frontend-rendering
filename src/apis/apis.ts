import { request } from './fetch';
import {
  GetDetailedRunnerPostResponse,
  GetRunnerPostResponse,
  getRunnerPostRequestParams,
} from '../types/runnerPost';

export const getRunnerPost = ({
  limit,
  reviewStatus,
  cursor,
  tagName,
}: getRunnerPostRequestParams) => {
  const params = new URLSearchParams({
    limit: limit.toString(),
    ...(cursor && { cursor: cursor.toString() }),
    ...(reviewStatus && { reviewStatus }),
    ...(tagName && { tagName }),
  });

  return request.get<GetRunnerPostResponse>(
    `/posts/runner?${params.toString()}`,
    false
  );
};

export const getRunnerPostDetail = (runnerPostId: number, isLogin: boolean) => {
  return request.get<GetDetailedRunnerPostResponse>(
    `/posts/runner/${runnerPostId}`,
    isLogin
  );
};
