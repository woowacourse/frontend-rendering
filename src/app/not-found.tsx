import Image from 'next/image';

import styles from './not-found.module.css';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/not-found.svg"
        className={styles.img}
        width={400}
        height={400}
        alt="404 이미지"
        priority
      />
      <Link href="/" className={styles.button}>
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFound;
