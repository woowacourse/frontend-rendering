import { fetchApi } from './fetch';

export interface ProductRanking {
  id: number;
  name: string;
  image: string | null;
}

export interface ProductRankingResponse {
  products: ProductRanking[];
}

export const fetchProductRanking = async () => {
  return fetchApi<ProductRankingResponse>('/ranks/products', {
    method: 'GET',
    cache: 'no-store',
  });
};
