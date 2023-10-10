import LandingButton from "../LandingButton/LandingButton";
import styles from "./StartSection.module.css";

const StartSection = () => {
  return (
    <div className={styles.startSectionLayout}>
      <h4 className={styles.startSectionDescription}>
        하루스터디를 시작해볼까요?
      </h4>
      <LandingButton />
    </div>
  );
};

export default StartSection;
