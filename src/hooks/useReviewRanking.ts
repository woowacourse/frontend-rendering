import { fetchApi } from '@/apis/fetch';
import { ReviewRankingResponse } from '@/types/response';

const useReviewRanking = () => {
  const params = 'reviews';
  return fetchApi<ReviewRankingResponse>(`ranks/${params}`, {
    next: { revalidate: 7 * 24 * 60 * 60 },
  });
};

export default useReviewRanking;
