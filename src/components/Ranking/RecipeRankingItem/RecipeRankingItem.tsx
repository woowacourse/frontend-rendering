import Image from 'next/image';

import { SvgIcon } from '@/components/Common';
import type { RecipeRanking } from '@/apis/recipeRanking';

import styles from './recipeRankingItem.module.css';

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
      <div className={styles.wrapper}>
        <div className={styles.rankingWrapper}>
          <Image
            className={styles.recipeImage}
            src={image}
            alt={`${rank}위 꿀조합`}
            width={60}
            height={60}
          />
          <div className={styles.titleFavoriteWrapper}>
            <p className={styles.bold}>{title}</p>
            <div className={styles.favoriteWrapper}>
              <SvgIcon
                variant='favoriteFilled'
                width={16}
                height={16}
                color='red'
              />
              <span className={styles.bold}>{favoriteCount}</span>
            </div>
          </div>
        </div>
        <div className={styles.authorWrapper}>
          <Image
            className={styles.authorImage}
            src={profileImage}
            alt={`${nickname} 님의 프로필`}
            width={40}
            height={40}
          />
          <p className={styles.nickname}>{nickname} 님</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeRankingItem;
