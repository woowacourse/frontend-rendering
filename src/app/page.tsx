import Banner from "@/components/Banner/Banner";
import RunnerPostList from "@/components/RunnerPost/RunnerPostList/RunnerPostList";
import Button from "@/components/common/Button/Button";
import Layout from "@/layout/Layout";
import React from "react";
import * as S from "./pageStyled";
import { getRunnerPost } from "@/apis/apis";

const MainPage = async () => {
  const { data: posts } = await getRunnerPost(10);

  return (
    <Layout maxWidth="none">
      <Banner />
      <S.MainContainer>
        <S.TitleWrapper>
          <S.Title>서포터를 찾고 있어요 👀</S.Title>
        </S.TitleWrapper>
        <S.ControlPanelContainer>
          <S.LeftSideContainer></S.LeftSideContainer>
          <S.RightSideContainer>
            <Button
              width={"190px"}
              colorTheme="WHITE"
              fontSize={"18px"}
              ariaLabel="리뷰 요청 글 작성"
            >
              리뷰 요청 글 작성하기
            </Button>
          </S.RightSideContainer>
        </S.ControlPanelContainer>
        <S.RunnerPostContainer>
          <RunnerPostList posts={posts} />
        </S.RunnerPostContainer>
      </S.MainContainer>
    </Layout>
  );
};

export default MainPage;
