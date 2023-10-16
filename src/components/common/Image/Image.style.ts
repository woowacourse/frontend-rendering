"use client";

import type { ImageType } from "./Image";

import { styled } from "styled-components";

export interface StyledImageProps {
  $type: ImageType;
  $size: number;
}

export const StyledImage = styled.img<StyledImageProps>`
  display: inline-flex;

  width: ${({ $type, $size }) => ($type === "wide" ? "100%" : $size + "px")};
  height: ${({ $size }) => $size + "px"};
  margin: ${({ $type }) => ($type === "wide" ? "0 auto" : "")};

  object-fit: cover;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.primary}33 7%,
    ${({ theme }) => theme.color.primary}4C 17%,
    ${({ theme }) => theme.color.primary}33 37%
  );
  background-size: 77px 77px;
  border-radius: ${({ $type }) => ($type === "circle" ? "50%" : 0)};
`;
