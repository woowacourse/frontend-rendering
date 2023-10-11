'use client';

import Layout from '@components/common/Layout';
import PostDetail from '@components/post/PostDetail';

export default function Home() {
  return (
    <Layout isSidebarVisible isMobileDefaultHeaderVisible>
      <PostDetail />
    </Layout>
  );
}
