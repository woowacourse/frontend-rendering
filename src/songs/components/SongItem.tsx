'use client';

import Spacing from '@/common/Spacing';
import Thumbnail from './Thumbnail';
import styles from './SongItem.module.css';

interface SongItemProps {
  rank: number;
  title: string;
  singer: string;
  albumCoverUrl: string;
  totalLikeCount: number;
}

const SongItem = ({ albumCoverUrl, title, singer }: SongItemProps) => {
  return (
    <div
      className={styles.flex}
      onClick={() => {
        alert('페이지 이동...');
      }}
    >
      <Thumbnail size="xl" src={albumCoverUrl} />
      <Spacing direction="vertical" size={4} />
      <div className={styles.songTitle}>{title}</div>
      <div className={styles.singer}>{singer}</div>
    </div>
  );
};

export default SongItem;
