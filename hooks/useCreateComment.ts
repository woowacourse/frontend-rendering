import { QUERY_KEY } from "@/constants/queryKey";
import { CommentRequest, createComment } from "../api/comment";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateComment = (postId: number) => {
  const queryClient = useQueryClient();

  const { mutate, isSuccess, isLoading } = useMutation(
    (newComment: CommentRequest) => createComment(postId, newComment),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([
          QUERY_KEY.POSTS,
          postId,
          QUERY_KEY.COMMENTS,
        ]);
      },
      onError: (error) => {
        const message =
          error instanceof Error ? error.message : "댓글 작성을 실패했습니다.";
        alert(message);
      },
    }
  );

  return { mutate, isSuccess, isLoading };
};
