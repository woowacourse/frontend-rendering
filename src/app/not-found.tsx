import Link from 'next/link';

import styles from './notFound.module.css';

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <h2 className={styles.title}>존재하지 않는 페이지입니다.</h2>
      <Link href='/' className={styles.homeLink}>
        홈으로 돌아가기
      </Link>
    </section>
  );
};

export default NotFound;
