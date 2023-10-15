import styles from './page.module.css';
import Spacing from '@/common/Spacing';
import { GENRES_LIST } from '@/songs/genreConstants';
import SongItemList from '@/songs/components/SongItemList';
import CollectionCarousel from '@/songs/components/CollectionCarousel';
import { VotingSong } from '@/songs/song.type';
import CarouselItem from '@/songs/components/CarouselItem';
import { BASE_URL } from '@/env.constant';

const MainPage = async () => {
  const response = await fetch(`${BASE_URL}/voting-songs`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error();
  }

  const votingSongs = (await response.json()) as VotingSong[];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>현재 등록중인 노래</h2>
      <Spacing direction="vertical" size={16} />
      <CollectionCarousel>
        {votingSongs.map((votingSong) => {
          return <CarouselItem key={votingSong.id} votingSong={votingSong} />;
        })}
      </CollectionCarousel>
      <Spacing direction="vertical" size={24} />
      <h2 className={styles.title}>현재 인기있는 노래</h2>
      <Spacing direction="vertical" size={24} />
      {GENRES_LIST.map((genre) => (
        <SongItemList key={genre} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;
