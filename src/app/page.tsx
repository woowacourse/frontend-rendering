import styles from './page.module.css';
import Spacing from '@/common/Spacing';
import { GENRES_LIST } from '@/songs/genreConstants';
import SongItemList from '@/songs/components/SongItemList';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>현재 인기있는 노래</h2>
      <Spacing direction="vertical" size={24} />
      {GENRES_LIST.map((genre) => (
        <SongItemList key={genre} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;
