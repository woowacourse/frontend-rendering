import styles from './SongDetailItem.module.css';
import Thumbnail from '@/songs/components/Thumbnail';
import { SongDetail } from '@/songs/song.type';

interface SongDetailItemProps {
  detail: SongDetail;
}
const SongDetailItem = ({ detail }: SongDetailItemProps) => {
  const { id, singer, title, albumCoverUrl } = detail;
  return (
    <div className={styles.container} role="article" data-song-id={id}>
      <div className={styles.flex}>
        <div className={styles.columnFlex}>
          <div className={styles.songInfoContainer}>
            <Thumbnail src={albumCoverUrl} size="md" />
            <div className={styles.info}>
              <div className={styles.songTitle} aria-label={`노래 ${title}`}>
                {title}
              </div>
              <div className={styles.singer} aria-label={`가수 ${singer}`}>
                {singer}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>페이지 준비중입니다...</div>
    </div>
  );
};

export default SongDetailItem;
