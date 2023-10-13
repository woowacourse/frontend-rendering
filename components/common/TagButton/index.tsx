'use client';

import { ButtonHTMLAttributes } from 'react';

import { Size } from '@type/style';

import * as S from './style';

interface TagButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: Size;
}

export default function TagButton({ size, ...rest }: TagButtonProps) {
  const copyUrlClick = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).catch(error => {
      console.error('URL 복사 실패:', error);
    });
  };

  return (
    <S.Button onClick={copyUrlClick} $size={size} {...rest}>
      {rest.children}
    </S.Button>
  );
}
