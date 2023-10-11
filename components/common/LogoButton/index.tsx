import { ButtonHTMLAttributes } from 'react';

import logo from '@assets/logo.svg';
import votogether from '@assets/projectName.svg';

import * as S from './style';
import Image from 'next/image';

type Content = 'icon' | 'text' | 'full';

const contentCategory: Record<Content, { name: string; url: string }> = {
  icon: {
    name: '보투게더 로고 아이콘',
    url: logo,
  },
  text: {
    name: '보투게더 아이콘',
    url: votogether,
  },
  full: {
    name: '보투게더 아이콘',
    url: '',
  },
};

interface LogoButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: Content;
}

export default function LogoButton({ content, ...rest }: LogoButtonProps) {
  const src = contentCategory[content].url;
  const ariaLabelText = contentCategory[content].name;

  if (content === 'full') {
    return (
      <S.Button content={content} aria-label={ariaLabelText} {...rest}>
        <Image width={35} height={35} src={logo} alt="로고 아이콘" />
        <Image src={votogether} alt="보투게더 아이콘" />
      </S.Button>
    );
  }

  return (
    <S.Button content={content} aria-label={ariaLabelText} {...rest}>
      <Image src={src} alt="보투게더 아이콘" />
    </S.Button>
  );
}
