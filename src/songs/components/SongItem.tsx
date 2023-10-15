'use client';
import Spacing from '@/common/Spacing';
import Thumbnail from './Thumbnail';
import styles from './SongItem.module.css';
import Link from 'next/link';

interface SongItemProps {
  id: number;
  rank: number;
  title: string;
  singer: string;
  albumCoverUrl: string;
  totalLikeCount: number;
  genre: string;
}

const SongItem = ({ id, albumCoverUrl, title, singer, genre }: SongItemProps) => {
  return (
    <Link href={`songs/${id}/${genre}`} className={styles.flex}>
      <Thumbnail size="xl" src={albumCoverUrl} />
      <Spacing direction="vertical" size={4} />
      <div className={styles.songTitle}>{title}</div>
      <div className={styles.singer}>{singer}</div>
    </Link>
  );
};

export default SongItem;
