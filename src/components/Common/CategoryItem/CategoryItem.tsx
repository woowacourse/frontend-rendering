import Image from 'next/image';

import styles from './categoryItem.module.css';

interface CategoryItemProps {
  name: string;
  image: string;
}

const CategoryItem = ({ name, image }: CategoryItemProps) => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default CategoryItem;
