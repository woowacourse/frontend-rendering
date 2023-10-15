'use client';
import styles from './error.module.css';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>데이터를 불러 올 수 없습니다.</h2>
      <button className={styles.button} onClick={() => reset()}>
        다시 불러오기
      </button>
    </div>
  );
}
