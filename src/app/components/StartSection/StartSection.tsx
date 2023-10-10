import LandingButton from '../LandingButton/LandingButton';
import { description, layout } from './startSection.css';

const StartSection = () => {
  return (
    <div className={layout}>
      <h4 className={description}>하루스터디를 시작해볼까요?</h4>
      <LandingButton />
    </div>
  );
};

export default StartSection;
