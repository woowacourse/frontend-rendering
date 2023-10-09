import Layout from '@/components/common/Layout';

// import ErrorBoundary from '@pages/ErrorBoundary';

import ToggleSwitch from '@/components/common/ToggleSwitch';

import PassionUserRanking from '@/components/ranking/PassionUser';
import PopularPost from '@/components/ranking/PopularPost';

import * as S from './style';
import { useToggleSwitch } from '@/hooks';

export default function RankingPage() {
  const { selectedButton, firstButton, secondButton } = useToggleSwitch(
    '열정 유저',
    '인기글 유저'
  );

  return (
    <Layout isSidebarVisible>
      <S.Container>
        <S.PageHeader>🏆 랭킹 🏆</S.PageHeader>
        <S.ContentContainer>
          <ToggleSwitch
            size='md'
            selectedButton={selectedButton}
            firstButton={firstButton}
            secondButton={secondButton}
          />
          {selectedButton === '열정 유저' && (
            <S.Background>
              <PassionUserRanking />
            </S.Background>
          )}
          {selectedButton === '인기글 유저' && (
            <S.Background>
              <PopularPost />
            </S.Background>
          )}
        </S.ContentContainer>
      </S.Container>
    </Layout>
  );
}
