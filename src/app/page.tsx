import Image from 'next/image';
import NavBar from 'components/@common/NavBar';
import DictionarySearchBox from 'components/dictionaryPlant/DictionarySearchBox/DictionarySearchBox';
import { LogoMessage, SearchBoxArea, SearchMessage, Wrapper, ImageArea } from './Main.style';
import LogoSvg from 'assets/logo.svg';

const Main = () => {
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
          <DictionarySearchBox />
        </SearchBoxArea>
        <SearchMessage>피움에 등록된 식물을 검색해 보세요!</SearchMessage>
      </Wrapper>
      <NavBar />
    </>
  );
};

export default Main;
