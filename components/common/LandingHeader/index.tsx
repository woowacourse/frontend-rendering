import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

const LandingHeader = () => {
  return (
    <Link href={"/"} className={styles.container}>
      <Image src="/logo.svg" alt="팀바팀" width={64} height={64} />
      <h1 className={styles.headerTitle}>팀바팀</h1>
    </Link>
  );
};

export default LandingHeader;
