import { type ProductRanking } from '@/apis/productRanking';
import ProductRankingItem from '../ProductRankingItem/ProductRankingItem';

interface ProductRankingListProps {
  products: ProductRanking[];
}

const ProductRankingList = ({ products }: ProductRankingListProps) => {
  return (
    <ul>
      {products.map(({ id, name, image }, index) => (
        <li key={id}>
          <ProductRankingItem rank={index + 1} name={name} image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ProductRankingList;
