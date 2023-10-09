import * as styles from './header.css';
import Avatar from '../Avatar/Avatar';

const Header = () => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}></div>
          <div className={styles.menuContainer}>
            <div className={styles.avatarContainer}>
              <Avatar width={35} height={35} imageUrl="https://via.placeholder.com/150" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
