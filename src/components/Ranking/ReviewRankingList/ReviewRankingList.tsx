import ReviewRankingItem from '../ReviewRankingItem/ReviewRankingItem';

import styles from './reviewRankingList.module.css';
import { ReviewRanking } from '@/apis/reviewRanking';

interface ReviewRankingListProps {
  reviews: ReviewRanking[];
}

const ReviewRankingList = ({ reviews }: ReviewRankingListProps) => {
  return (
    <ul className={styles.container}>
      {reviews.map((reviewRanking) => (
        <li key={reviewRanking.reviewId}>
          <ReviewRankingItem reviewRanking={reviewRanking} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewRankingList;
