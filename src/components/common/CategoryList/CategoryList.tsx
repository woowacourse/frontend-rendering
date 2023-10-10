import styles from './categoryList.module.css';
import CategoryItem from '../CategoryItem';

import { CategoryVariant } from '@/constants';
import useCategory from '@/hooks/useCategory';

interface CategoryListProps {
  menuVariant: CategoryVariant;
}

const CategoryList = async ({ menuVariant }: CategoryListProps) => {
  const categoriesResponse = await useCategory(menuVariant);

  return (
    <ul className={styles.container}>
      {categoriesResponse.map(({ id, name, image }) => (
        <li key={id}>
          <CategoryItem name={name} image={image} />
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
