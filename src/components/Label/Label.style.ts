'use client';

import styled, { css } from 'styled-components';

const themeStyles = {
  RED: css`
    border: 1px solid #ffffff;

    background: #f64545;

    color: #ffffff;
  `,

  WHITE: css`
    border: 1px solid #f64545;

    color: #f64545;
  `,

  GRAY: css`
    background: #a6a6a6;

    color: white;
  `,
};

export const LabelWrapper = styled.div``;

export const Label = styled.div<{
  $colorTheme?: 'RED' | 'WHITE' | 'GRAY';
  $width?: string | number;
  $height?: string | number;
  $fontSize?: string | number;
  $fontWeight?: number;
  $mobileFontSize?: string;
}>`
  ${({ $colorTheme }) => themeStyles[$colorTheme ?? 'RED']}

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height ?? '15px'};
  border-radius: 16px;
  padding: 10px 10px;

  font-size: ${({ $fontSize }) => $fontSize || '12px'};
  font-weight: ${({ $fontWeight }) => $fontWeight || '400'};

  @media (max-width: 768px) {
    padding: 4px 6px;

    font-size: ${({ $fontSize }) => $fontSize};
  }
`;
