import { fetchCategory } from '@/apis/fetchCategory';
import { fetchProductRanking } from '@/apis/productRanking';
import { fetchRecipeRanking } from '@/apis/recipeRanking';
import { CategoryList } from '@/components/Common/index';
import { ProductRankingList, RecipeRankingList } from '@/components/Ranking';
import Image from 'next/image';

import styles from './home.module.css';

export default async function Home() {
  const { products } = await fetchProductRanking();
  const { recipes } = await fetchRecipeRanking();
  const foodCategories = await fetchCategory('food');
  const storeCategories = await fetchCategory('store');

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
        <h2 className={styles.title}>카테고리</h2>
        <CategoryList categories={foodCategories} />
        <CategoryList categories={storeCategories} />
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>🍯 꿀조합 랭킹</h2>
        <RecipeRankingList recipes={recipes} />
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>상품 랭킹</h2>
        <ProductRankingList products={products} />
      </section>
    </>
  );
}
