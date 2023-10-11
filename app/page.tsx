'use client';

import { getCommentList } from '@api/comment';
import { getPostForGuest } from '@api/post';
import Layout from '@components/common/Layout';
import PostDetail from '@components/post/PostDetail';
import { Category } from '@type/category';
import { Comment } from '@type/comment';
import { PostInfo } from '@type/post';

interface HomeProps {
  post: PostInfo;
  commentList: Comment[];
}

export default async function Home() {
  const { commentList, post } = await getProjects();

  return (
    <Layout isSidebarVisible isMobileDefaultHeaderVisible>
      <PostDetail post={post} commentList={commentList} />
    </Layout>
  );
}

async function getProjects() {
  const postId = 10009;

  const post = await getPostForGuest(postId);
  const commentList = await getCommentList(postId);

  return { post, commentList };
}
