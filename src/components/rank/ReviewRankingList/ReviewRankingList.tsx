import styles from './reviewRankingList.module.css';
import ReviewRankingItem from '../ReviewRankingItem/';
import { getReviewRanking } from '@/apis/rank';

const ReviewRankingList = async () => {
  const reviewResponse = await getReviewRanking();

  return (
    <ul className={styles.container}>
      {reviewResponse.reviews.map((reviewRanking) => (
        <li key={reviewRanking.reviewId}>
          <ReviewRankingItem reviewRanking={reviewRanking} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewRankingList;
