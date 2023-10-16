'use client';

import Spinner from 'components/@common/Spinner/Spinner';
import { useEffect } from 'react';
import { useLoginOauth } from './useLoginOauth';
import { S } from './styles';

const OauthPage = () => {
  const { loginOauth } = useLoginOauth();

  useEffect(loginOauth, []);

  return (
    <S.SpinnerContainer>
      <Spinner size={48} thickness={6} />
      <p>로그인 중입니다...</p>
    </S.SpinnerContainer>
  );
};

export default OauthPage;
