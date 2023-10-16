import * as S from '../components/LandingPage.styled';
import Button from '../components/common/Button/Button';
import IntroCardPile from '../components/IntroCardPile/IntroCardPile';
import Text from '../components/common/Text/Text';
import Image from 'next/image';
import Layout from '../src/app/layout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const LandingPage = () => {
  const router = useRouter();
  /**
   * 이 부분의 token 초깃값을 자유롭게 바꾸어 보세요.
   * "LOGIN_TOKEN" 이 값이 아닐 경우 로그인이 진행되지 않습니다.
   */
  const [token, setToken] = useState('LOGIN_TOKEN');

  useEffect(() => {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })
      .then((response) => response.json())
      .then((data) => {
        const resultMessage = data.isSuccess
          ? '로그인 상태입니다. 팀 개설 페이지로 이동합니다.'
          : '로그인 상태가 아니거나 토큰 값이 올바르지 않습니다. 리다이렉트가 진행되지 않으며 랜딩 페이지를 보여줍니다.';
        alert(`결과: ${resultMessage}\n응답: ${JSON.stringify(data)}`);

        if (data.isSuccess) {
          router.push('/start');
        }
      });
  }, [router, token]);

  return (
    <Layout>
      <S.MainContainer>
        <S.Main>
          <Text as="h2" css={S.mainPrefix}>
            쉽고 간단한 팀플 플랫폼,
          </Text>
          <Text as="h2" css={S.mainTitle}>
            짭바팀
          </Text>
          <S.LoreTextContainer>
            <Text as="p" css={S.mainLore}>
              팀 프로젝트의 모든 것을
            </Text>
            <Text as="p" css={S.mainLore}>
              짭바팀으로 관리해보세요.
            </Text>
          </S.LoreTextContainer>
          <Button
            type="button"
            variant="plain"
            css={S.googleLoginButton}
            onClick={() => setToken('token')}
          >
            <S.GoogleLoginButtonAppearance>
              <Image
                src="/images/google-logo.png"
                width={25}
                height={26}
                alt=""
              />
              <Text as="p" css={S.googleLoginText}>
                Google 계정으로 로그인하기
              </Text>
            </S.GoogleLoginButtonAppearance>
          </Button>
        </S.Main>
      </S.MainContainer>
      <IntroCardPile />
    </Layout>
  );
};

export default LandingPage;
