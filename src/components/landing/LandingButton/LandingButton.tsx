'use client';

import Button from '@/components/common/Button/Button';
import { buttonContainer } from './landingButton.css';
import Link from 'next/link';

const LandingButton = () => {
  return (
    <Link href="/" className={buttonContainer}>
      <Button>하루스터디 시작하기</Button>
    </Link>
  );
};

export default LandingButton;
