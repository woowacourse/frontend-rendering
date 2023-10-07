import { ReviewRanking } from '@/apis/ranking';
import { SvgIcon } from '@/components/common';
import { colors } from '@/styles/theme';

import styles from './reviewRankingItem.module.css';

interface ReviewRankingItemProps {
  review: ReviewRanking;
}

const ReviewRankingItem = ({ review }: ReviewRankingItemProps) => {
  const { productName, content, rating, favoriteCount } = review;

  return (
    <div className={styles.container}>
      <p className={styles.productName}>{productName}</p>
      <p className={styles.reviewContent}>{content}</p>
      <div className={styles.reviewInfo}>
        <div
          className={styles.favorite}
          aria-label={`좋아요 ${favoriteCount}개`}
        >
          <SvgIcon
            variant='favoriteFilled'
            color='red'
            width={11}
            height={13}
          />
          <span className={styles.infoCount}>{favoriteCount}</span>
        </div>
        <div className={styles.rating} aria-label={`${rating.toFixed(1)}점`}>
          <SvgIcon
            variant='star'
            className={styles.starIcon}
            color={colors.secondary}
            width={16}
            height={16}
          />
          <span className={styles.infoCount}>{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewRankingItem;
