'use client';

import { useState } from 'react';
import Image from 'next/image';
// import Navbar from 'components/@common/Navbar';
import SearchBox from 'components/search/SearchBox';
import { LogoMessage, SearchBoxArea, SearchMessage, Wrapper, ImageArea } from './Main.style';
import useDictionaryNavigate from 'hooks/dictionaryPlant/useDictionaryPlantNavigate';
import LogoSvg from 'assets/logo.svg';

const Main = () => {
  const { goToProperDictionaryPlantPage, goToDictionaryPlantDetailPage } = useDictionaryNavigate();
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Wrapper>
        <LogoMessage>식물을 쉽게</LogoMessage>
        <ImageArea>
          <Image
            src={LogoSvg}
            alt="피움 로고. 녹색으로 '피움'이라는 글자가 적혀 있다."
            width={112}
            priority={true}
          />
        </ImageArea>
        <SearchBoxArea>
          <SearchBox
            value={searchValue}
            onChangeValue={setSearchValue}
            onEnter={goToProperDictionaryPlantPage}
            onNextClick={goToProperDictionaryPlantPage}
            onResultClick={goToDictionaryPlantDetailPage}
          />
        </SearchBoxArea>
        <SearchMessage>피움에 등록된 식물을 검색해 보세요!</SearchMessage>
      </Wrapper>
      {/* <Navbar /> */}
    </>
  );
};

export default Main;
