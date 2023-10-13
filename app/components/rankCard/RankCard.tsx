import styles from "./styles.module.css";
import { PiHeartFill } from "react-icons/pi";
import Image from "next/image";

const RankCard = (props: Cafe) => {
  const { rank, name, address, image, likeCount } = props;
  return (
    <article className={styles.container}>
      <div className={styles.cafeRankContainer}>
        <span className={styles.cafeRank}>{rank}</span>
      </div>
      <div className={styles.cafeDetailContainer}>
        <div className={styles.cafeDetailSummaryContainer}>
          <Image
            src={`https://yozm.cafe/images/100/${image}`}
            alt="카페 대표이미지"
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
          />
          <div className={styles.titleAndAddressContainer}>
            <h1 className={styles.title}>{name}</h1>
            <span>{address}</span>
          </div>
        </div>
        <div className={styles.cafeLikeInfoContainer}>
          <div>
            <PiHeartFill size="0.875rem" color="#F08080" />
          </div>
          <span className={styles.LikeCount}>{likeCount}</span>
        </div>
      </div>
    </article>
  );
};

export default RankCard;
