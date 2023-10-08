'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './error.module.css';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <>
      <header className={styles.header}>
        <Image src='/zipgo_logo_light.svg' width={113} height={36} alt='집고 로고' />
      </header>
      <section className={styles.backgroundBox}>
        <h1 className={styles.errorCode}>Error</h1>
        <div className={`${styles.textBox} ${styles.subText}`}>{error.message}</div>
        <div className='flex'>
          <button type='button' onClick={reset} className={styles.subText}>
            다시 시도하기
          </button>
          <Link href='/' className={styles.subText}>
            홈으로 돌아가기
          </Link>
        </div>
      </section>
    </>
  );
};

export default Error;
