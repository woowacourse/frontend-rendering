import { fetchProductRanking } from '@/apis/ranking';
import { ProductRankingList } from '@/components/Ranking';
import Image from 'next/image';
import styles from './home.module.css';

export default async function Home() {
  const { products } = await fetchProductRanking();

  return (
    <>
      <Image
        className={styles.banner}
        src='/banner.png'
        width={600}
        height={360}
        alt='배너'
      />
      <section className={styles.section}>
        <p className={styles.title}>상품 랭킹</p>
        <ProductRankingList products={products} />
      </section>
    </>
  );
}
