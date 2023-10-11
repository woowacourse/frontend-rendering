import Image from 'next/image';
import Link from 'next/link';
import styles from './not-found.module.css';

const NotFound = () => {
  return (
    <>
      <header className={styles.header}>
        <Image
          src="/zipgo_logo_light.svg"
          width={113}
          height={36}
          alt="집고 로고"
          priority
        />
      </header>
      <section className={styles.backgroundBox}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.subText}>페이지를 찾을 수 없어요</h2>
        <Link href="/" className={styles.button}>
          <Image
            src="/home_icon.svg"
            width={16}
            height={16}
            alt="홈으로 돌아가기 아이콘"
            priority
          />
          홈으로 돌아가기
        </Link>
      </section>
    </>
  );
};

export default NotFound;
