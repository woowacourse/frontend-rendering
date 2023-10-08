import { fetchApi } from '@/apis/fetch';
import { RecipeRankingResponse } from '@/types/response';

const useRecipeRanking = () => {
  const params = 'recipes';
  return fetchApi<RecipeRankingResponse>(`ranks/${params}`);
};

export default useRecipeRanking;
