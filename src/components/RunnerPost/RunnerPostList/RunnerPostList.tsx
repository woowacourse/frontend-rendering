import React from "react";
import { styled } from "styled-components";
import RunnerPostItem from "../RunnerPostItem/RunnerPostItem";
import { getRunnerPost } from "@/apis/apis";

const RunnerPostList = async () => {
  const posts = await getRunnerPost(10);

  return (
    <S.RunnerPostWrapper aria-label="게시글 목록">
      {posts.data.map((runnerPostData) => (
        <RunnerPostItem key={runnerPostData.runnerPostId} runnerPostData={runnerPostData} />
      ))}
    </S.RunnerPostWrapper>
  );
};

export default RunnerPostList;

const S = {
  RunnerPostWrapper: styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    width: 100%;

    @media (max-width: 768px) {
      gap: 20px;
    }
  `,
};
