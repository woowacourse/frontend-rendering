import Image from "@/components/common/Image/Image";
import styles from "./StudyStepGuide.module.css";

const GUIDE = [
  {
    originUrl: "/assets/planningStep.jpg",
    webpUrl: "/assets/planningStep.webp",
    title: "목표 설정 단계",
    description: `학습을 시작하기 전, 학습 목표를 설정하는 단계입니다.
    무엇을 학습할 것인지, 학습에 대한 완료 조건은 무엇인지 생각해 봅니다.
    (사이클 당 시간: 10분 이내)`,
  },
  {
    originUrl: "/assets/studyingStep.jpg",
    webpUrl: "/assets/studyingStep.webp",
    title: "학습 단계",
    description: `학습 목표를 달성하기 위해 열심히 학습하는 단계입니다.
    (사이클 당 시간: 20~60분)`,
  },
  {
    originUrl: "/assets/retrospectStep.jpg",
    webpUrl: "/assets/retrospectStep.webp",
    title: "회고 단계",
    description: `진행한 학습을 되돌아보는 단계입니다.
    회고를 완료했다면, 다시 목표 설정 단계로 돌아갑니다.
    (사이클 당 시간: 10분 이내)`,
  },
] as const;

const StudyStepGuide = () => {
  return (
    <ul className={styles.studyStepGuideLayout}>
      {GUIDE.map(({ originUrl, webpUrl, title, description }, index) => (
        <div
          className={`${styles.stepGuide} ${
            index % 2 === 0 ? styles.isEvenIndex : ""
          }`}
          key={title}
        >
          <div className={styles.stepGuideImage}>
            <Image originUrl={originUrl} webpUrl={webpUrl} alt={title} />
          </div>
          <div className={styles.stepGuideDescription}>
            <h2 className={styles.stepGuideDescriptionHeader}>{title}</h2>
            <p className={styles.stepGuideDescriptionText}>{description}</p>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default StudyStepGuide;
