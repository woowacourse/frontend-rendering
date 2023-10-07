import { getRecipeRanking } from '@/apis/ranking';
import { Carousel, CarouselItem } from '@/components/common';
import RecipeRankingItem from '../RecipeRankingItem';

const RecipeRanking = async () => {
  const { recipes } = await getRecipeRanking();
  const extendedRecipes = [...recipes, recipes[0]];

  return (
    <Carousel>
      {extendedRecipes.map((recipe, index) => (
        <CarouselItem key={`${recipe.id}-${index}`}>
          <RecipeRankingItem rank={index + 1} recipe={recipe} />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default RecipeRanking;
