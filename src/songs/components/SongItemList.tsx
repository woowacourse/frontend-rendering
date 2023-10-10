import SongItem from './SongItem';
import styles from './SongItemList.module.css';
import { Genre, GENRES } from '@/songs/genreConstants';
import { Song } from '@/songs/song.type';
import Spacing from '@/common/Spacing';

interface SongItemListProps {
  genre: Genre;
}

const SongItemList = async ({ genre }: SongItemListProps) => {
  const query = genre === 'ALL' ? '' : `?genre=${genre}`;
  const response = await fetch(`https://dev.s-hook.com/api/songs/high-liked${query}`);
  const songs = (await response.json()) as Song[];

  return (
    <>
      <h2 className={styles.title}>{`${GENRES[genre]} Top 10`}</h2>
      <Spacing direction="vertical" size={16} />
      <ol className={styles.songList}>
        {songs.map(({ id, albumCoverUrl, title, singer, totalLikeCount }, i) => (
          <li key={id} className={styles.li}>
            <SongItem
              rank={i + 1}
              albumCoverUrl={albumCoverUrl}
              title={title}
              singer={singer}
              totalLikeCount={totalLikeCount}
            />
          </li>
        ))}
      </ol>
      <Spacing direction="vertical" size={30} />
    </>
  );
};

export default SongItemList;
