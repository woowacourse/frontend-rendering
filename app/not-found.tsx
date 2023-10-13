import styles from "./not-found.module.css";
import Image from "next/image";
import LandingHeader from "@/components/common/LandingHeader";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <LandingHeader />
      <div className={styles.error404Wrapper}>
        <div className={styles.errorContainer}>
          <Image
            src="/error-404-image.webp"
            alt="해당 페이지를 찾을 수 없어요"
            width="333"
            height="307"
          />
          <div className={styles.errorDetail}>
            <Image
              className={styles.errorTextImg}
              src="/error-404-text.webp"
              alt="404"
              width="231"
              height="102"
            />
            <p className={styles.errorText}>해당 페이지를 찾을 수 없어요!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
