'use client';

import { useRef, Fragment } from 'react';

import { useMoreComment } from '@hooks';

import SquareButton from '@components/common/SquareButton';

import CommentItem from './CommentItem';
import CommentLoginSection from './CommentLoginSection';
import * as S from './style';
import { smoothScrollToTop } from '@utils/scrollToTop';
import { Comment } from '@type/comment';

interface CommentListProps {
  commentList: Comment[];
  postWriterName: string;
}

export default function CommentList({
  commentList,
  postWriterName,
}: CommentListProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { slicedCommentList, handleMoreComment, hasMoreComment } =
    useMoreComment(commentList ?? []);

  return (
    <S.Container>
      <S.TextOrLoginWrapper>
        <CommentLoginSection name={postWriterName} />
      </S.TextOrLoginWrapper>
      <S.ListContainer>
        {slicedCommentList.map((comment, index) => {
          if (index % 10 === 9) {
            return (
              <Fragment key={comment.id}>
                <CommentItem comment={comment} />
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
          return <CommentItem key={comment.id} comment={comment} />;
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
                '더보기 버튼을 눌러 댓글이 추가되었습니다';
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
