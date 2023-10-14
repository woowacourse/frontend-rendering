import { memo } from 'react';
import styles from './reviewRankingItem.module.css';
import { ReviewRanking } from '@/types/rank';
import { SvgIcon } from '@/components/common';
import { colors } from '@/styles/theme';

interface ReviewRankingItemProps {
  reviewRanking: ReviewRanking;
}

const ReviewRankingItem = ({ reviewRanking }: ReviewRankingItemProps) => {
  const { productName, content, rating, favoriteCount } = reviewRanking;

  return (
    <div className={styles.container}>
      <p className={styles.productName}>{productName}</p>
      <p className={styles.content}>{content}</p>
      <div className={styles.iconWrapper}>
        <div
          className={styles.favoriteIconWrapper}
          aria-label={`좋아요 ${favoriteCount}개`}
        >
          <SvgIcon
            variant='favoriteFilled'
            color='red'
            width={11}
            height={13}
          />
          <p className={styles.favoriteCount}>{favoriteCount}</p>
        </div>
        <div
          className={styles.ratingIconWrapper}
          aria-label={`${rating.toFixed(1)}점`}
        >
          <SvgIcon
            className={styles.starIcon}
            variant='star'
            color={colors.secondary}
            width={16}
            height={16}
          />
          <p className={styles.rating}>{rating.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(ReviewRankingItem);
