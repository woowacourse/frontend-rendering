import GoalIcon from "@/components/common/GoalIcon/GoalIcon";
import PencilIcon from "@/components/common/PencilIcon/PencilIcon";
import TimeLineIcon from "@/components/common/TimeLineIcon/TimeLineIcon";

import styles from "./StudyEffectGuide.module.css";

const STUDY_EFFECT = [
  {
    icon: <GoalIcon color="#3b82f6" />,
    title: "목표 설정",
    description: `한 사이클의 학습을 시작하기 전, 학습목표와 완료 조건을 설정해 학습 방향성과 동기 부여를 제공합니다.`,
  },
  {
    icon: <PencilIcon color="#38848a" />,
    title: "회고",
    description: `한 사이클의 학습이 끝난 후, 학습에 대해 스스로 피드백합니다. 피드백을 통해 전보다 더 개선된 학습이 되도록 합니다.`,
  },
  {
    icon: <TimeLineIcon color="#171717" />,
    title: "단계별 타이머",
    description: `단계별로 시간을 제한하여 학습을 하는 동안 집중력을 잃지 않도록 도와줍니다.`,
  },
];

const StudyEffectGuide = () => {
  return (
    <div className={styles.studyEffectGuideLayout}>
      <h2 className={styles.studyEffectHeader}>사이클 요소 별 학습 효과</h2>
      <ul className={styles.studyEffectList}>
        {STUDY_EFFECT.map(({ icon, title, description }) => (
          <li className={styles.studyEffectItem} key={title}>
            <h6 className={styles.studyEffectTitle}>
              {icon}
              {title}
            </h6>
            <p className={styles.studyEffectDescription}>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudyEffectGuide;
