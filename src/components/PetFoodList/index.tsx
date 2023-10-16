import { getPetFoods } from '@/apis/petFoods';
import PetFoodItem from '../PetFoodItem';
import styles from './index.module.css';

const PetFoodList = async () => {
  const { petFoods } = await getPetFoods();

  return (
    <div className={styles.petFoodListWrapper}>
      <ul className={styles.petFoodListGrid}>
        {petFoods.map((petFood) => (
          <PetFoodItem key={petFood.id} {...petFood} />
        ))}
      </ul>
    </div>
  );
};

export default PetFoodList;
