import { ProductRanking } from '@/types/rank';
import ProductRankingItem from '../ProductRankingItem';
import useProductRanking from '@/hooks/useProductRanking';

const ProductRankingList = async () => {
  const productResponse = await useProductRanking();

  return (
    <ul>
      {productResponse.products.map(({ id, name, image }, index) => (
        <li key={id}>
          <ProductRankingItem rank={index + 1} name={name} image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ProductRankingList;
