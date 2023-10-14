import CommentList from "@/components/comment/CommentList";
import NarrowTemplateHeader from "@/components/NarrowTemplateHeader";
import TagButton from "@/components/TagButton";

import { checkClosedPost } from "@/utils/checkClosedPost";

import copyURL from "@/assets/chain.svg";

import BottomButtonPart from "../BottomButtonPart";
import InnerHeaderPart from "../InnerHeaderPart";

import * as S from "./style";
import Image from "next/image";
import Post from "@/components/Post";
import { getFetch } from "@/utils/fetch";
import { PostDetailResponse } from "@/types/post";
import { CommentResponse } from "@/types/comment";
import {
  transformCommentListResponse,
  transformPostResponse,
} from "@/utils/transType";

const BASE_URL = process.env.NEXT_PUBLIC_ENV_VOTOGETHER_BASE_URL;

async function getPost(postId: number) {
  const post = await getFetch<PostDetailResponse>(
    `${BASE_URL}/posts/${postId}/guest`,
    { cache: "no-store" }
  );

  return transformPostResponse(post);
}

async function getCommentList(postId: number) {
  const commentList = await getFetch<CommentResponse[]>(
    `${BASE_URL}/posts/${postId}/comments`,
    { cache: "no-store" }
  );

  return transformCommentListResponse(commentList);
}

const PostDetail = async () => {
  const postInfo = await getPost(10004);
  const commentList = await getCommentList(10004);

  const isWriter = false;
  const isClosed = checkClosedPost(postInfo.deadline);

  const movePage = {
    moveWritePostPage: () => {},
    movePostListPage: () => {
      alert("현재 해당 기능은 지원하지 않습니다.");
    },
    moveVoteStatisticsPage: () => {},
  };

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
          alert("게시물 URL이 클립보드에 복사되었습니다.");
        })
        .catch((error) => {
          alert(
            "URL을 클립보드에 복사하는 동안 오류가 발생했습니다. 다시 시도해주세요."
          );
        });
    },
  };

  return (
    <>
      <S.HeaderContainer>
        <NarrowTemplateHeader>
          <InnerHeaderPart
            isClosed={isClosed}
            isWriter={isWriter}
            handleEvent={{ movePage, controlPost }}
            isEventLoading={{
              isDeletePostLoading: false,
              isReportPostLoading: false,
              isReportNicknameLoading: false,
            }}
          />
        </NarrowTemplateHeader>
      </S.HeaderContainer>
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
        <Post postInfo={postInfo} isPreview={false} />
        <BottomButtonPart
          isClosed={isClosed}
          isWriter={isWriter}
          handleEvent={{
            movePage,
            controlPost,
            openToast: () => alert("지원하지 않는 기능입니다."),
          }}
          isEventLoading={{
            isDeletePostLoading: false,
            isReportPostLoading: false,
            isReportNicknameLoading: false,
          }}
        />
      </S.MainContainer>
      <S.BottomContainer>
        <CommentList
          postWriterName={postInfo.writer.nickname}
          commentList={commentList}
        />
      </S.BottomContainer>
    </>
  );
};

export default PostDetail;
