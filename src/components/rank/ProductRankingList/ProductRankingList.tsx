import ProductRankingItem from '../ProductRankingItem';
import { getProductRanking } from '@/apis/rank';

const ProductRankingList = async () => {
  const productResponse = await getProductRanking();

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
