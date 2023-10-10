'use client';
import styles from './CarouselItem.module.css';
import Thumbnail from '@/songs/components/Thumbnail';
import Spacing from '@/common/Spacing';
import { VotingSong } from '@/songs/song.type';

interface CarouselItemProps {
  votingSong: VotingSong;
}

const CarouselItem = ({ votingSong }: CarouselItemProps) => {
  const { singer, title, albumCoverUrl } = votingSong;

  const goToPartCollectingPage = () => {
    alert('노래 등록 페이지로 이동');
  };

  return (
    <li className={styles.wrapper}>
      <a className={styles.collectingLink} onClick={goToPartCollectingPage}>
        <Thumbnail src={albumCoverUrl} size="xl" borderRadius={4} />
        <Spacing direction={'horizontal'} size={24} />
        <div className={styles.contents}>
          <p className={styles.title}>{title}</p>
          <p className={styles.singer}>{singer}</p>
        </div>
      </a>
    </li>
  );
};

export default CarouselItem;
