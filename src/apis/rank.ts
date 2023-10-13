import { fetchApi } from '@/apis/fetch';
import {
  RecipeRankingResponse,
  ProductRankingResponse,
  ReviewRankingResponse,
} from '@/types/response';

export const getRecipeRanking = () => {
  const params = 'recipes';
  return fetchApi<RecipeRankingResponse>(`ranks/${params}`, {
    next: { revalidate: 7 * 24 * 60 * 60 },
  });
};

export const getProductRanking = () => {
  const params = 'products';
  return fetchApi<ProductRankingResponse>(`ranks/${params}`, {
    next: { revalidate: 7 * 24 * 60 * 60 },
  });
};

export const getReviewRanking = () => {
  const params = 'reviews';
  return fetchApi<ReviewRankingResponse>(`ranks/${params}`, {
    next: { revalidate: 7 * 24 * 60 * 60 },
  });
};
