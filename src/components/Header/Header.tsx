import Image from 'next/image';
import LoginModalProvider from '../LoginModalProvider/LoginModalProvider';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src='./icons/donggle-logo.svg' width={20} height={20} alt='' />
        동글
      </div>
      <LoginModalProvider size='small' />
    </header>
  );
};

export default Header;
