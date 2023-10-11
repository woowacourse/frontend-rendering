import TagButton from '@components/common/TagButton';
import Post from '@components/post/Post';

import copyURL from '@assets/chain.svg';

import * as S from './style';
import Image from 'next/image';
import BottomButtonPart from './BottomButtonPart';
import CommentList from '@components/CommentList';
import { getPostForGuest } from '@api/post';
import { getCommentList } from '@api/comment';

export default async function PostDetail() {
  const postId = 100033;

  const post = await getPostForGuest(postId);
  const commentList = await getCommentList(postId);

  const isWriter = false;

  const controlPost = {
    setEarlyClosePost: () => {},
    deletePost: () => {},
    reportPost: async (reason: string) => {},
    reportNickname: async (reason: string) => {},
    copyPostURL: () => {
      const currentURL = window.location.href;
      navigator.clipboard.writeText(currentURL).catch((error) => {
        console.error('URL 복사 실패:', error);
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
        <Post postInfo={post} isPreview={false} />
        <BottomButtonPart handleEvent={{ openToast: () => {} }} />
      </S.MainContainer>
      <S.BottomContainer>
        <CommentList
          commentList={commentList}
          postWriterName={post.writer.nickname}
        />
      </S.BottomContainer>
    </>
  );
}
