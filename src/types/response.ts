import { RecipeRanking } from './rank';

export interface ErrorResponse {
  code: number;
  message: string;
}

export interface RecipeRankingResponse {
  recipes: RecipeRanking[];
}
