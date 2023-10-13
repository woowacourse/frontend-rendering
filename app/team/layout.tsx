import Header from "@/components/common/Header";
import styles from "./layout.module.css";

const TeamLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.container}>
        <div className={styles.pageWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default TeamLayout;
