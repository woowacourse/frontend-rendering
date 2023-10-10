import { request } from './fetch';
import {
  GetRunnerPostResponse,
  getRunnerPostRequestParams,
} from '../types/runnerPost';
import { GetSearchTagResponse } from '../types/tags';
import { GetHeaderProfileResponse } from '../types/profile';

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

export const getSearchTag = (keyword: string) => {
  return request.get<GetSearchTagResponse>(
    `/tags/search?tagName=${keyword}`,
    false
  );
};

export const getHeaderProfile = () => {
  return request.get<GetHeaderProfileResponse>('/profile/me', true);
};
