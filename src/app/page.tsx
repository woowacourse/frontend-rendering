import styles from './page.module.css';
import TopicCardContainer from './components/TopicCardContainer';

export default function Home() {
  return (
    <div className={styles.main}>
      <TopicCardContainer />
    </div>
  );
}
