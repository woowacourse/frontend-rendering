import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" aria-label="shook 홈으로 가기">
        <div className={styles.logoContainer}>
          <Image src="/logo.png" alt="shook logo" style={{ objectFit: 'contain' }} fill />
        </div>
      </Link>
      <Link className={styles.login} href="/login">
        로그인
      </Link>
    </header>
  );
}
