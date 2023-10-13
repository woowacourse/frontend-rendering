"use client";

import styled, { css } from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button<{
  $colorTheme: "RED" | "WHITE" | "GRAY" | "BLACK";
  $width?: string | number;
  $height?: string | number;
  $fontSize?: string | number;
  $fontWeight?: number;
  $disabled?: boolean;
}>`
  ${({ $colorTheme }) => themeStyles[$colorTheme]}

  width: ${({ $width }) => $width || "180px"};
  height: ${({ $height }) => $height || "40px"};

  padding: 5px 0;

  font-size: ${({ $fontSize }) => $fontSize || "18px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "400"};

  &:disabled {
    ${() => themeStyles["GRAY"]}
  }

  @media (max-width: 768px) {
    width: ${({ $width }) => $width || "180px"};
  }
`;

export const themeStyles = {
  RED: css`
    background: var(--baton-red);
    border-radius: 6px;

    color: #ffffff;
  `,

  WHITE: css`
    background: #ffffff;
    border: 1px solid var(--baton-red);
    border-radius: 6px;

    color: var(--baton-red);
  `,

  GRAY: css`
    background: #ffffff;
    border: 1px solid var(--gray-500);
    border-radius: 6px;

    color: var(--gray-400);
  `,

  BLACK: css`
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 6px;

    color: #000000;
  `,
};
