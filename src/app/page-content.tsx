'use client';
import { styled } from 'styled-components';

import Space from './components/common/Space';
import TopicCardContainer from './components/TopicCardContainer';
import Box from './components/common/Box';
import Logo from './components/Logo';
import { Fragment } from 'react';
import { Topic } from '@/types/Topic';
import Navbar from './Navbar';

export interface PageContentProps {
  topics: Topic[];
  newestTopics: Topic[];
  bestTopics: Topic[];
}

function PageContent({ topics, newestTopics, bestTopics }: PageContentProps) {
  return (
    <Fragment>
      <HeaderWrapper>
        <Box>
          <Logo />
          <Space size={2} />
        </Box>
      </HeaderWrapper>

      <TopicContainerWrapper>
        <Space size={1} />
        <Space size={1} />
        <TopicCardContainer
          topics={bestTopics}
          containerTitle="인기 급상승할 지도?"
          containerDescription="즐겨찾기가 많이 된 지도를 확인해보세요."
        />
        <Space size={9} />

        <TopicCardContainer
          topics={newestTopics}
          containerTitle="새로울 지도?"
          containerDescription="방금 핀이 추가된 지도를 확인해보세요."
        />

        <Space size={9} />

        <TopicCardContainer
          topics={topics}
          containerTitle="모두일 지도?"
          containerDescription="괜찮을지도의 모든 지도를 확인해보세요."
        />

        <Space size={5} />
      </TopicContainerWrapper>

      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
    </Fragment>
  );
}

const HeaderWrapper = styled.section`
  width: 100%;
  position: fixed;
  padding: 12px 20px 0 20px;
  background-color: white;

  z-index: 1;
`;

const TopicContainerWrapper = styled.article`
  width: 1036px;
  margin: 0 auto;
  position: relative;
  padding-top: 50px;

  @media (max-width: 1076px) {
    width: 684px;
  }

  @media (max-width: 724px) {
    width: 332px;
  }
`;

const NavbarWrapper = styled.section`
  width: 100%;
  position: fixed;
  bottom: 0;

  padding: 12px 20px 0 20px;
  background-color: white;

  z-index: 1;
`;

export default PageContent;
