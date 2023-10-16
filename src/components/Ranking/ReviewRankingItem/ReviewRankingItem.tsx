import { memo } from 'react';

import { SvgIcon } from '@/components/Common';

import styles from './reviewRankingItem.module.css';
import { ReviewRanking } from '@/apis/reviewRanking';

interface ReviewRankingItemProps {
  reviewRanking: ReviewRanking;
}

const ReviewRankingItem = ({ reviewRanking }: ReviewRankingItemProps) => {
  const { productName, content, rating, favoriteCount } = reviewRanking;

  return (
    <div className={styles.container}>
      <p className={styles.bold}>{productName}</p>
      <p className={styles.reviewText}>{content}</p>
      <div className={styles.favoriteStarWrapper}>
        <div
          className={styles.iconWrapper}
          aria-label={`좋아요 ${favoriteCount}개`}
        >
          <SvgIcon
            className={styles.favoriteIcon}
            variant='favoriteFilled'
            color='red'
            width={11}
            height={13}
          />
          <p className={styles.bold}>{favoriteCount}</p>
        </div>
        <div
          className={styles.iconWrapper}
          aria-label={`${rating.toFixed(1)}점`}
        >
          <SvgIcon
            className={styles.starIcon}
            variant='star'
            width={16}
            height={16}
          />
          <p className={styles.bold}>{rating.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(ReviewRankingItem);
