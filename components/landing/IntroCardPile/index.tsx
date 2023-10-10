import TeamCalendarDecoration from "@/components/landing/TeamCalendarDecoration";
import styles from "./index.module.css";

const IntroCardPile = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.card1}`} />
      <div className={`${styles.card} ${styles.card2}`} />
      <div className={`${styles.card} ${styles.card3}`}>
        <TeamCalendarDecoration />
        <div className={styles.blind} />
      </div>
    </div>
  );
};

export default IntroCardPile;
