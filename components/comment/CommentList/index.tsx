"use client";

import { useRef, Fragment } from "react";

import SquareButton from "@/components/SquareButton";

import { smoothScrollToTop } from "@/utils/scrollToTop";

import CommentItem from "./CommentItem";
import CommentLoginSection from "./CommentLoginSection";
import CommentTextForm from "./CommentTextForm";
import { COMMENT_USER } from "./constants";
import * as S from "./style";
import { useCommentList } from "@/hooks/useCommentList";
import { useMoreComment } from "@/hooks/useMoreComment";

interface CommentListProps {
  postId: number;
  postWriterName: string;
}

const initialComment = {
  id: -1,
  member: {
    id: -1,
    nickname: "",
  },
  content: "",
  createdAt: "",
  isEdit: false,
};

export default function CommentList({
  postId,
  postWriterName,
}: CommentListProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { data: commentList } = useCommentList(postId);
  const isGuest = true;

  const { slicedCommentList, handleMoreComment, hasMoreComment } =
    useMoreComment(commentList ?? []);

  return (
    <S.Container>
      <S.TextOrLoginWrapper>
        {isGuest ? (
          <CommentLoginSection name={postWriterName} />
        ) : (
          <CommentTextForm commentId={-1} initialComment={initialComment} />
        )}
      </S.TextOrLoginWrapper>
      <S.ListContainer>
        {slicedCommentList.map((comment, index) => {
          if (index % 10 === 9) {
            return (
              <Fragment key={comment.id}>
                <CommentItem comment={comment} userType={COMMENT_USER.GUEST} />
                <S.HiddenInput
                  ref={inputRef}
                  maxLength={0}
                  aria-label={`${index + 1}번째 댓글입니다`}
                  role="contentinfo"
                  inputMode="none"
                />
              </Fragment>
            );
          }
          return (
            <CommentItem
              key={comment.id}
              comment={comment}
              userType={COMMENT_USER.GUEST}
            />
          );
        })}
      </S.ListContainer>
      {hasMoreComment && (
        <S.MoreButtonWrapper>
          <SquareButton
            onClick={() => {
              if (!inputRef.current) return;

              handleMoreComment();
              inputRef.current.focus();
              inputRef.current.ariaLabel =
                "더보기 버튼을 눌러 댓글이 추가되었습니다";
            }}
            theme="fill"
            aria-label="댓글 더보기"
          >
            더보기
          </SquareButton>
        </S.MoreButtonWrapper>
      )}
      <S.ButtonContainer>
        <S.TopButtonWrapper>
          <SquareButton onClick={smoothScrollToTop} theme="blank">
            TOP
          </SquareButton>
        </S.TopButtonWrapper>
      </S.ButtonContainer>
    </S.Container>
  );
}
