'use client';

import { styled } from 'styled-components';
import Space from '../components/common/Space';

export const Wrapper = styled.nav`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 52px;
  cursor: pointer;
`;

export const IconSpace = styled(Space)`
  display: 'block';
`;
