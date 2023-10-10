import Banner from '@/components/Banner/Banner';
import Header from '@/components/common/Header/Header';
import * as styles from './main.css';
import RunnerPostList from '@/components/runnerPost/RunnerPostList/RunnerPostList';

export default function Main() {
  return (
    <div>
      <Header />
      <Banner />
      <section className={styles.mainContainer}>
        <header className={styles.titleWrapper}>
          <h1 className={styles.title}>서포터를 찾고 있어요 👀</h1>
        </header>

        <div className={styles.controlPanelContainer}>
          <div className={styles.leftSideContainer}>리뷰 대기중</div>
          <div className={styles.rightSideContainer}>
            <button>리뷰 요청글 작성</button>
          </div>
        </div>

        <div className={styles.runnerPostContainer}>
          <RunnerPostList />
        </div>
      </section>
    </div>
  );
}
