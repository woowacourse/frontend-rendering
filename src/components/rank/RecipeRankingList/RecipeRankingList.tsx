import RecipeRankingItem from '../RecipeRankingItem';
import { Carousel } from '@/components/common';
import { getRecipeRanking } from '@/apis/rank';

const RecipeRankingList = async () => {
  const recipeResponse = await getRecipeRanking();

  const carouselList = recipeResponse.recipes.map((recipe, index) => ({
    id: index,
    children: <RecipeRankingItem rank={index + 1} recipe={recipe} />,
  }));

  return <Carousel carouselList={carouselList} />;
};

export default RecipeRankingList;
