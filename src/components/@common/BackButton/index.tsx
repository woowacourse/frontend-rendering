'use client';

import { useRouter } from 'next/navigation';
import SvgFill from '../SvgIcons/SvgFill';
import { Center } from './BackButton.style';
import theme from 'style/theme.style';

const BackButton = () => {
  const router = useRouter();

  return (
    <Center onClick={() => router.back()}>
      <SvgFill icon="line-arrow-left" aria-label="뒤로 가기" color={theme.color.sub} />
    </Center>
  );
};

export default BackButton;
