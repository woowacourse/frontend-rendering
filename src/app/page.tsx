"use client";

import Banner from "@/components/Banner/Banner";
import RunnerPostList from "@/components/RunnerPost/RunnerPostList/RunnerPostList";
import Button from "@/components/common/Button/Button";
import Layout from "@/layout/Layout";
import React from "react";
import { styled } from "styled-components";

const MainPage = () => {
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
          <RunnerPostList />
        </S.RunnerPostContainer>
      </S.MainContainer>
    </Layout>
  );
};

export default MainPage;

const S = {
  MainContainer: styled.div`
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;

    @media (max-width: 768px) {
      padding: 0;
    }
  `,

  TitleWrapper: styled.header`
    margin: 72px 0 53px 0;

    @media (max-width: 768px) {
      margin: 40px 0 40px 0;
    }
  `,

  Title: styled.h1`
    font-size: 36px;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  `,

  ControlPanelContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;

    margin-bottom: 36px;

    @media (max-width: 768px) {
      align-items: start;
      flex-direction: column;

      gap: 18px;
    }

    @media (max-height: 768px) {
      margin-bottom: 24px;
    }
  `,

  LeftSideContainer: styled.div`
    display: flex;
    align-items: end;
    gap: 20px;
  `,

  RightSideContainer: styled.div`
    align-self: flex-end;
  `,

  SearchInput: styled.input`
    width: 263px;
    height: 40px;
    padding: 10px 10px;

    font-size: 14px;

    border-radius: 6px;
    border: 1px solid var(--gray-500);
  `,

  SearchLabel: styled.label`
    margin-bottom: 12px;

    font-size: 18px;
  `,

  TagContainer: styled.div`
    display: flex;

    margin-bottom: 3px;
    gap: 10px;
  `,

  RunnerPostContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  `,
};
