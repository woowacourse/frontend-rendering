'use client';
import styles from './Header.module.css';
import logo from '@/assets/logo.png';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.container}>
      <Image className={styles.logo} src={logo} alt="logo" aria-hidden="true" width={180} />
      <button
        className={styles.loginButton}
        onClick={() => {
          alert('로그인 페이지로 이동');
        }}
      >
        로그인
      </button>
    </header>
  );
};

export default Header;
