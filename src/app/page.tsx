import styles from './page.module.css';
import TopicCardContainer from './components/TopicCardContainer';

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <TopicCardContainer
          title="인기 급상승할 지도?"
          description="즐겨찾기가 많이 된 지도를 확인해보세요."
        />

        <div className={styles.space} />

        <TopicCardContainer
          title="새로울 지도?"
          description="방금 핀이 추가된 지도를 확인해보세요."
        />

        <div className={styles.space} />

        <TopicCardContainer
          title="모두일 지도?"
          description="괜찮을지도의 모든 지도를 확인해보세요."
        />

        <div className={styles.space} />
      </div>
    </>
  );
}
