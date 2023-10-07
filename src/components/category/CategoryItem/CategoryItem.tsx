import Image from 'next/image';

import styles from './categoryItem.module.css';

interface CategoryItemProps {
  name: string;
  image: string;
}

const CategoryItem = ({ name, image }: CategoryItemProps) => {
  return (
    <div className={styles.categoryItem}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={name}
          className={styles.categoryImage}
          width={60}
          height={60}
        />
      </div>
      <span className={styles.categoryName}>{name}</span>
    </div>
  );
};

export default CategoryItem;
