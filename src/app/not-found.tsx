import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.status}>404 Error</h1>
      <div className={styles.errorMessage}>
        <p>요청하신 페이지를 찾을 수 없습니다.</p>
      </div>
      <Link href='/' className={styles.homeLink}>
        돌아가기
      </Link>
    </div>
  );
}
