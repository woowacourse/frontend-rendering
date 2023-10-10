import Header from "@/components/common/Header/Header";
import LandingMainSection from "@/components/landing/LandingMainSection/LandingMainSection";
import GuideSection from "@/components/landing/GuideSection/GuideSection";
import StartSection from "@/components/landing/StartSection/StartSection";
import styles from "./landing.module.css";
import Footer from "@/components/common/Footer/Footer";

export default function Landing() {
  return (
    <>
      <div className={styles.landingHeader}>
        <Header />
      </div>
      <div className={styles.landingContents}>
        <LandingMainSection />
        <GuideSection />
        <StartSection />
        <Footer />
      </div>
    </>
  );
}
