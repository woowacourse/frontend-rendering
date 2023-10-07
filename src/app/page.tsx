import Image from 'next/image';

import { getCategories } from '@/apis/category';
import { CategoryList } from '@/components/category';
import { IMAGE_URL } from '@/constants';

import styles from './home.module.css';

const Home = async () => {
  const foodCategoryData = getCategories('food');
  const storeCategoryData = getCategories('store');

  const [foodCategories, storeCategories] = await Promise.all([
    foodCategoryData,
    storeCategoryData,
  ]);

  return (
    <>
      <section>
        <Image
          src={`${IMAGE_URL}banner.png`}
          className={styles.bannerImage}
          width={600}
          height={360}
          alt='이벤트 배너'
        />
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>카테고리</h2>
        <div className={styles.categoryWrapper}>
          <CategoryList categories={foodCategories} />
          <CategoryList categories={storeCategories} />
        </div>
      </section>
    </>
  );
};

export default Home;
