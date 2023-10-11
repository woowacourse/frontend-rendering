import Image from 'next/image';
import styles from './index.module.css';
import { PetFood } from '@/types/petFoods';

type PetFoodItemProps = PetFood;

const PetFoodItem = (petFoodItemProps: PetFoodItemProps) => {
  const { brandName, foodName, imageUrl } = petFoodItemProps;

  return (
    <li className={styles.petFoodItemWrapper}>
      <div className={styles.petFoodImageWrapper}>
        <Image
          className={`${styles.petFoodImage} ${styles.skeleton}`}
          src={imageUrl}
          alt={foodName}
          width={800}
          height={800}
        />
      </div>
      <h4 className={styles.brandName}>{brandName}</h4>
      <h3 className={styles.foodName}>{foodName}</h3>
    </li>
  );
};

export default PetFoodItem;
