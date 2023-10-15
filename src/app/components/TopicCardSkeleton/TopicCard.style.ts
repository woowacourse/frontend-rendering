'use client';

import { keyframes, styled } from 'styled-components';

export const skeletonAnimation = keyframes`
    from {
    opacity: 0.1;
    }
    to {
    opacity: 1;
    }
`;

export const SkeletonImg = styled.div`
  width: 138px;
  height: 138px;

  border-radius: 8px;

  background: ${({ theme }) => theme.color.lightGray};
  animation: ${skeletonAnimation} 1s infinite;
`;

export const SkeletonTitle = styled.div`
  width: 172px;
  height: 32px;

  border-radius: 8px;

  background: ${({ theme }) => theme.color.lightGray};
  animation: ${skeletonAnimation} 1s infinite;
`;

export const SkeletonDescription = styled(SkeletonTitle)`
  height: 80px;
`;
