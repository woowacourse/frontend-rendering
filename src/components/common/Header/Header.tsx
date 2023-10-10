import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerLayout}>
      <h1 className={styles.headerText}>
        <span className={styles.emphasis}>하루</span>스터디
      </h1>
    </header>
  );
};

export default Header;
