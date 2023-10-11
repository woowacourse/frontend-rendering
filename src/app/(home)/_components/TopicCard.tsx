import Image from "next/image";
import styles from "./topicCard.module.css";
export default function TopicCard() {
  return (
    <li className={styles.topicCardWrapper}>
      <div className={styles.topicCard}>
        <Image
          className={styles.topicImage}
          src="/defaultImage.png"
          alt="Create Next App logo"
          width={138}
          height={138}
        />
        <div className={styles.topicInfo}>
          <div className={styles.topicNameWrapper}>
            <span className={styles.topicName}>지도 이름</span>
          </div>
          <span className={styles.creator}>박근철</span>
          <div className={styles.space} />
          <span className={styles.date}>2023.08.17</span>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <Image
                src="/smallTopicPin.svg"
                alt="smallTopicPin"
                width={11}
                height={16}
              />
              <div className={styles.space} />
              <span className={styles.iconText}>1개</span>
            </div>
            <div className={styles.icon}>
              <Image
                src="/smallTopicStar.svg"
                alt="smallTopicStar"
                width={18}
                height={16}
              />
              <div className={styles.space} />
              <span className={styles.iconText}>1개</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
