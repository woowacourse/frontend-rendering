import useRecipeRanking from '@/hooks/useRecipeRanking';
import RecipeRankingItem from '../RecipeRankingItem';
import { Carousel } from '@/components/common';

const RecipeRankingList = async () => {
  const recipeResponse = await useRecipeRanking();

  const carouselList = recipeResponse.recipes.map((recipe, index) => ({
    id: index,
    children: <RecipeRankingItem rank={index + 1} recipe={recipe} />,
  }));

  return <Carousel carouselList={carouselList} />;
};

export default RecipeRankingList;
