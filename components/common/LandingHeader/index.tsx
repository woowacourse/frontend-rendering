import Image from "next/image";
import styles from "./index.module.css";

const LandingHeader = () => {
  return (
    <div className={styles.container}>
      <Image src="/logo.svg" alt="팀바팀" />
      <h1 className={styles.headerTitle}>팀바팀</h1>
    </div>
  );
};

export default LandingHeader;
