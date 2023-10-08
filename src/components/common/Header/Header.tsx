import Image from 'next/image';

import { SvgIcon } from '..';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src='/logo.svg'
        className={styles.logo}
        width={160}
        height={27}
        alt='FUNEAT Logo'
        priority
      />
      <SvgIcon variant='search' />
    </header>
  );
};

export default Header;
