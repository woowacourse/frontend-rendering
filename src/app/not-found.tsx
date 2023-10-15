import Image from 'next/image';
import Link from 'next/link';
import styles from './not-found.module.css';
import Spacing from './_shared/_components/spacing';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>404 Not Found</h2>
      <Spacing direction="vertical" size={18} />
      <Image
        src="/404-conan-magnifier.png"
        alt="not found"
        width={200}
        height={200}
        style={{ borderRadius: '50%', objectFit: 'cover' }}
      />
      <Spacing direction="vertical" size={18} />
      <span>현재 페이지는 구현되지 않았거나</span>
      <span>존재하지 않는 페이지입니다.</span>
      <Spacing direction="vertical" size={18} />
      <Link href="/" className={styles.goHomeButton}>
        홈으로 가기
      </Link>
    </div>
  );
}
