import Image from 'next/image';
import styles from './page.module.css';
import PetFoodList from '@/components/PetFoodList';

const Home = () => {
  return (
    <div>
      <section className={styles.banner}>
        <div className={styles.titleBox}>
          <h2 className={styles.subTitle}>
            사료 선택이 어려운 <br />
            초보 집사들을 위해
          </h2>
          <h1 className={styles.title}>집사의 고민</h1>
        </div>
        <Image src='/sleeping_dog.webp' alt='자고있는 강아지' width={220} height={210} priority />
      </section>
      <PetFoodList />
    </div>
  );
};

export default Home;
