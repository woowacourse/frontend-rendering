'use client';

import LoginModal from 'components/Modal/LoginModal/LoginModal';
import {
  AbsoluteDiv,
  Container,
  Content,
  Header,
  Introduce,
  LoginModalButton,
  LoginModalButtonLarge,
  Logo,
} from './styles';
import { useModal } from 'hooks/@common/useModal';
import { DonggleIcon } from 'assets/icons';

export default function Page() {
  // const { authToken } = useAuthToken();
  const { isOpen, openModal, closeModal } = useModal();

  // if (authToken) return <Navigate to={`${PATH.space}`} />;

  return (
    <Container>
      <Header>
        <Logo>
          <DonggleIcon width={20} height={20} />
          동글
        </Logo>
        <LoginModalButton onClick={openModal}>로그인하기</LoginModalButton>
        <LoginModal isOpen={isOpen} closeModal={closeModal} />
      </Header>
      <Content>
        <Introduce>
          <AbsoluteDiv>{/* <BlurBackgroundIcon /> */}</AbsoluteDiv>
          <h1>
            동글에서 블로그 글을
            <br /> 간편하게 포스팅 하세요
          </h1>
          <p>블로그 포스팅뿐만 아니라 글 관리까지 한 번에</p>
          <LoginModalButtonLarge onClick={openModal}>동글 시작하기</LoginModalButtonLarge>
          <Image
            className="centerImage"
            src="/donggle-example-webp-2x.webp"
            alt="소개 페이지 사진"
            width={600}
            height={333}
          />
        </Introduce>
      </Content>
    </Container>
  );
}
