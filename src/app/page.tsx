import NavBar from 'components/@common/NavBar';
import DictionarySearchBox from 'components/dictionaryPlant/DictionarySearchBox/DictionarySearchBox';
import { LogoMessage, SearchBoxArea, SearchMessage, Wrapper, ImageArea } from './Main.style';
import Logo from 'assets/logo.svg';

const Main = () => {
  return (
    <>
      <Wrapper>
        <LogoMessage>식물을 쉽게</LogoMessage>
        <ImageArea>
          <Logo width={112} height={101} />
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
