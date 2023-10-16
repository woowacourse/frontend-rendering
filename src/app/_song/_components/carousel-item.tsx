import { toMinSecText } from '@/app/_shared/_utils/convertTime';
import Spacing from '@/app/_shared/_components/spacing';
import styles from './carousel-item.module.css';
import Image from 'next/image';
import Thumbnail from './thumbnail';
import { VotingSong } from '../_types/song.type';
import Link from 'next/link';

type CarouselItemProps = {
  votingSong: VotingSong;
};

export default function CarouselItem({ votingSong }: CarouselItemProps) {
  const { id, singer, title, videoLength, albumCoverUrl } = votingSong;

  return (
    <li className={styles.carouselItem}>
      <Link href={`/collect/${id}`} className={styles.collectingLink}>
        <Thumbnail src={albumCoverUrl} size="xl" borderRadius={4} />
        <Spacing direction={'horizontal'} size={24} />
        <div className={styles.contents}>
          <div className={styles.title}>{title}</div>
          <div className={styles.singer}>{singer}</div>
          <div className={styles.playingTime}>
            <Image className={styles.playIcon} src="/empty-play.svg" alt="play" width={16} height={16} />
            <Spacing direction="vertical" size={2} />
            <span>{toMinSecText(videoLength)}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
