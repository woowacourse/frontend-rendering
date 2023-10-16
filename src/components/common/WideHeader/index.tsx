import { PATH } from '@/constants/path';

import IconButton from '../IconButton';
import LogoButton from '../LogoButton';
import SearchBar from '../SearchBar';

import * as S from './style';
import { useRouter } from 'next/navigation';

export default function WideHeader() {
  const router = useRouter();

  const movePostListPage = () => {
    router.push('/');
  };

  const moveUserInfoPage = () => {
    router.push(PATH.USER_INFO);
  };

  const moveRankingPage = () => {
    router.push(PATH.RANKING);
  };

  return (
    <S.Container>
      <S.LogoWrapper>
        <LogoButton content='full' onClick={movePostListPage} />
      </S.LogoWrapper>
      <S.Wrapper>
        <SearchBar size='sm' />
        <IconButton category='userInfo' onClick={moveUserInfoPage} />
        <IconButton category='ranking' onClick={moveRankingPage} />
      </S.Wrapper>
    </S.Container>
  );
}
