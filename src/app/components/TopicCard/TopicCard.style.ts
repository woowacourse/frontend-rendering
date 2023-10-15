'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.li`
  width: 332px;
  height: 140px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: ${({ theme }) => theme.radius.small};
`;
