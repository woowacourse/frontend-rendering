import { useToast } from '@hooks';

import NarrowTemplateHeader from '@components/common/NarrowTemplateHeader';
import TagButton from '@components/common/TagButton';
import Toast from '@components/common/Toast';
import Post from '@components/post/Post';

import { checkClosedPost } from '@utils/time/checkClosedPost';

import copyURL from '@assets/chain.svg';

import * as S from './style';
import Image from 'next/image';
import { transformPostResponse } from '@api/post';
import { MOCK_GUEST_POST_INFO } from '@mocks/post';
import BottomButtonPart from './BottomButtonPart';
import CommentList from '@components/CommentList';

export default function PostDetail() {
  const { isToastOpen, openToast, toastMessage } = useToast();

  const postDataFallback = transformPostResponse(MOCK_GUEST_POST_INFO);

  const isWriter = false;

  const isClosed = checkClosedPost(postDataFallback.deadline);

  const controlPost = {
    setEarlyClosePost: () => {},
    deletePost: () => {},
    reportPost: async (reason: string) => {},
    reportNickname: async (reason: string) => {},
    copyPostURL: () => {
      const currentURL = window.location.href;
      navigator.clipboard
        .writeText(currentURL)
        .then(() => {
          openToast('게시물 URL이 클립보드에 복사되었습니다.');
        })
        .catch((error) => {
          console.error('URL 복사 실패:', error);
          openToast(
            'URL을 클립보드에 복사하는 동안 오류가 발생했습니다. 다시 시도해주세요.'
          );
        });
    },
  };

  return (
    <>
      <S.MainContainer>
        <S.TagButtonWrapper $isWriter={isWriter}>
          <TagButton
            aria-label="게시글 링크 복사"
            size="sm"
            onClick={controlPost.copyPostURL}
          >
            <Image src={copyURL} alt="링크 복사 아이콘" />
          </TagButton>
        </S.TagButtonWrapper>
        <Post postInfo={postDataFallback} isPreview={false} />
        <BottomButtonPart handleEvent={{ openToast }} />
      </S.MainContainer>
      <S.BottomContainer>
        <CommentList
          postId={postDataFallback.postId}
          postWriterName={postDataFallback.writer.nickname}
        />
      </S.BottomContainer>
      {isToastOpen && (
        <Toast size="md" position="bottom">
          {toastMessage}
        </Toast>
      )}
    </>
  );
}
