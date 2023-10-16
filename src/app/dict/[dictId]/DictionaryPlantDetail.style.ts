'use client';

import { styled } from 'styled-components';

export const Header = styled.header`
  position: fixed;
  z-index: ${(props) => props.theme.zIndex.fixed};
  top: 0;

  display: flex;
  align-items: center;

  width: 100%;
  max-width: ${(props) => props.theme.width.pad};
  height: 48px;
  padding: 0 16px;

  background-color: ${(props) => props.theme.color.background + 'aa'};
  backdrop-filter: blur(2px);
  box-shadow: 0 2px 2px -2px ${(props) => props.theme.color.gray};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto 100px auto;
`;

export const BottomSheet = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: ${(props) => props.theme.width.pad};
  height: 80px;
  padding: 0 32px;
  padding-top: 16px;

  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    ${(props) => props.theme.color.background} 30%
  );
`;
