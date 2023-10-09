'use client';

import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;
  justify-content: center;

  min-width: ${({ theme }) => theme.width.mobile};
  max-width: ${({ theme }) => theme.width.pad};
  height: 100%;
  margin: 0 auto;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  align-items: center;

  width: 334px;

  text-align: center;
`;

export const Title = styled.h1`
  font: ${({ theme }) => theme.font.title};
`;

export const Text = styled.p`
  font: ${({ theme }) => theme.font.subTitle};
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 130px;
  height: 40px;

  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.background};

  background-color: ${({ theme }) => theme.color.sub};
  border-radius: 5px;
`;
