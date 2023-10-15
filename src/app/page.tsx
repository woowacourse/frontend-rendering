import Banner from '@/components/Banner/Banner';
import Header from '@/components/common/Header/Header';
import * as styles from './main.css';
import RunnerPostList from '@/components/runnerPost/RunnerPostList/RunnerPostList';
import { getRunnerPost } from '@/api/runnerPost';

export default async function Main() {
  const posts = await getRunnerPost();

  return (
    <div>
      <Header />
      <Banner />
      <section className={styles.mainContainer}>
        <header className={styles.titleWrapper}>
          <h1 className={styles.title}>서포터를 찾고 있어요 👀</h1>
        </header>

        <div className={styles.runnerPostContainer}>
          <RunnerPostList posts={posts.data} />
        </div>
      </section>
    </div>
  );
}
