import Image from 'next/image';
import { StyledLink, Section, Text, Title, Wrapper } from './not-found.style';
import { URL_PATH } from 'constants/index';
import SadPiumiImagePng from 'assets/sadpiumi.png';

const NotFound = () => {
  return (
    <Wrapper>
      <Image
        width={250}
        height={160}
        src={SadPiumiImagePng}
        alt="슬픈 표정을 하는 피우미"
        priority
      />
      <Section>
        <Text>이런!</Text>
        <Title>페이지를 찾지 못했어요</Title>
      </Section>
      <Section>
        <Text>주소가 올바른지 확인해 보세요</Text>
        <Text>잠시 후에 다시 시도해 주세요</Text>
      </Section>
      <StyledLink href={URL_PATH.main}>메인 화면으로</StyledLink>
    </Wrapper>
  );
};

export default NotFound;
