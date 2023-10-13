import Space from './components/common/Space';
import TopicCardContainer from './components/TopicCardContainer';
import Box from './components/common/Box';
import Logo from './components/Logo';
import { Fragment } from 'react';
import Navbar from './Navbar';
import * as S from './page.style';

function Home() {
  return (
    <Fragment>
      <S.HeaderWrapper>
        <Box>
          <Logo />
          <Space size={2} />
        </Box>
      </S.HeaderWrapper>

      <S.TopicContainerWrapper>
        <Space size={1} />
        <TopicCardContainer
          containerTitle="인기 급상승할 지도?"
          containerDescription="즐겨찾기가 많이 된 지도를 확인해보세요."
        />
        <Space size={9} />

        <TopicCardContainer
          containerTitle="새로울 지도?"
          containerDescription="방금 핀이 추가된 지도를 확인해보세요."
        />

        <Space size={9} />

        <TopicCardContainer
          containerTitle="모두일 지도?"
          containerDescription="괜찮을지도의 모든 지도를 확인해보세요."
        />

        <Space size={5} />
      </S.TopicContainerWrapper>

      <S.NavbarWrapper>
        <Navbar />
      </S.NavbarWrapper>
    </Fragment>
  );
}

export default Home;
