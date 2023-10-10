import styled from 'styled-components';
import Spacing from '@/shared/components/Spacing';

import { getHighLikedSongs } from '../remotes/song';
import type { Genre, Song } from '../types/Song.type';
import GENRES from '../constants/genre';
import SongItem from './SongItem';

interface SongItemListProps {
  genre: Genre;
}

const SongItemList = async ({ genre }: SongItemListProps) => {
  const songs = await getHighLikedSongs(genre);

  if (songs.length === 0) return;

  return (
    <>
      <Title>{`${GENRES[genre]} Top 10`}</Title>
      <Spacing direction='vertical' size={16} />
      <SongList>
        {songs.map(({ id, albumCoverUrl, title, singer, totalLikeCount }, i) => (
          <Li key={id}>
            <SongItem
              rank={i + 1}
              albumCoverUrl={albumCoverUrl}
              title={title}
              singer={singer}
              totalLikeCount={totalLikeCount}
            />
          </Li>
        ))}
      </SongList>
      <Spacing direction='vertical' size={30} />
    </>
  );
};

export default SongItemList;

const SongList = styled.ol`
  scroll-snap-type: x mandatory;

  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: flex-start;

  width: 100%;
`;

const Li = styled.li`
  scroll-snap-align: center;
  scroll-snap-stop: normal;
  max-width: 120px;
`;

const Title = styled.h2`
  align-self: flex-start;
  font-size: 18px;
  font-weight: 700;
  color: white;
`;
