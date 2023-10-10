import { fetchProductRanking } from '@/apis/productRanking';
import { fetchRecipeRanking } from '@/apis/recipeRanking';
import { ProductRankingList, RecipeRankingList } from '@/components/Ranking';
import Image from 'next/image';
import styles from './home.module.css';

export default async function Home() {
  const { products } = await fetchProductRanking();
  const { recipes } = await fetchRecipeRanking();

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
