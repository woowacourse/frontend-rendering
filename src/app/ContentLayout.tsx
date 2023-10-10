'use client';

import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Header from './Header';
import theme from '@/shared/styles/theme';

const ContentLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};

export default ContentLayout;

const LayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  padding: 0 12.33%;

  color: ${theme.color.white};

  background-color: ${theme.color.black};

  @media (max-width: ${theme.breakPoints.xxl}) {
    padding: 0 8.33%;
  }

  @media (max-width: ${theme.breakPoints.md}) {
    padding: 0 4.16%;
  }

  @media (max-width: ${theme.breakPoints.xxs}) {
    padding: 0 16px;
  }
`;
