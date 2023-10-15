import styles from './index.module.css';
import TopicCard from '../TopicCard';
import { getApi } from '@/app/apis/getApi';
import { Topic } from '@/app/types/topic';

interface Props {
  title: string;
  description: string;
}

const TopicCardContainer = async ({ title, description }: Props) => {
  const topics = await getApi<Topic[]>('/topics/bests');

  return (
    <section>
      <div className={styles.info}>
        <div>
          <span className={styles.title}>{title}</span>
          <div className={styles.space} />
          <span className={styles.description}>{description}</span>
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
