import * as S from '../components/index.styled';
import Button from '../components/common/Button/Button';
import IntroCardPile from '../components/IntroCardPile/IntroCardPile';
import Text from '../components/common/Text/Text';
import Image from 'next/image';
import Layout from '../src/app/layout';

const LandingPage = () => {
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
          <Button type="button" variant="plain" css={S.googleLoginButton}>
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
