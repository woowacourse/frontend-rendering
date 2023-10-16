'use client';

import styles from './not-found.module.css';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.status}>Something went wrong!</h1>
      <div className={styles.errorMessage}>
        <p>{error.message}</p>
      </div>
      <button onClick={() => reset()}>다시 시도하기</button>
    </div>
  );
}
