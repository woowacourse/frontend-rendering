import RunnerPostList from '../../components/RunnerPost/RunnerPostList/RunnerPostList';
import Button from '../../components/Button/Button';
import Layout from '../../components/layout/Layout';
import { ReviewStatus, ReviewStatusFilter } from '../../types/runnerPost';
import React from 'react';
import * as S from './MainPage.style';
import { getRunnerPost } from '@/apis/apis';

const MainPage = async () => {
  const runnerPostList = await getRunnerPost({ limit: 10 });

  return (
    <S.MainContainer>
      <S.TitleWrapper>
        <S.Title>서포터를 찾고 있어요 👀</S.Title>
      </S.TitleWrapper>
      <S.RunnerPostContainer>
        <RunnerPostList posts={runnerPostList.data} />
      </S.RunnerPostContainer>
    </S.MainContainer>
  );
};

export default MainPage;
