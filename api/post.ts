import { PostInfo } from '@type/post';
import { StringDate } from '@type/time';
import { getSSRFetch } from '@utils/fetch';

const BASE_URL = process.env.NEXT_PUBLIC_ENV_BASE_URL ?? '';

interface WrittenVoteOptionTypeResponse {
  optionId: number;
  content: string;
  voteCount: number;
  votePercent: number;
  imageUrl: string;
}

export interface PostDetailResponse {
  postId: number;
  title: string;
  writer: { id: number; nickname: string };
  content: string;
  imageUrl: string;
  categories: { id: number; name: string }[];
  createdAt: StringDate;
  deadline: StringDate;
  imageCount: number;
  commentCount: number;
  voteInfo: {
    selectedOptionId: number;
    totalVoteCount: number;
    options: WrittenVoteOptionTypeResponse[];
  };
}

export const transformPostResponse = (post: PostDetailResponse): PostInfo => {
  return {
    category: post.categories.map(category => ({
      id: category.id,
      name: category.name,
    })),
    content: post.content,
    deadline: post.deadline,
    imageUrl: post.imageUrl,
    postId: post.postId,
    createTime: post.createdAt,
    imageCount: post.imageCount,
    commentCount: post.commentCount,
    title: post.title,
    voteInfo: {
      allPeopleCount: post.voteInfo.totalVoteCount,
      selectedOptionId: post.voteInfo.selectedOptionId,
      options: post.voteInfo.options.map(option => ({
        id: option.optionId,
        text: option.content,
        peopleCount: option.voteCount,
        percent: option.votePercent,
        imageUrl: option.imageUrl,
      })),
    },
    writer: {
      id: post.writer.id,
      nickname: post.writer.nickname,
    },
  };
};

export interface OptionData {
  originOptionId: number;
  newOptionId: number;
}

export const getPostForGuest = async (postId: number): Promise<PostInfo> => {
  const post = await getSSRFetch<PostDetailResponse>(
    `${BASE_URL}/posts/${postId}/guest`
  );

  return transformPostResponse(post);
};
