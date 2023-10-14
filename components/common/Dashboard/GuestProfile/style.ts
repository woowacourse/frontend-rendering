'use client';

import { styled } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 130px;
  padding: 16px 12px;
  border-radius: 4px;

  font: var(--text-body);

  background-color: var(--gray);
`;

export const Image = styled.img`
  width: 183px;
  height: 40px;
`;

export const TextCard = styled.span`
  margin-top: 20px;

  font: var(--text-caption);

  color: var(--dark-gray);
`;
