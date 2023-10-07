import RecipeRankingItem from '../RecipeRankingItem';

import { RecipeRanking } from '@/apis/ranking';
import { Carousel, CarouselItem } from '@/components/common';

interface RecipeRankingProps {
  recipes: RecipeRanking[];
}

const RecipeRanking = async ({ recipes }: RecipeRankingProps) => {
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
