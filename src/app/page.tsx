import Header from "@/components/common/Header/Header";
import styles from "./landing.module.css";
import LandingMainSection from "@/components/landing/LandingMainSection/LandingMainSection";

export default function Landing() {
  return (
    <>
      <div className={styles.landingHeader}>
        <Header />
      </div>
      <div className={styles.landingContents}>
        <LandingMainSection />
      </div>
    </>
  );
}
