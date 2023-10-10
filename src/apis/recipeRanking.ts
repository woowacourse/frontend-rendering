import { fetchApi } from './fetch';

interface Member {
  nickname: string;
  profileImage: string;
}

export interface RecipeRanking {
  id: number;
  image: string;
  title: string;
  author: Member;
  favoriteCount: number;
}

export interface RecipeRankingResponse {
  recipes: RecipeRanking[];
}

export const fetchRecipeRanking = async () => {
  return fetchApi<RecipeRankingResponse>('/ranks/recipes', {
    method: 'GET',
  });
};
