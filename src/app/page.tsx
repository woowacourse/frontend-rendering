import Image from 'next/image';
import styles from './page.module.css';
import { IMAGE_URL } from '@/constants';

export default function Home() {
  return (
    <>
      <section>
        <Image
          className={styles.bannerImage}
          src={`${IMAGE_URL}banner.png`}
          width={600}
          height={360}
          alt='이벤트 배너'
        />
      </section>
      <section></section>
    </>
  );
}
