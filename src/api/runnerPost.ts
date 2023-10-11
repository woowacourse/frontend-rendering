import { GetRunnerPostResponse } from '@/types/runnerPost';
import { fetchApi } from './fetch';

export const getRunnerPost = async () => {
  const url = `/posts/runner?limit=20`;
  return await fetchApi<GetRunnerPostResponse>(url);
};
