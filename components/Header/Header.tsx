import Image from 'next/image';
import styles from './Header.module.css';
import Spacing from '../Spacing/Spacing';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <Image src="/logo.svg" alt="logo" width={44} height={60} />
        <div className={styles.teamPlace}>
          <div className={styles.badge} />
          <Spacing size={12} direction="horizontal" />
          <div className={styles.teamNameWrapper}>
            <div />
            <span className={styles.teamName}>팀바팀</span>
            <Image
              src="/arrow-down.svg"
              width={24}
              height={24}
              alt="show more"
            />
          </div>
        </div>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.teamIcon}>
          <Image src="/team.svg" alt="team" width={32} height={32} />
        </div>
        <div className={styles.divider} />
        <Image
          className={styles.googleProfile}
          src="/profile.jpg"
          width={40}
          height={40}
          alt="google profile image"
        />
      </div>
    </header>
  );
};

export default Header;
