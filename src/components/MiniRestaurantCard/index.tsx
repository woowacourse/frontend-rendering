import styles from "./styles.module.scss";
import type { Celeb, Restaurant } from "@/app/types";
import Love from "@/assets/love.svg";
import Star from "@/assets/star.svg";
import WaterMarkImage from "../WaterMarkImage";

interface MiniRestaurantCardProps {
  restaurant: Restaurant;
  celebs: Celeb[];
  setHoveredId?: React.Dispatch<React.SetStateAction<number | null>>;
  flexColumn?: boolean;
  showWaterMark?: boolean;
}

function MiniRestaurantCard({ restaurant }: MiniRestaurantCardProps) {
  const { images, name, roadAddress, category } = restaurant;

  const rating = 5;

  return (
    <>
      <li
        className={styles.container}
        data-cy="음식점 카드"
        aria-label={`${name} 카드`}
        tabIndex={0}
      >
        <section className={styles.imageSection}>
          <WaterMarkImage imageUrl={images[0].name} sns={images[0].sns} />

          <button
            className={styles.likeButton}
            aria-label="좋아요"
            type="button"
          >
            <Love
              width={20}
              fill={"#000"}
              fillOpacity={0.8}
              aria-hidden="true"
            />
          </button>
        </section>
        <section className={styles.infoSection}>
          <section className={styles.infoTopSection}>
            <h5 className={styles.name} role="columnheader">
              {name}
            </h5>
            <span className={styles.rating}>
              <Star /> {rating.toFixed(2)}
            </span>
          </section>
          <span className={styles.category}>{category}</span>
          <span className={styles.address}>{roadAddress}</span>
        </section>
      </li>
    </>
  );
}

export default MiniRestaurantCard;
