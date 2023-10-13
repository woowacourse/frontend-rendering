import ProductRankingItem from '../ProductRankingItem';

import { ProductRanking } from '@/apis/ranking';

import styles from './productRanking.module.css';

interface ProductRankingProps {
  products: ProductRanking[];
}

const ProductRanking = ({ products }: ProductRankingProps) => {
  return (
    <ul>
      {products.map(({ id, name, image }, index) => (
        <li key={id} className={styles.rankingItem}>
          <ProductRankingItem rank={index + 1} name={name} image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ProductRanking;
