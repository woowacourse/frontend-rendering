import styles from './recipeRankingItem.module.css';
import { RecipeRanking } from '@/types/rank';
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
    <div className={styles.recipeRankingItemContainer}>
      <div className={styles.recipeRankingWrapper}>
        <div className={styles.rankingRecipeWrapper}>
          {image !== null ? (
            <>
              <Image
                className={styles.rankingRecipeImage}
                src={image}
                alt={`${rank}위 꿀조합`}
                width={60}
                height={60}
              />
            </>
          ) : (
            <Image
              className={styles.rankingRecipeImage}
              src='/plate.svg'
              width={60}
              height={60}
              alt={`랭킹 미존재`}
            />
          )}
          <div className={styles.titleFavoriteWrapper}>
            <p className={styles.recipeName}>{title}</p>
            <div className={styles.favoriteWrapper}>
              <SvgIcon
                variant='favoriteFilled'
                width={16}
                height={16}
                color='red'
              />
              <span className={styles.favoriteCount}>{favoriteCount}</span>
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
          <p>{nickname} 님</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeRankingItem;
