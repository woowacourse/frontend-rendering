import ReviewRankingItem from '../ReviewRankingItem';

import { ReviewRanking } from '@/apis/ranking';

import styles from './reviewRanking.module.css';

interface ReviewRankingProps {
  reviews: ReviewRanking[];
}

const ReviewRanking = ({ reviews }: ReviewRankingProps) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.reviewId} className={styles.rankingItem}>
          <ReviewRankingItem review={review} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewRanking;
