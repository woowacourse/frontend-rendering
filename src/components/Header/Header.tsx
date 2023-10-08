import Link from 'next/link';
import HeaderContainer from './style';
import Image from 'next/image';

const Header = () => {
  return (
    <HeaderContainer>
      <Link href='/'>
        <div>
          <Image
            alt='logo'
            src='/images/stampcrush_logo.svg'
            width={132}
            height={25}
          />
        </div>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
