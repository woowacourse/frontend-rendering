import Image from "next/image";
import styles from "./topicCard.module.css";
import { TopicCardProps } from "./types";

function formatDate(dateString: string) {
  return dateString.split("T")[0];
}
export default function TopicCard({ topic }: { topic: TopicCardProps }) {
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
            <span className={styles.topicName}>{topic.name}</span>
          </div>
          <span className={styles.creator}>{topic.creator}</span>
          <div className={styles.space} />
          <span className={styles.date}>{formatDate(topic.updatedAt)}</span>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <Image
                src="/smallTopicPin.svg"
                alt="smallTopicPin"
                width={11}
                height={16}
              />
              <div className={styles.space} />
              <span className={styles.iconText}>{topic.pinCount}개</span>
            </div>
            <div className={styles.icon}>
              <Image
                src="/smallTopicStar.svg"
                alt="smallTopicStar"
                width={18}
                height={16}
              />
              <div className={styles.space} />
              <span className={styles.iconText}>{topic.bookmarkCount}개</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
