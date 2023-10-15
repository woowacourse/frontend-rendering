'use client';

import { styled } from 'styled-components';
import logo from '@/assets/img/logo.png';
import Image from 'next/image';
import theme from '@/shared/styles/theme';

const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt='logo' aria-hidden='true' width={180} />
      <LoginButton>로그인</LoginButton>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  z-index: 1000;
  top: 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${theme.headerHeight.desktop};
  padding: 0 12.33%;

  background-color: ${theme.color.black};

  @media (max-width: ${theme.breakPoints.xxl}) {
    padding: 0 8.33%;
  }

  @media (max-width: ${theme.breakPoints.md}) {
    padding: 0 4.16%;
  }

  @media (max-width: ${theme.breakPoints.xs}) {
    height: ${theme.headerHeight.mobile};
    padding: 0 16px;
  }

  @media (max-width: ${theme.breakPoints.xxs}) {
    height: ${theme.headerHeight.xxs};
  }
`;

const Logo = styled(Image)`
  aspect-ratio: 128 / 29;
  width: 180px;

  @media (max-width: ${theme.breakPoints.md}) {
    width: 140px;
  }

  @media (max-width: ${theme.breakPoints.xxs}) {
    width: 120px;
  }
`;

const LoginButton = styled.button`
  padding: 4px 8px;
  color: ${theme.color.primary};
  border: 1px solid ${theme.color.primary};
  border-radius: 8px;
`;
