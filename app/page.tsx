'use client';

import Post from '@components/post/Post';
import { MOCK_GUEST_POST_INFO } from '@mocks/post';
import { transformPostResponse } from '@api/post';
import Layout from '@components/common/Layout';

export default function Home() {
  return (
    <Layout isSidebarVisible isMobileDefaultHeaderVisible>
      <Post
        isPreview={false}
        postInfo={transformPostResponse(MOCK_GUEST_POST_INFO)}
      />
    </Layout>
  );
}
