import { Comment } from '@type/comment';

import { getSSRFetch } from '@utils/fetch';

const BASE_URL = process.env.NEXT_PUBLIC_ENV_BASE_URL ?? '';

export interface CommentResponse {
  id: number;
  member: {
    id: number;
    nickname: string;
  };
  content: string;
  createdAt: string;
  updatedAt: string;
}

export type CommentRequest = Pick<CommentResponse, 'content'>;

export const transformCommentListResponse = (
  commentList: CommentResponse[]
): Comment[] => {
  return commentList.map((comment) => ({
    id: comment.id,
    content: comment.content,
    createdAt: comment.createdAt,
    member: comment.member,
    isEdit: comment.createdAt !== comment.updatedAt,
  }));
};

export const getCommentList = async (postId: number): Promise<Comment[]> => {
  const commentList = await getSSRFetch<CommentResponse[]>(
    `${BASE_URL}/api/comment`
  );

  return transformCommentListResponse(commentList);
};
