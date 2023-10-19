import Image from "next/image";
import styles from "./styles.module.scss";

interface WaterMarkImageProps {
  waterMark?: string;
  imageUrl: string;
  sns: string;
}

const getImgUrl = (imgUrl: string, type: "webp" | "jpeg") =>
  `https://www.celuveat.com/images-data/${type}/${imgUrl}.${type}`;

function WaterMarkImage({ waterMark, imageUrl, sns }: WaterMarkImageProps) {
  const onClickWaterMark = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (sns === "INSTAGRAM")
      window.open(
        `https://www.instagram.com/${waterMark?.substring(1)}`,
        "_blank"
      );
    if (sns === "YOUTUBE")
      window.open(`https://www.youtube.com/${waterMark}`, "_blank");
  };

  return (
    <div className={styles.container}>
      <picture>
        <source type="images/webp" srcSet={getImgUrl(imageUrl, "webp")} />
        <source type="images/jpeg" srcSet={getImgUrl(imageUrl, "jpeg")} />
        <img
          className={styles.image}
          src={getImgUrl(imageUrl, "jpeg")}
          alt="음식점"
          loading="lazy"
        />
      </picture>
      {waterMark && (
        <div
          className={styles.waterMark}
          onClick={onClickWaterMark}
          aria-hidden="true"
        >
          {waterMark}
        </div>
      )}
    </div>
  );
}

export default WaterMarkImage;
