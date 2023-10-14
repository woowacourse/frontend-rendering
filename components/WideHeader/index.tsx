import IconButton from "../IconButton";
import LogoButton from "../LogoButton";
import SearchBar from "../SearchBar";

import * as S from "./style";

const WideHeader = () => {
  const movePostListPage = () => {
    alert("현재 지원하지 않는 기능입니다.");
  };

  const moveUserInfoPage = () => {
    alert("현재 지원하지 않는 기능입니다.");
  };

  const moveRankingPage = () => {
    alert("현재 지원하지 않는 기능입니다.");
  };

  return (
    <S.Container>
      <S.LogoWrapper>
        <LogoButton content="full" onClick={movePostListPage} />
      </S.LogoWrapper>
      <S.Wrapper>
        <SearchBar size="sm" />
        <IconButton category="userInfo" onClick={moveUserInfoPage} />
        <IconButton category="ranking" onClick={moveRankingPage} />
      </S.Wrapper>
    </S.Container>
  );
};

export default WideHeader;
