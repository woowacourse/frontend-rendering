import Text from '../../components/common/Text/Text';
import * as S from '../../components/StartPage.styled';
import Button from '../../components/common/Button/Button';
import IntroCardPile from '../../components/IntroCardPile/IntroCardPile';
import BackButton from '../../components/common/BackButton/BackButton';
import Layout from '../../src/app/layout';

const StartPage = () => {
  return (
    <Layout>
      <S.MainContainer>
        <S.InnerContainer>
          <S.ButtonContainer>
            <Text as="p" weight="semiBold" css={S.explainText}>
              우리 팀만의 공간이 필요하신가요?
            </Text>
            <Button
              variant="primary"
              css={S.startTeamButton()}
              aria-label="팀 개설하기"
              disabled
            >
              팀 개설하기
            </Button>
          </S.ButtonContainer>
          <S.ButtonContainer>
            <Text as="p" weight="semiBold" css={S.explainText}>
              초대코드가 있으신가요?
            </Text>
            <Button
              variant="normal"
              css={S.startTeamButton('normal')}
              aria-label="팀 참가하기"
              disabled
            >
              팀 참가하기
            </Button>
          </S.ButtonContainer>
          <BackButton label="이전 페이지로 이동" />
        </S.InnerContainer>
      </S.MainContainer>
      <IntroCardPile animation={false} />
    </Layout>
  );
};

export default StartPage;
