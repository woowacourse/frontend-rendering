import React from "react";
import RunnerPostItem from "../RunnerPostItem/RunnerPostItem";
import { RunnerPost } from "@/types/runnerPost";
import * as S from "./RunnerPostListStyled";

interface Props {
  posts: RunnerPost[];
}

const RunnerPostList = ({ posts }: Props) => {
  return (
    <S.RunnerPostWrapper aria-label="게시글 목록">
      {posts.map((runnerPostData) => (
        <RunnerPostItem key={runnerPostData.runnerPostId} runnerPostData={runnerPostData} />
      ))}
    </S.RunnerPostWrapper>
  );
};

export default RunnerPostList;
