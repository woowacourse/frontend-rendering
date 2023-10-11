"use client";

import React from "react";
import Avatar from "@/components/common/Avatar/Avatar";
import { RunnerPost } from "@/types/runnerPost";
import Label from "@/components/common/Label/Label";
import { REVIEW_STATUS_LABEL_TEXT } from "@/constants";
import * as S from "./RunnerPostItemStyled";
import { useRouter } from "next/navigation";

const RunnerPostItem = ({
  runnerPostData: {
    runnerPostId,
    title,
    deadline,
    tags,
    runnerProfile,
    watchedCount,
    applicantCount,
    reviewStatus,
  },
}: {
  runnerPostData: RunnerPost;
}) => {
  const { push } = useRouter();

  return (
    <S.RunnerPostItemContainer onClick={() => push(`/post/${runnerPostId}`)}>
      <S.LeftSideContainer>
        <S.PostTitle>{title}</S.PostTitle>
        <S.DeadLineContainer>
          <S.DeadLine>{deadline.replace("T", " ")} 까지</S.DeadLine>
          <Label
            colorTheme={
              reviewStatus === "NOT_STARTED"
                ? "WHITE"
                : reviewStatus === "IN_PROGRESS"
                ? "RED"
                : "GRAY"
            }
          >
            {REVIEW_STATUS_LABEL_TEXT[reviewStatus]}
          </Label>
        </S.DeadLineContainer>
        <S.TagContainer>
          {tags.map((tag, index) => (
            <S.Tag key={index}>#{tag}</S.Tag>
          ))}
        </S.TagContainer>
      </S.LeftSideContainer>
      <S.RightSideContainer>
        {runnerProfile ? (
          <S.ProfileContainer>
            <Avatar imageUrl={runnerProfile.imageUrl} />
            <S.ProfileName>{runnerProfile.name}</S.ProfileName>
          </S.ProfileContainer>
        ) : null}
        <S.ChatViewContainer>
          <S.statisticsContainer>
            <S.statisticsImage src="/eye-icon.svg" alt="조회수" />
            <S.statisticsText>{watchedCount}</S.statisticsText>
            <S.statisticsImage src="/applicant-icon.svg" alt="리뷰요청수" />
            <S.statisticsText>{applicantCount}</S.statisticsText>
          </S.statisticsContainer>
        </S.ChatViewContainer>
      </S.RightSideContainer>
    </S.RunnerPostItemContainer>
  );
};

export default RunnerPostItem;
