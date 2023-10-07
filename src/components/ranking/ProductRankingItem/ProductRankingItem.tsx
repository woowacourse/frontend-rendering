import Image from 'next/image';

import styles from './productRankingItem.module.css';

interface ProductRankingItemProps {
  rank: number;
  name: string;
  image: string | null;
}

const ProductRankingItem = ({ rank, name, image }: ProductRankingItemProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.rankText}>{rank}</p>
      {image ? (
        <Image
          src={image}
          className={styles.productImage}
          width={45}
          height={45}
          alt={`${rank}위 상품`}
        />
      ) : (
        <Image
          src={'/characters.svg'}
          className={styles.productImage}
          width={45}
          height={45}
          alt={`${rank}위 상품`}
        />
      )}
      <p className={styles.productName}>{name}</p>
    </div>
  );
};

export default ProductRankingItem;
