import Link from 'next/link';
import { emphasis, layout, title } from './header.css';

const Header = () => {
  return (
    <div className={layout}>
      <Link href="/">
        <h1 className={title}>
          <span className={emphasis}>하루</span>스터디
        </h1>
      </Link>
    </div>
  );
};

export default Header;
