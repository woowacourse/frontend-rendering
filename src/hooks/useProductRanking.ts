import { fetchApi } from '@/apis/fetch';
import { ProductRankingResponse } from '@/types/response';

const useProductRanking = () => {
  const params = 'products';
  return fetchApi<ProductRankingResponse>(`ranks/${params}`);
};

export default useProductRanking;
