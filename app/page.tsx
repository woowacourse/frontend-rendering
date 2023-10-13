import LandingHeader from "@/components/common/LandingHeader";
import styles from "./page.module.css";
import Link from "next/link";
import IntroCardPile from "@/components/landing/IntroCardPile";

const Home = () => {
  return (
    <main>
      <div className={styles.container}>
        <LandingHeader />
        <div className={styles.mainContainer}>
          <div className={styles.main}>
            <h2 className={styles.mainPrefix}>쉽고 간단한 팀플 플랫폼,</h2>
            <h2 className={styles.mainTitle}>팀바팀</h2>
            <div className={styles.loreTextContainer}>
              <p className={styles.mainLore}>팀 프로젝트의 모든 것을</p>
              <p className={styles.mainLore}>팀바팀으로 관리해보세요.</p>
            </div>
            <Link href={"/team/link"} className={styles.googleLoginButton}>
              <div className={styles.googleLoginButtonAppearance}>
                <div className={styles.googleLoginText}>로그인 하기</div>
              </div>
            </Link>
          </div>
        </div>
        <IntroCardPile />
      </div>
    </main>
  );
};

export default Home;
