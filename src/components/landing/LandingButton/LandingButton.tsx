'use client';

import Button from '@/components/common/Button/Button';
import { buttonContainer } from './landingButton.css';

const LandingButton = () => {
  const handleClickStartButton = () => {
    window.alert('하루스터디 시작하기');
  };

  return (
    <div className={buttonContainer}>
      <Button onClick={handleClickStartButton}>하루스터디 시작하기</Button>
    </div>
  );
};

export default LandingButton;
