import * as styles from './not-found.css';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className={styles.NotFoundPageContainer}>
      <Image width={120} height={120} src="https://baton-review.com/5cb206898e215af5b7d5.jpg" alt="not-found-page" />
      <p className={styles.Message}>
        <p className={styles.Bold}>페이지를 찾을 수 없습니다 😢</p>
      </p>
      <Link href="/">홈으로 가기</Link>
    </div>
  );
};

export default NotFoundPage;
