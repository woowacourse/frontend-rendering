import { Member } from '@/types/member';
import { fetchApi } from './fetch';

export interface RecipeRanking {
  id: number;
  image: string | null;
  title: string;
  author: Member;
  favoriteCount: number;
}

export interface ProductRanking {
  id: number;
  name: string;
  image: string | null;
  categoryType: string;
}

export interface ReviewRanking {
  reviewId: number;
  productId: number;
  productName: string;
  content: string;
  rating: number;
  favoriteCount: number;
  categoryType: string;
}

interface RecipeRankingResponse {
  recipes: RecipeRanking[];
}

interface ProductRankingResponse {
  products: ProductRanking[];
}

interface ReviewRankingResponse {
  reviews: ReviewRanking[];
}

const ENDPOINT = 'ranks';

export const getRecipeRanking = async () => {
  const endpoint = `${ENDPOINT}/recipes`;
  return fetchApi<RecipeRankingResponse>(endpoint, {
    next: { revalidate: 7 * 24 * 60 * 60 },
  });
};

export const getProductRanking = async () => {
  const endpoint = `${ENDPOINT}/products`;
  return fetchApi<ProductRankingResponse>(endpoint, {
    next: { revalidate: 14 * 24 * 60 * 60 },
  });
};

export const getReviewRanking = async () => {
  const endpoint = `${ENDPOINT}/reviews`;
  return fetchApi<ReviewRankingResponse>(endpoint, {
    next: { revalidate: 7 * 24 * 60 * 60 },
  });
};
