import { GetDetailedRunnerPostResponse } from '@/types/runnerPost';
import { fetchApi } from './fetch';

export const getRunnerPostDetail = async (runnerPostId: number) => {
  const url = `/posts/runner/${runnerPostId}`;
  return await fetchApi<GetDetailedRunnerPostResponse>(url);
};
