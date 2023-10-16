'use client';

import styled from 'styled-components';

export const RunnerPostWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  width: 100%;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;
