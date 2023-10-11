import React from "react";
import Layout from "@/layout/Layout";
import PostTagList from "@/components/PostTagList/PostTagList";
import Avatar from "@/components/common/Avatar/Avatar";
import Button from "@/components/common/Button/Button";
import { REVIEW_STATUS_LABEL_TEXT } from "@/constants/index";
import Label from "@/components/common/Label/Label";
import * as S from "./pageStyled";
import { getRunnerPostDetail } from "@/apis/apis";
import GuideContents from "@/components/GuideContents/GuideContents";
import Image from "next/image";

interface Props {
  params: {
    id: number;
  };
}

const RunnerPostPage = async ({ params }: Props) => {
  const runnerPostId = Number(params.id);

  const runnerPostDetail = await getRunnerPostDetail(runnerPostId);

  console.log(runnerPostDetail);

  return (
    <Layout>
      <S.RunnerPostContainer>
        <S.PostContainer>
          <S.PostHeaderContainer>
            <Label
              width="131px"
              height="33px"
              fontSize="16px"
              colorTheme={
                runnerPostDetail.reviewStatus === "DONE"
                  ? "GRAY"
                  : runnerPostDetail.reviewStatus === "IN_PROGRESS"
                  ? "RED"
                  : "WHITE"
              }
            >
              {REVIEW_STATUS_LABEL_TEXT[runnerPostDetail.reviewStatus]}
            </Label>
            <S.PostDeadlineContainer>
              <S.PostDeadline>{runnerPostDetail.deadline.replace("T", " ")} 까지</S.PostDeadline>
              <S.EditLinkContainer
                $isOwner={
                  runnerPostDetail.isOwner &&
                  runnerPostDetail.reviewStatus !== "IN_PROGRESS" &&
                  runnerPostDetail.reviewStatus !== "DONE"
                }
              >
                <S.EditLink>삭제</S.EditLink>
              </S.EditLinkContainer>
            </S.PostDeadlineContainer>
            <S.PostTitleContainer>
              <S.PostTitle>{runnerPostDetail.title}</S.PostTitle>
              <S.InformationContainer>
                <S.statisticsContainer>
                  <S.statisticsImage src="/eye-icon.svg" />
                  <S.statisticsText>{runnerPostDetail.watchedCount}</S.statisticsText>
                  <S.statisticsImage src="/eye-icon.svg" />
                  <S.statisticsText>{runnerPostDetail.applicantCount}</S.statisticsText>
                </S.statisticsContainer>
              </S.InformationContainer>
            </S.PostTitleContainer>
          </S.PostHeaderContainer>
          <S.PostBodyContainer>
            <S.GuideContentsContainer>
              <GuideContents
                title="무엇을 구현하였나요?"
                contents={runnerPostDetail.implementedContents}
              />
              <GuideContents
                title="아쉬운 점이나 궁금한 점이 있나요?"
                contents={runnerPostDetail.curiousContents}
              />
              {runnerPostDetail.postscriptContents && (
                <GuideContents
                  title="서포터에게 하고싶은 말이 있나요?"
                  contents={runnerPostDetail.postscriptContents}
                />
              )}
            </S.GuideContentsContainer>
            <S.BottomContentContainer>
              <S.LeftSideContainer>
                <S.ProfileContainer>
                  <Avatar imageUrl={runnerPostDetail.runnerProfile.imageUrl} />
                  <S.Profile>
                    <S.Name>{runnerPostDetail.runnerProfile.name}</S.Name>
                    <S.Job>{runnerPostDetail.runnerProfile.company}</S.Job>
                  </S.Profile>
                </S.ProfileContainer>
                <PostTagList tags={runnerPostDetail.tags} />
              </S.LeftSideContainer>
              <S.RightSideContainer>
                <Button colorTheme="BLACK" fontWeight={700}>
                  <S.Anchor href={runnerPostDetail.pullRequestUrl} target="_blank">
                    <Image width={25} height={25} src="/github-icon.svg" alt="깃허브" />
                    <S.GoToGitHub>코드 보러가기</S.GoToGitHub>
                  </S.Anchor>
                </Button>
                {runnerPostDetail.isOwner ||
                runnerPostDetail.isApplied ||
                runnerPostDetail.reviewStatus !== "NOT_STARTED" ? null : (
                  <Button colorTheme="WHITE" fontWeight={700}>
                    리뷰 제안하기
                  </Button>
                )}
              </S.RightSideContainer>
            </S.BottomContentContainer>
          </S.PostBodyContainer>
        </S.PostContainer>
      </S.RunnerPostContainer>
    </Layout>
  );
};

export default RunnerPostPage;
