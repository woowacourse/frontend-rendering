import Image from 'next/image';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLink}>
        <Image src="/home.svg" alt="모아보기" width={36} height={36} />
        <span>모아보기</span>
      </div>
      <div className={styles.navLink}>
        <Image src="/calendar.svg" alt="캘린더" width={36} height={36} />
        <span>캘린더</span>
      </div>
      <div className={styles.navLink}>
        <Image src="/feed.svg" alt="피드" width={36} height={36} />
        <span>피드</span>
      </div>
      <div className={styles.navLink}>
        <Image src="/chain.svg" alt="logo" width={36} height={36} />
        <span>링크</span>
      </div>
      <div className={styles.navLink}>
        <Image src="/team-add.svg" alt="팀 참가/개설" width={36} height={36} />
        <span>팀 참가/개설</span>
      </div>
    </nav>
  );
};

export default NavigationBar;
