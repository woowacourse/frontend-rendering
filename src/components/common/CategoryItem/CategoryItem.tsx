import Image from 'next/image';
import styles from './CategoryItem.module.css';

interface CategoryItemProps {
  name: string;
  image: string;
}

const CategoryItem = ({ name, image }: CategoryItemProps) => {
  return (
    <button className={styles.categoryButton}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.categoryImage}
          src={image}
          width={60}
          height={60}
          alt={name}
        />
      </div>
      <p className={styles.categoryName}>{name}</p>
    </button>
  );
};

export default CategoryItem;
