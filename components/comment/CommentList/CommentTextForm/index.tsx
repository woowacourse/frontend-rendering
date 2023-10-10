import { ChangeEvent, useEffect } from "react";
import { useRouter } from "next/router";

import { useCreateComment } from "@/hooks/useCreateComment";
import { useEditComment } from "@/hooks/useEditComment";
import { POST_COMMENT } from "@/constants/policy";
import { useText } from "@/hooks/useText";
import { Comment } from "@/types/comment";
import SquareButton from "@/components/SquareButton";

import * as S from "./style";

interface CommentTextFormProps {
  commentId: number;
  initialComment: Comment;
  handleCancelClick?: () => void;
}

export default function CommentTextForm({
  commentId,
  initialComment,
  handleCancelClick,
}: CommentTextFormProps) {
  const {
    text: content,
    handleTextChange,
    resetText,
    addText: addContent,
  } = useText(initialComment.content);

  const router = useRouter();
  const { postId } = router.query as { postId: string };

  const isEdit = initialComment.id !== -1;

  const {
    mutate: createComment,
    isSuccess: isCreateSuccess,
    isLoading: createLoading,
  } = useCreateComment(Number(postId));
  const {
    mutate: editComment,
    isSuccess: isEditSuccess,
    isLoading: editLoading,
  } = useEditComment(Number(postId), commentId);

  const handleUpdateComment = () => {
    if (content.trim() === "") {
      alert("댓글에 내용을 입력해주세요.");
      return;
    }
    if (isEdit) {
      editComment({
        ...initialComment,
        content,
      });
      return;
    }
    createComment({ content });
  };

  useEffect(() => {
    isCreateSuccess && resetText();
  }, [isCreateSuccess]);

  useEffect(() => {
    isEditSuccess && handleCancelClick && handleCancelClick();
  }, [isEditSuccess]);

  return (
    <S.Container>
      <S.TextArea
        aria-label={isEdit ? "댓글 수정" : "댓글 작성"}
        value={content}
        placeholder="댓글을 입력해주세요. &#13;&#10;타인의 권리를 침해하거나 도배성/광고성/음란성 내용을 포함하는 경우, 댓글의 운영 원칙 및 관련 법률에 의하여 제재를 받을 수 있습니다."
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          handleTextChange(e, POST_COMMENT)
        }
      />
      <S.ButtonContainer>
        {isEdit && (
          <S.ButtonWrapper>
            <SquareButton
              aria-label="댓글 취소"
              onClick={handleCancelClick}
              theme="gray"
              type="button"
            >
              취소
            </SquareButton>
          </S.ButtonWrapper>
        )}
        <S.ButtonWrapper>
          <SquareButton
            aria-label="댓글에 링크 넣기"
            onClick={() => addContent("[[괄호 안에 링크 작성]] ")}
            theme="blank"
            type="button"
          >
            링크 넣기
          </SquareButton>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <SquareButton
            aria-label="댓글 저장"
            onClick={handleUpdateComment}
            theme={createLoading || editLoading ? "gray" : "fill"}
            type="button"
            disabled={isEdit ? editLoading : createLoading}
          >
            저장
          </SquareButton>
        </S.ButtonWrapper>
      </S.ButtonContainer>
    </S.Container>
  );
}
