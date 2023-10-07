import { Member } from '@/types/member';
import { fetchApi } from './fetch';

export interface RecipeRanking {
  id: number;
  image: string | null;
  title: string;
  author: Member;
  favoriteCount: number;
}

interface RecipeRankingResponse {
  recipes: RecipeRanking[];
}

const ENDPOINT = 'ranks';

export const getRecipeRanking = async () => {
  const endpoint = `${ENDPOINT}/recipes`;
  return fetchApi<RecipeRankingResponse>(endpoint);
};
