import Image from 'next/image';
import * as styles from './banner.css';

const Banner = () => {
  return (
    <div className={styles.bannerBackground}>
      <Image width={904} height={240} src="/event_banner.webp" alt="Event Banner" className={styles.bannerContents} />
    </div>
  );
};

export default Banner;
