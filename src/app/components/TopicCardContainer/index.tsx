import { getTopics } from '@/app/apis/topics';
import styles from './index.module.css';
import TopicCard from '../TopicCard';

const TopicCardContainer = async () => {
  const topics = await getTopics();

  return (
    <section>
      <div className={styles.info}>
        <div>
          <span className={styles.title}>asdfsd</span>
          <div className={styles.space} />
          <span className={styles.description}>asdfsdafsdfsadf</span>
        </div>
      </div>

      <div className={styles.space} />
      <div className={styles.space} />
      <div className={styles.space} />
      <div className={styles.space} />
      <div className={styles.space} />

      <div className={styles.topics}>
        {topics &&
          topics.map(
            (topic, index) =>
              index < 6 && (
                <TopicCard
                  key={topic.id}
                  id={topic.id}
                  image={topic.image}
                  name={topic.name}
                  creator={topic.creator}
                  updatedAt={topic.updatedAt}
                  pinCount={topic.pinCount}
                  bookmarkCount={topic.bookmarkCount}
                />
              )
          )}
      </div>
    </section>
  );
};

export default TopicCardContainer;
