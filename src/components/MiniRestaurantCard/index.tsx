import styles from "./styles.module.scss";
import type { Celeb, Restaurant } from "@/app/types";
import Love from "@/assets/love.svg";
import Star from "@/assets/star.svg";
import WaterMarkImage from "../WaterMarkImage";
import Link from "next/link";

interface MiniRestaurantCardProps {
  restaurant: Restaurant;
  celebs: Celeb[];
  setHoveredId?: React.Dispatch<React.SetStateAction<number | null>>;
  flexColumn?: boolean;
  showWaterMark?: boolean;
}

function MiniRestaurantCard({
  restaurant: { id, images, name, roadAddress, category },
  celebs,
}: MiniRestaurantCardProps) {
  const rating = 5;

  return (
    <>
      <Link
        href={`/restaurants/${id}?celebId=${celebs[0].id}`}
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
          <div className={styles.infoTopSection}>
            <div className={styles.name} role="columnheader">
              {name}
            </div>
            <span className={styles.rating}>
              <Star /> {rating.toFixed(2)}
            </span>
          </div>
          <span className={styles.category}>{category}</span>
          <span className={styles.address}>{roadAddress}</span>
        </section>
      </Link>
    </>
  );
}

export default MiniRestaurantCard;
