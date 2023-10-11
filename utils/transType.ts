import { CategoryResponse } from "@/types/category";
import { Comment, CommentResponse } from "@/types/comment";
import { PostDetailResponse, PostInfo } from "@/types/post";

export const transformPostResponse = (post: PostDetailResponse): PostInfo => {
  return {
    category: post.categories.map((category) => ({
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
      options: post.voteInfo.options.map((option) => ({
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

export const transformCategoryListResponse = (
  categoryList: CategoryResponse[]
) => {
  return categoryList.map((category) => ({
    id: category.id,
    name: category.name,
    isFavorite: category.isFavorite,
  }));
};
