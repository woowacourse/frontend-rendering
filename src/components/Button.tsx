"use client";

import type { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  $variant?: 'default' | 'outlined' | 'secondary';
  $fullWidth?: boolean;
  $fullHeight?: boolean;
};

const Button = (props: ButtonProps) => {
  const { children, $variant = 'default', $fullWidth = false, $fullHeight = false, ...rest } = props;

  return (
    <Container $variant={$variant} $fullWidth={$fullWidth} $fullHeight={$fullHeight} {...rest}>
      {children}
    </Container>
  );
};

export default Button;

const Container = styled.button<ButtonProps>`
  padding: ${({ theme }) => theme.space['1.5']} ${({ theme }) => theme.space[2]};
  font-size: 16px;
  font-weight: 500;
  border-radius: 40px;
  ${({ $fullWidth }) => $fullWidth && 'width: 100%;'}
  ${({ $fullHeight }) => $fullHeight && 'height: 100%;'}
  ${({ theme, $variant }) => ({
    secondary: css`
      color: ${theme.color.white};
      background-color: ${theme.color.secondary};
      border: none;
    `,
    outlined: css`
      color: ${theme.color.gray};
      background-color: ${theme.color.white};
      border: 2px solid ${theme.color.primary};
    `,
    default: css`
      color: ${theme.color.white};
      background-color: ${theme.color.primary};
      border: none;
    `,
  }[$variant || 'default'])}
`;
