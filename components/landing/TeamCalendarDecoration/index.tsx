import styles from "./index.module.css";

const TeamCalendarDecoration = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sampleBadge} />
      <div className={styles.calendarHeaderContainer}>
        <p className={styles.calendarHeaderText}>2023-10</p>
      </div>
      <div className={styles.calendarContainer}>
        <div className={styles.calendarTable}>
          {Array.from({ length: 42 }).map((_, index) => (
            <div className={styles.calendarCell} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCalendarDecoration;
