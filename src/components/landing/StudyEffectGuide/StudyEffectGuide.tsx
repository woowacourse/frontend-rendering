import GoalIcon from '@/components/icons/GoalIcon';
import PencilIcon from '@/components/icons/PencilIcon';
import TimeLineIcon from '@/components/icons/TimeLineIcon';
import color from '@/styles/color';
import {
  layout,
  studyEffectDescription,
  studyEffectItem,
  studyEffectList,
  studyEffectTitle,
  title,
} from './studyEffectGuide.css';

const STUDY_EFFECT = [
  {
    icon: <GoalIcon color={color.blue[500]} />,
    title: '목표 설정',
    description: `한 사이클의 학습을 시작하기 전, 학습목표와 완료 조건을 설정해 학습 방향성과 동기 부여를 제공합니다.`,
  },
  {
    icon: <PencilIcon color={color.teal[500]} />,
    title: '회고',
    description: `한 사이클의 학습이 끝난 후, 학습에 대해 스스로 피드백합니다. 피드백을 통해 전보다 더 개선된 학습이 되도록 합니다.`,
  },
  {
    icon: <TimeLineIcon color={color.neutral[900]} />,
    title: '단계별 타이머',
    description: `단계별로 시간을 제한하여 학습을 하는 동안 집중력을 잃지 않도록 도와줍니다.`,
  },
];

const StudyEffectGuide = () => {
  return (
    <div className={layout}>
      <h2 className={title}>사이클 요소 별 학습 효과</h2>
      <ul className={studyEffectList}>
        {STUDY_EFFECT.map(({ icon, title, description }) => (
          <li className={studyEffectItem} key={title}>
            <h6 className={studyEffectTitle}>
              {icon}
              {title}
            </h6>
            <p className={studyEffectDescription}>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudyEffectGuide;
