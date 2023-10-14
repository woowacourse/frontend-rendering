'use client';

import styles from './error.module.css';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = (props: ErrorProps) => {
  const { error, reset } = props;

  return (
    <div className={styles.container}>
      <h2>⛔️ {error.message}</h2>
      <button className={styles.reset} onClick={reset}>
        다시 시도하기
      </button>
    </div>
  );
};

export default Error;
