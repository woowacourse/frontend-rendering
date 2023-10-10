'use client';

import { styled } from 'styled-components';
import Spacing from '@/shared/components/Spacing';
import theme from '@/shared/styles/theme';
import type { Genre } from '@/features/songs/types/Song.type';
import GENRES from '@/features/songs/constants/genre';
import SongItemList from '@/features/songs/components/SongItemList';

const genres = Object.keys(GENRES) as Genre[];

const MainPage = () => {
  return (
    <Container>
      <Title>현재 인기있는 노래</Title>
      <Spacing direction='vertical' size={16} />

      <Spacing direction='vertical' size={24} />
      {genres.map(genre => (
        <SongItemList key={genre} genre={genre} />
      ))}
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: ${theme.headerHeight.desktop};

  @media (max-width: ${theme.breakPoints.xs}) {
    padding-top: ${theme.headerHeight.mobile};
  }

  @media (max-width: ${theme.breakPoints.xxs}) {
    padding-top: ${theme.headerHeight.xxs};
  }
`;

const Title = styled.h2`
  align-self: flex-start;
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

const EmptyMessage = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 350px;
`;
