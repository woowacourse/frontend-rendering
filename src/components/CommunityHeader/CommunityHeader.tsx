import CommunityHeaderImage from "../../assets/svg/TripsHeader.svg";
import styles from "./style.module.scss";

const CommunityHeader = () => {
  return (
    <section className={styles.communityHeader}>
      <CommunityHeaderImage className={styles.imageStyling} />
      <h3 className={styles.headingStyling}>
        우리의 여행 기록,{" "}
        <span className={styles.headingEmphasisStyling}>행록</span>
      </h3>
    </section>
  );
};

export default CommunityHeader;
