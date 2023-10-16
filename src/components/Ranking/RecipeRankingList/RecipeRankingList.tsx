import dynamic from 'next/dynamic';
import RecipeRankingItem from '../RecipeRankingItem/RecipeRankingItem';

import { CarouselChildren } from '../../Common/Carousel/Carousel';
const Carousel = dynamic<{ carouselList: CarouselChildren[] }>(
  () => import('../../Common/Carousel/Carousel'),
  { ssr: false, loading: () => <p>Loading...</p> }
);
import { RecipeRanking } from '@/apis/recipeRanking';
import styles from './recipeRankingList.module.css';

interface RecipeRankingListProps {
  recipes: RecipeRanking[];
}

const RecipeRankingList = ({ recipes }: RecipeRankingListProps) => {
  if (recipes.length === 0) return <p>아직 랭킹이 없어요!</p>;

  const carouselList = recipes.map((recipe, index) => ({
    id: index,
    children: <RecipeRankingItem rank={index + 1} recipe={recipe} />,
  }));

  return (
    <div className={styles.container}>
      <Carousel carouselList={carouselList} />
    </div>
  );
};

export default RecipeRankingList;
