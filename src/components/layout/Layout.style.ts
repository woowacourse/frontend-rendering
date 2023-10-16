'use client';

import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 30px;
`;

export const ChildrenWrapper = styled.article<{ $maxWidth?: string }>`
  max-width: ${({ $maxWidth }) => $maxWidth || '1200px'};
  width: 100%;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;
