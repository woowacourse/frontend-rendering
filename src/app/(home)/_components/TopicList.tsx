import TopicCard from "./TopicCard";
import styles from "./TopicList.module.css";

const Topics = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function TopicList() {
  return (
    <ul className={styles.TopicList}>
      {Topics.map((topic) => (
        <TopicCard key={topic} />
      ))}
    </ul>
  );
}
