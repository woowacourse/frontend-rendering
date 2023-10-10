import RecipeRankingItem from '../RecipeRankingItem/RecipeRankingItem';

import { Carousel } from '@/components/Common';
import { RecipeRanking } from '@/apis/recipeRanking';

interface RecipeRankingListProps {
  recipes: RecipeRanking[];
}

const RecipeRankingList = ({ recipes }: RecipeRankingListProps) => {
  if (recipes.length === 0) return <p>아직 랭킹이 없어요!</p>;

  const carouselList = recipes.map((recipe, index) => ({
    id: index,
    children: <RecipeRankingItem rank={index + 1} recipe={recipe} />,
  }));

  return <Carousel carouselList={carouselList} />;
};

export default RecipeRankingList;
