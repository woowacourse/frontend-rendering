import TopicList from "./(home)/_components/TopicList";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section>
      <div className={styles.titleContainer}>
        <div>
          <div className={styles.title}>인기 급상승할 지도</div>
          <div className={styles.space} />
          <div className={styles.description}>
            즐겨찾기가 많이 된 지도를 확인해보세요.
          </div>
        </div>
        <div>
          <span className={styles.showMore}>전체 보기</span>
        </div>
      </div>
      <div className={styles.space4} />
      <TopicList />
    </section>
  );
}
