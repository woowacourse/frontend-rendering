import { PassionUserRanking, PopularPostRanking } from '@/types/ranking';

import { getFetch } from '@/utils/fetch';

const BASE_URL = process.env.VOTOGETHER_BASE_URL;

export const getPassionUserRanking = async () => {
  return await getFetch<PassionUserRanking[]>(
    `${BASE_URL}/members/ranking/passion/guest`,
    60 * 30
  );
};

export const getPopularPostRanking = async () => {
  return await getFetch<PopularPostRanking[]>(
    `${BASE_URL}/posts/ranking/popular/guest`
  );
};
