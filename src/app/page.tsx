import { getTopics } from '@/apis/topics';
import PageContent from './page-content';

async function Home() {
  const topics = await getTopics();

  return <PageContent topics={topics} />;
}

export default Home;
