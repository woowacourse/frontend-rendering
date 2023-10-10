import { getBestTopics, getNewestTopics, getTopics } from '@/apis/topics';
import PageContent from './page-content';

async function Home() {
  const topics = await getTopics();
  const newestTopics = await getNewestTopics();
  const bestTopics = await getBestTopics();

  return <PageContent topics={topics} newestTopics={newestTopics} bestTopics={bestTopics} />;
}

export default Home;
