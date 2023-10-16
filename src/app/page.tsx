import SearchArea from "@/components/search/SearchArea/SearchArea";
import {
  LogoMessage,
  SearchMessage,
  Wrapper,
  Image,
  ImageArea,
} from "./page.style";

const RootPage = () => {
  return (
    <>
      <Wrapper>
        <LogoMessage>식물을 쉽게</LogoMessage>
        <ImageArea>
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />
            <Image
              src="/logo.svg"
              alt="피움 로고. 녹색으로 '피움'이라는 글자가 적혀 있다."
            />
          </picture>
        </ImageArea>
        <SearchArea />
        <SearchMessage>피움에 등록된 식물을 검색해 보세요!</SearchMessage>
      </Wrapper>
      {/* <Navbar /> */}
    </>
  );
};

export default RootPage;
