import Image from 'next/image';
import styles from './page.module.css';
import { IMAGE_URL } from '@/constants';

export default function Home() {
  return (
    <>
      <section>
        <Image
          className={styles.bannerImage}
          src={`${IMAGE_URL}banner.png`}
          width={600}
          height={360}
          alt='이벤트 배너'
        />
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>카테고리</h2>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>🍯 꿀조합 랭킹</h2>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>👑 상품 랭킹</h2>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>📝 리뷰 랭킹</h2>
      </section>
    </>
  );
}
