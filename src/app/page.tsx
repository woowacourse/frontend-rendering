import Image from 'next/image';

import { getCategories } from '@/apis/category';
import { getProductRanking, getRecipeRanking } from '@/apis/ranking';
import { CategoryList } from '@/components/category';
import { RecipeRanking, ProductRanking } from '@/components/ranking';
import { IMAGE_URL } from '@/constants';

import styles from './home.module.css';

const Home = async () => {
  const foodCategoryData = getCategories('food');
  const storeCategoryData = getCategories('store');
  const recipeRankingData = getRecipeRanking();
  const productRankingData = getProductRanking();

  const [foodCategories, storeCategories, { recipes }, { products }] =
    await Promise.all([
      foodCategoryData,
      storeCategoryData,
      recipeRankingData,
      productRankingData,
    ]);

  return (
    <>
      <Image
        src={`${IMAGE_URL}banner.png`}
        className={styles.bannerImage}
        width={600}
        height={360}
        alt='이벤트 배너'
        priority
      />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>카테고리</h2>
        <div className={styles.categoryWrapper}>
          <CategoryList categories={foodCategories} />
          <CategoryList categories={storeCategories} />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🍯 꿀조합 랭킹</h2>
        <RecipeRanking recipes={recipes} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>👑 상품 랭킹</h2>
        <ProductRanking products={products} />
      </section>
    </>
  );
};

export default Home;
