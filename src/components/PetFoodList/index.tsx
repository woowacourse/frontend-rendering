import styles from './index.module.css';
import { GetPetFoodsRes } from '@/types/petFoods';
import PetFoodItem from '@/components/PetFoodItem';

const { BASE_URL } = process.env;

const PetFoodList = async () => {
  const { petFoods }: GetPetFoodsRes = await fetch(`${BASE_URL}/api/pet-foods`, {
    cache: 'force-cache',
  })
    .then((res) => res.json())
    .catch(() => {
      throw new Error('사료 목록을 불러오지 못했어요.');
    });

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
