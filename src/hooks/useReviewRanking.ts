import { fetchApi } from '@/apis/fetch';
import { ReviewRankingResponse } from '@/types/response';

const useReviewRanking = () => {
  const params = 'reviews';
  return fetchApi<ReviewRankingResponse>(`ranks/${params}`);
};

export default useReviewRanking;
