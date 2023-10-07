import { Suspense } from 'react';
import Image from 'next/image';

import { getCategories } from '@/apis/category';
import { CategoryList } from '@/components/category';
import { RecipeRanking } from '@/components/ranking';
import { IMAGE_URL } from '@/constants';

import styles from './home.module.css';
import { getRecipeRanking } from '@/apis/ranking';

const Home = async () => {
  const foodCategoryData = getCategories('food');
  const storeCategoryData = getCategories('store');
  const recipeRankingData = getRecipeRanking();

  const [foodCategories, storeCategories, { recipes }] = await Promise.all([
    foodCategoryData,
    storeCategoryData,
    recipeRankingData,
  ]);

  return (
    <>
      <Image
        src={`${IMAGE_URL}banner.png`}
        className={styles.bannerImage}
        width={600}
        height={360}
        alt='이벤트 배너'
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
        {/*<Suspense fallback={<div>로딩중...</div>}>*/}
        <RecipeRanking recipes={recipes} />
        {/*</Suspense>*/}
      </section>
    </>
  );
};

export default Home;
