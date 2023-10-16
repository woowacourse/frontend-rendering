import { Category, CategoryType, fetchCategory } from '@/apis/category';
import CategoryItem from '../CategoryItem/CategoryItem';

import styles from './categoryList.module.css';

interface CategoryListProps {
  categories: Category[];
}

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <div className={styles.container}>
      {categories.map(({ id, name, image }) => (
        <CategoryItem key={id} name={name} image={image} />
      ))}
    </div>
  );
};

export default CategoryList;
