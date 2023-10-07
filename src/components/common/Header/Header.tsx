import Image from 'next/image';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src='/logo.svg' alt='펀잇 로고' width={180} height={30} priority />
    </header>
  );
};

export default Header;
