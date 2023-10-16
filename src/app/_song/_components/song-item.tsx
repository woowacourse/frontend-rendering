import Image from 'next/image';
import styles from './song-item.module.css';
import Spacing from '../../_shared/_components/spacing';

type SongItemProps = {
  title: string;
  singer: string;
  albumCoverUrl: string;
};

export default function SongItem({ albumCoverUrl, title, singer }: SongItemProps) {
  return (
    <div className={styles.container}>
      <Image style={{ borderRadius: '4px' }} src={albumCoverUrl} alt={`${title}-${singer}`} width={120} height={120} />
      <Spacing direction="vertical" size={4} />
      <div className={styles.title}>{title}</div>
      <div className={styles.singer}>{singer}</div>
    </div>
  );
}
