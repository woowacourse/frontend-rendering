"use client";

import { Suspense } from "react";

import { PostInfo } from "@/types/post";
import { ReportRequest } from "@/types/report";

import { usePostDetail } from "@/hooks/usePostDetail";

import CommentList from "@/components/comment/CommentList";
import NarrowTemplateHeader from "@/components/NarrowTemplateHeader";
import Skeleton from "@/components/Skeleton";
import TagButton from "@/components/TagButton";

import { checkClosedPost } from "@/utils/checkClosedPost";

import copyURL from "@/assets/chain.svg";

import BottomButtonPart from "../BottomButtonPart";
import InnerHeaderPart from "../InnerHeaderPart";

import * as S from "./style";
import Image from "next/image";
import Post from "@/components/Post";

export default function PostDetail() {
  const postId = 1;
  const isLoggedIn = false;

  const { data: postData } = usePostDetail(isLoggedIn, postId);

  const postDataFallback = postData ?? ({} as PostInfo);

  const isWriter = false;
  const isClosed = checkClosedPost(postDataFallback.deadline);

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
    reportPost: async (reason: string) => {
      const reportData: ReportRequest = { type: "POST", id: postId, reason };
    },
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
        <Post postInfo={postDataFallback} isPreview={false} />
        <BottomButtonPart
          isClosed={isClosed}
          isWriter={isWriter}
          handleEvent={{ movePage, controlPost, openToast: alert }}
          isEventLoading={{
            isDeletePostLoading: false,
            isReportPostLoading: false,
            isReportNicknameLoading: false,
          }}
        />
      </S.MainContainer>
      <S.BottomContainer>
        <Suspense fallback={<Skeleton isLarge={false} />}>
          <CommentList
            postId={postId}
            postWriterName={postDataFallback.writer.nickname}
          />
        </Suspense>
      </S.BottomContainer>
    </>
  );
}
