import Image from "@/components/common/Image/Image";
import LandingButton from "../LandingButton/LandingButton";
import styles from "./LandingMainSection.module.css";
import ArrowIcon from "@/components/common/ArrowIcon/ArrowIcon";

const LandingMainSection = () => {
  return (
    <main>
      <div className={styles.mainSectionHeader}>
        <div className={styles.mainSectionContents}>
          <h2 className={styles.headerText}>
            <span className={styles.emphasis}>하루</span>스터디만의
            <br />
            학습 사이클을 통해
            <br />
            효율적으로 학습해보세요.
          </h2>
          <LandingButton />
        </div>
        <div className={styles.heroImage}>
          <Image
            webpUrl="/assets/heroImage.webp"
            originUrl="/assets/heroImage.jpg"
            alt="목표, 학습, 회고 스탭"
          />
        </div>
      </div>
      <div className={styles.loadMoreContents}>
        <h2 className={styles.cycleDescription}>
          하루스터디만의 학습 사이클이란?
        </h2>
        <ArrowIcon direction="down" />
      </div>
    </main>
  );
};

export default LandingMainSection;
