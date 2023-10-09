import styles from './productRankingItem.module.css';
import Image from 'next/image';

interface ProductRankingItemProps {
  name: string;
  image: string | null;
  rank?: number;
}

const ProductRankingItem = ({ name, image, rank }: ProductRankingItemProps) => {
  return (
    <div className={styles.rankingContainer}>
      <p className={styles.rank}>{rank}</p>
      {image ? (
        <Image
          className={styles.productImage}
          src={image}
          width={45}
          height={45}
          alt={`${rank}위 상품`}
        />
      ) : (
        <Image
          className={styles.productImage}
          src={'/characters.svg'}
          width={45}
          height={45}
          alt={`${rank}위 상품`}
        />
      )}
      <p className={styles.productName} aria-label={name}>
        {name}
      </p>
    </div>
  );
};

export default ProductRankingItem;
