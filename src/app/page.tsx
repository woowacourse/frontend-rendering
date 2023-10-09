import Image from 'next/image';
import styles from './page.module.css';
import { IMAGE_URL } from '@/constants';
import useCategory from '@/hooks/useCategory';
import { CategoryList } from '@/components/common';
import RecipeRankingList from '@/components/rank/RecipeRankingList';
import ProductRankingList from '@/components/rank/ProductRankingList';

const Home = async () => {
  const foodCategory = await useCategory('food');
  const storeCategory = await useCategory('store');

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
        <div className={styles.categoryWrapper}>
          <CategoryList categories={foodCategory} />
          <CategoryList categories={storeCategory} />
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>🍯 꿀조합 랭킹</h2>
        <RecipeRankingList />
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>👑 상품 랭킹</h2>
        <ProductRankingList />
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>📝 리뷰 랭킹</h2>
      </section>
    </>
  );
};

export default Home;
