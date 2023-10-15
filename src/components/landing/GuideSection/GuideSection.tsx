import StudyEffectGuide from "../StudyEffectGuide/StudyEffectGuide";
import StudyStepGuide from "../StudyStepGuide/StudyStepGuide";
import styles from "./GuideSection.module.css";

const GuideSection = () => {
  return (
    <section className={styles.guideSectionLayout}>
      <div className={styles.introduce}>
        <h2 className={styles.guideHeaderText}>하루스터디 학습 사이클</h2>
        <p className={styles.guideDescriptionText}>
          한 사이클마다 <span>목표 설정 단계</span>, <span>학습 단계</span>,{" "}
          <span>회고 단계</span>로 구성되어 있으며,
          <br />세 가지 단계를 짧은 주기로 여러번 반복하여 학습합니다.
        </p>
      </div>
      <StudyStepGuide />
      <StudyEffectGuide />
    </section>
  );
};

export default GuideSection;
