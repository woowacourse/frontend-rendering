import Link from 'next/link';

import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>존재하지 않는 페이지입니다.</h1>
      <Link className={styles.link} href={'/'}>
        홈으로 가기
      </Link>
    </section>
  );
}
