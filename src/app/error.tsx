'use client';

import { useEffect } from 'react';
import styles from './error.module.css';
import Spacing from './_shared/_components/spacing';
import Image from 'next/image';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <h2 className={styles.errorTitle}>ERROR</h2>
      <Spacing direction="vertical" size={18} />
      <Image
        src="/error-crying-conan.jpeg"
        alt="error"
        width={200}
        height={200}
        style={{ borderRadius: '50%', objectFit: 'cover' }}
      />
      <Spacing direction="vertical" size={18} />
      <p>{error.message}</p>
      <Spacing direction="vertical" size={18} />
      <button className={styles.resetButton} onClick={() => reset()}>
        다시 시도하기
      </button>
    </div>
  );
}
