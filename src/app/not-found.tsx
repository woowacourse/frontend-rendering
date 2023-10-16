'use client';

import { useRouter } from 'next/navigation';

import SquareButton from '@/components/common/SquareButton';

import * as S from '../styles/404style';

export default function NotFound() {
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.Title>404</S.Title>
      <S.Description>요청하신 페이지를 찾을 수 없어요.</S.Description>
      <S.ButtonWrapper>
        <SquareButton
          theme='fill'
          onClick={() => {
            router.push('/');
          }}
        >
          홈으로 가기
        </SquareButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
