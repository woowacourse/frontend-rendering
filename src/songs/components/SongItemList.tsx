import SongItem from './SongItem';
import styles from './SongItemList.module.css';
import { Genre, GENRES } from '@/songs/genreConstants';
import { Song } from '@/songs/song.type';
import Spacing from '@/common/Spacing';
import { BASE_URL } from '@/env.constant';

interface SongItemListProps {
  genre: Genre;
}

const SongItemList = async ({ genre }: SongItemListProps) => {
  const response = await fetch(`${BASE_URL}/songs/high-liked?genre=${genre}`);
  const songs = (await response.json()) as Song[];

  if (!response.ok) {
    throw new Error();
  }

  return (
    <>
      <h2 className={styles.title}>{`${GENRES[genre]} Top 10`}</h2>
      <Spacing direction="vertical" size={16} />
      <ol className={styles.songList}>
        {songs.map(({ id, albumCoverUrl, title, singer, totalLikeCount }, i) => (
          <li key={`${id}${genre}`} className={styles.li}>
            <SongItem
              id={id}
              rank={i + 1}
              albumCoverUrl={albumCoverUrl}
              title={title}
              singer={singer}
              totalLikeCount={totalLikeCount}
              genre={genre}
            />
          </li>
        ))}
      </ol>
      <Spacing direction="vertical" size={30} />
    </>
  );
};

export default SongItemList;
