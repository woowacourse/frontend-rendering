"use client";

import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img<{
  $width?: string | number;
  $height?: string | number;
  $isPointer: boolean;
}>`
  width: ${({ $width }) => $width || "50"};
  height: ${({ $height }) => $height || "50px"};

  border: 0.5px solid var(--gray-800);
  border-radius: 50%;

  object-fit: cover;

  cursor: ${({ $isPointer }) => ($isPointer ? "pointer" : "")};

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;

    font-size: 10px;
  }
`;
