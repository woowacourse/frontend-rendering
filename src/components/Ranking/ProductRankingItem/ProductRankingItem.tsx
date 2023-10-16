import styles from './productRankingItem.module.css';
import Image from 'next/image';

interface ProductRankingItemProps {
  name: string;
  image: string | null;
  rank?: number;
}

const ProductRankingItem = ({ name, image, rank }: ProductRankingItemProps) => {
  return (
    <div className={styles.container} tabIndex={0}>
      <p className={styles.rank}>{rank}</p>
      <Image
        className={styles.productPreviewImage}
        src={image ?? './characters.svg'}
        alt={`${rank}위 상품`}
        width={45}
        height={45}
      />
      <p className={styles.productName} aria-label={name}>
        {name}
      </p>
    </div>
  );
};

export default ProductRankingItem;
