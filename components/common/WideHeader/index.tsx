import IconButton from '../IconButton';
import LogoButton from '../LogoButton';
import SearchBar from '../SearchBar';

import * as S from './style';

export default function WideHeader() {
  return (
    <S.Container>
      <S.LogoWrapper>
        <LogoButton content="full" />
      </S.LogoWrapper>
      <S.Wrapper>
        <SearchBar size="sm" />
        <IconButton category="userInfo" />
        <IconButton category="ranking" />
      </S.Wrapper>
    </S.Container>
  );
}
