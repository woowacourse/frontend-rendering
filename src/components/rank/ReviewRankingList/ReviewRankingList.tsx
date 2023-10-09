import styles from './reviewRankingList.module.css';
import ReviewRankingItem from '../ReviewRankingItem/';
import useReviewRanking from '@/hooks/useReviewRanking';

const ReviewRankingList = async () => {
  const reviewResponse = await useReviewRanking();

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
