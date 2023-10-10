import { fetchApi } from '@/apis/fetch';
import { ProductRankingResponse } from '@/types/response';

const useProductRanking = () => {
  const params = 'products';
  return fetchApi<ProductRankingResponse>(`ranks/${params}`, {
    next: { revalidate: 7 * 24 * 60 * 60 },
  });
};

export default useProductRanking;
