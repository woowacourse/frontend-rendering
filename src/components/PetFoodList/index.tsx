import styles from './index.module.css';
import PetFoodItem from '@/components/PetFoodItem';
import { getPetFoods } from '@/apis/petFoods';

const PetFoodList = async () => {
  const petFoods = await getPetFoods();

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
