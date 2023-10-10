'use client';

import { styled } from 'styled-components';
// import CarouselItem from '@/features/songs/components/CarouselItem';
// import CollectionCarousel from '@/features/songs/components/CollectionCarousel';
import Spacing from '@/shared/components/Spacing';
import theme from '@/shared/styles/theme';
// import useFetch from '@/shared/hooks/useFetch';
// import fetcher from '@/shared/remotes';
import type { Genre } from '@/features/songs/types/Song.type';
import GENRES from '@/features/songs/constants/genre';
import SongItemList from '@/features/songs/components/SongItemList';

const genres = Object.keys(GENRES) as Genre[];

const MainPage = () => {
  // const { data: votingSongs } = useFetch<VotingSong[]>(() => fetcher('/voting-songs', 'GET'));

  // if (!votingSongs) return null;

  // const isEmptyVotingSongs = votingSongs.length === 0;

  return (
    <Container>
      <Title>현재 킬링파트 등록중인 노래</Title>
      <Spacing direction='vertical' size={16} />
      {/* <CollectionCarousel>
        {isEmptyVotingSongs ? (
          <EmptyMessage>
            <span>수집중인 노래가 곧 등록될 예정입니다.</span>
          </EmptyMessage>
        ) : (
          votingSongs.map(votingSong => {
            return <CarouselItem key={votingSong.id} votingSong={votingSong} />;
          })
        )}
      </CollectionCarousel> */}
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
