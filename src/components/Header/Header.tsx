import Link from 'next/link';
import Image from 'next/image';
import styled from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styled.pageHeader}>
        <Link href='/'>
          <Image
            alt='logo'
            src='/images/stampcrush_logo.svg'
            width={132}
            height={25}
          />
        </Link>
      </header>
    </>
  );
};

export default Header;
