import Image from 'next/image';
// import { BlurBackgroundIcon, DonggleIcon } from '@/assets/icons';
import LoginModal from '@/components/Modal/LoginModal/LoginModal';
import { AbsoluteDiv, Container, Content, Header, Introduce, Logo } from './styles';
import { DonggleIcon } from '@/assets/icons';

export default function Page() {
  // const { authToken } = useAuthToken();
  // const { isOpen, openModal, closeModal } = useModal();

  // if (authToken) return <Navigate to={`${PATH.space}`} />;

  return (
    <Container>
      <Header>
        <Logo>
          <Image src="icons/donggle-logo.svg" alt="동글로고" width={20} height={20} />
          동글
        </Logo>
        {/* <LoginModalButton onClick={openModal}>로그인하기</LoginModalButton>
        <LoginModal isOpen={isOpen} closeModal={closeModal} /> */}
      </Header>
      <Content>
        <Introduce>
          <AbsoluteDiv>{/* <BlurBackgroundIcon /> */}</AbsoluteDiv>
          <h1>
            동글에서 블로그 글을
            <br /> 간편하게 포스팅 하세요
          </h1>
          <p>블로그 포스팅뿐만 아니라 글 관리까지 한 번에</p>
          {/* <LoginModalButtonLarge onClick={openModal}>동글 시작하기</LoginModalButtonLarge> */}
          {/* <picture>
            <source
              type="image/avif"
              style={{ width: '600px' }}
              srcSet={`${donggleExampleAvif}, ${donggleExampleAvif2X} 2x`}
            />
            <source
              type="image/webp"
              style={{ width: '600px' }}
              srcSet={`${donggleExampleWebp}, ${donggleExampleWebp2X} 2x`}
            />
            <img
              src={donggleExamplePng}
              style={{ width: '600px' }}
              srcSet={`${donggleExamplePng}, ${donggleExamplePng2X} 2x`}
            />
          </picture> */}
        </Introduce>
      </Content>
    </Container>
  );
}
