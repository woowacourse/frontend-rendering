import { RecipeRanking } from '@/apis/ranking';

import styles from './recipeRankingItem.module.css';
import Image from 'next/image';
import { SvgIcon } from '@/components/common';

interface RecipeRankingItemProps {
  rank: number;
  recipe: RecipeRanking;
}

const RecipeRankingItem = ({ rank, recipe }: RecipeRankingItemProps) => {
  const {
    image,
    title,
    author: { nickname, profileImage },
    favoriteCount,
  } = recipe;

  return (
    <div className={styles.container}>
      <Image
        src={image ?? '/plate.svg'}
        className={styles.recipeImage}
        width={60}
        height={60}
        alt={`${rank}위 이미지`}
      />
      <div className={styles.recipeInfo}>
        <p className={styles.recipeName}>{title}</p>
        <div className={styles.favorite}>
          <SvgIcon
            variant='favoriteFilled'
            width={14}
            height={14}
            color='red'
          />
          <span>{favoriteCount}</span>
        </div>
      </div>
      <div className={styles.authorInfo}>
        <Image
          src={profileImage}
          className={styles.authorImage}
          width={40}
          height={40}
          alt={`${nickname} 님의 프로필`}
        />
        <span className={styles.authorName}>{nickname} 님</span>
      </div>
    </div>
  );
};

export default RecipeRankingItem;
