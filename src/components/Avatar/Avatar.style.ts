'use client';

import styled from 'styled-components';

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img<{
  $width?: string | number;
  $height?: string | number;
}>`
  width: ${({ $width }) => $width || '60px'};
  height: ${({ $height }) => $height || '60px'};

  border: 0.5px solid #282828;
  border-radius: 50%;

  object-fit: cover;
`;
