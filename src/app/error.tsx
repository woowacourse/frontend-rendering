'use client';

import styles from './error.module.css';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  const errorMessage = error.message ?? '알 수 없는 오류가 발생했습니다.';

  return (
    <section className={styles.error}>
      <h2 className={styles.title}>{errorMessage}</h2>
      <button type='button' onClick={reset} className={styles.resetButton}>
        다시 시도하기
      </button>
    </section>
  );
};

export default Error;
