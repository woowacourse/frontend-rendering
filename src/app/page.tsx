import CarouselItem from './_song/_components/carousel-item';
import CollectionCarousel from './_song/_components/collection-carousel';
import { GENRES } from './_song/_constants/constants';
import styles from './page.module.css';
import SongItemList from './_song/_components/song-item-list';
import Spacing from './_shared/_components/spacing';
import { Genre } from './_song/_types/song.type';
import CarouselSkeleton from './_song/_components/carousel-skeleton';

type VotingSong = {
  id: number;
  title: string;
  singer: string;
  videoLength: number;
  albumCoverUrl: string;
};

async function getVotingSongs(): Promise<VotingSong[]> {
  const response = await fetch('https://dev.s-hook.com/api/voting-songs');

  if (!response.ok) {
    throw new Error('투표할 노래를 가져오는데 실패하였습니다.');
  }

  return response.json();
}

export default async function Home() {
  const genres = Object.keys(GENRES) as Genre[];

  const votingSongs = await getVotingSongs();

  const isEmptyVotingSongs = votingSongs.length === 0;

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>현재 킬링파트 등록중인 노래</h2>
      <Spacing direction="vertical" size={16} />
      <CollectionCarousel>
        {isEmptyVotingSongs ? (
          <li className={styles.emptyMessage}>
            <span>수집중인 노래가 곧 등록될 예정입니다.</span>
          </li>
        ) : (
          votingSongs.map((votingSong) => <CarouselItem key={votingSong.id} votingSong={votingSong} />)
        )}
      </CollectionCarousel>
      <Spacing direction="vertical" size={24} />
      {genres.map((genre) => (
        <SongItemList key={genre} genre={genre} />
      ))}
    </main>
  );
}
