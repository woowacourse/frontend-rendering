import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className={styles.header} tabIndex={0}>
        <div className={styles.innerContainer}>
          <Link href={"/team"}>
            <Image src={"/logo.svg"} alt="팀바팀" width={60} height={60} />
          </Link>
          <div>
            <div className={styles.teamBadge} />
            <div className={styles.teamNameWrapper}>
              <div className={styles.teamName}>가짜 팀바팀 1조</div>
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <div className={styles.teamPlaceInfoButton}>
            <Image src={"/team.svg"} alt="팀정보보기" width={44} height={44} />
          </div>

          <div className={styles.divider} />

          <div className={styles.userInfoButton}>
            <Image
              className={styles.profileImage}
              width={40}
              height={40}
              src={"/cute.jpg"}
              alt="프로필 사진"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
