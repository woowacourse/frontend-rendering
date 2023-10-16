'use client';

import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  gap: 1rem;
`;

export const Status = styled.h1`
  font-size: 6rem;
  color: ${({ theme }) => theme.color.gray10};
`;

export const ErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
`;
