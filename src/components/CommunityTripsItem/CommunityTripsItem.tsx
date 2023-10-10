/* eslint-disable @next/next/no-img-element */

import styles from "./style.module.scss"; // 추가된 부분

import DefaultThumbnail from "../../assets/png/trip_default-thumbnail.png";
import EmptyLike from "../../assets/svg/empty-like.svg";
import Image from "next/image";
import { formatDate } from "../../utils/formatter";
import type { CommunityTripsItemData } from "../../types/trips";

interface CommunityTripsItemProps {
  trip: CommunityTripsItemData;
  index: number;
}

const CommunityTripsItem = ({ index, trip }: CommunityTripsItemProps) => {
  const { imageUrl, title, cities, startDate, endDate, description, writer } =
    trip;

  const coverImage = imageUrl;
  const duration = `${formatDate(startDate)} - ${formatDate(endDate)}`;

  return (
    <li
      style={{ flexDirection: "column", height: "100%" }}
      className={styles.boxStyling}
      tabIndex={index + 5}
      aria-label={`${index + 1}번째 trip, ${title}`}
    >
      <Image
        src={coverImage ?? DefaultThumbnail}
        className={styles.imageStyling}
        alt={`${title} 대표 이미지`}
        width={2000}
        height={2000}
      />
      <div className={styles.informationStyling}>
        <div>
          <div className={styles.badgeBoxStyling}>
            {cities.map((cityTag) => (
              <span
                key={cityTag.id}
                className={`${styles.badgeStyling} default`}
              >
                {cityTag.name}
              </span>
            ))}
          </div>
          <p className={styles.nameStyling}>{title}</p>
          <p className={styles.medium}>{duration}</p>
          <p className={styles.small}>{description}</p>
        </div>
        <div className={styles.communityItemInfoStyling}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              alt="작성자 이미지"
              src={writer.imageUrl}
              className={styles.writerImageStyling}
            />
            <p
              style={{ display: "flex", fontSize: "14px", lineHeight: "20px" }}
            >
              {writer.nickname}
            </p>
          </div>
          <div className={styles.likeCountBoxStyling}>
            <EmptyLike />
            {0}
          </div>
        </div>
      </div>
    </li>
  );
};

export default CommunityTripsItem;
