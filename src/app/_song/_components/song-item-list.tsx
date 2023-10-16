import Link from 'next/link';
import styles from './song-item-list.module.css';
import Spacing from '../../_shared/_components/spacing';
import { GENRES } from '../_constants/constants';
import SongItem from './song-item';
import { Genre, Song } from '../_types/song.type';

async function getSongs(genre: Genre): Promise<Song[]> {
  const query = genre === 'ALL' ? '' : `?genre=${genre}`;
  const response = await fetch(`https://dev.s-hook.com/api/songs/high-liked${query}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('킬링파트를 가져오는데 실패하였습니다.');
  }

  return response.json();
}

type SongItemListProps = {
  genre: Genre;
};

export default async function SongItemList({ genre }: SongItemListProps) {
  const songs = await getSongs(genre);

  if (!songs || songs.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className={styles.title}>{`${GENRES[genre]} Top 10`}</h2>
      <Spacing direction="vertical" size={16} />
      <ul className={styles.songList}>
        {songs?.map(({ id, albumCoverUrl, title, singer, totalLikeCount }, i) => (
          <li key={id} className={styles.songItem}>
            <Link href={`/songs/${id}/${genre}`} aria-label={`${GENRES[genre]} 장르 ${i + 1}등 ${singer} ${title}`}>
              <SongItem albumCoverUrl={albumCoverUrl} title={title} singer={singer} />
            </Link>
          </li>
        ))}
      </ul>
      <Spacing direction="vertical" size={30} />
    </section>
  );
}
