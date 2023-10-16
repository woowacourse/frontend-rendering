import TopicCard from "./TopicCard";
import styles from "./TopicList.module.css";
import { TopicCardProps } from "./types";

async function getData(): Promise<TopicCardProps[]> {
  const res = await fetch("https://mapbefine.kro.kr/api/topics/bests");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function TopicList() {
  const data = await getData();
  return (
    <ul className={styles.TopicList}>
      {data.map((topic) => (
        <TopicCard key={topic.id} topic={topic} />
      ))}
    </ul>
  );
}
