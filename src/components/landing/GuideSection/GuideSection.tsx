import color from '@/styles/color';
import StudyEffectGuide from '../StudyEffectGuide/StudyEffectGuide';
import StudyStepGuide from '../StudyStepGuide/StudyStepGuide';
import { description, introduce, layout, title } from './guideSection.css';

const GuideSection = () => {
  return (
    <section className={layout}>
      <div className={introduce}>
        <h2 className={title}>하루스터디 학습 사이클</h2>
        <p className={description}>
          한 사이클마다{' '}
          <span style={{ color: color.blue[500] }}>목표 설정 단계</span>,{' '}
          <span style={{ color: color.red[500] }}>학습 단계</span>,{' '}
          <span style={{ color: color.teal[500] }}>회고 단계</span>로 구성되어
          있으며,
          <br />세 가지 단계를 짧은 주기로 여러번 반복하여 학습합니다.
        </p>
      </div>
      <StudyStepGuide />
      <StudyEffectGuide />
    </section>
  );
};

export default GuideSection;
