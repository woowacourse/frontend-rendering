import { fetchApi } from '@/apis/fetch';
import { RecipeRankingResponse } from '@/types/response';

const useRecipeRanking = () => {
  const params = 'recipes';
  return fetchApi<RecipeRankingResponse>(`ranks/${params}`, {
    next: { revalidate: 7 * 24 * 60 * 60 },
  });
};

export default useRecipeRanking;
