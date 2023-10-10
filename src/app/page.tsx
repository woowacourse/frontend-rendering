import Image from 'next/image';
import styles from './home.module.css';

export default function Home() {
  return (
    <>
      <Image
        className={styles.banner}
        src='/banner.png'
        width={600}
        height={360}
        alt='배너'
      />
    </>
  );
}
