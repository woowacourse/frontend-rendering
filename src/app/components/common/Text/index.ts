'use client';

import { ReactNode } from 'react';
import { styled } from 'styled-components';

import theme from '@/styles/theme';
import { colorThemeKey } from '@/styles/color';
import { fontSizeThemeKey } from '@/styles/fontSize';
import { fontWeightThemeKey } from '@/styles/fontWeight';

export interface TextProps {
  color: colorThemeKey;
  $fontSize: fontSizeThemeKey;
  $fontWeight: fontWeightThemeKey;
  $textAlign?: string;
  children?: ReactNode;
}

const Text = styled.span<TextProps>`
  display: block;
  line-height: 160%;
  color: ${({ color }) => theme.color[color]};
  font-size: ${({ $fontSize }) => theme.fontSize[$fontSize]};
  font-weight: ${({ $fontWeight }) => theme.fontWeight[$fontWeight]};
  text-align: ${({ $textAlign }) => $textAlign};
  white-space: pre-wrap;
`;

export default Text;
