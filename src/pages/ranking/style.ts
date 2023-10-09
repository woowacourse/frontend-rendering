import { styled } from 'styled-components';

import { theme } from '@/styles/theme';

export const HeaderWrapper = styled.div`
  width: 100%;

  position: fixed;

  z-index: ${theme.zIndex.header};

  @media (min-width: ${theme.breakpoint.sm}) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
  margin-bottom: 20px;

  & > * {
    width: 100%;
  }

  @media (min-width: ${theme.breakpoint.sm}) {
    margin-top: 30px;
  }
`;

export const PageHeader = styled.div`
  margin: 15px;

  text-align: center;
  font: var(--text-title);
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 20px;
  padding: 0 15px;
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: fit-content;
  min-height: 500px;
  border-radius: 4px;

  background-color: var(--gray);

  padding: 15px 10px;

  @media (min-width: ${theme.breakpoint.sm}) {
    padding: 15px 15px;
  }
`;
export const Table = styled.table`
  width: 100%;

  font: var(--text-caption);
  text-align: center;

  & > :nth-child(12) {
    margin-top: 20px;
    padding: 3px 0;
    border-radius: 4px;

    background-color: var(--white);

    font-weight: 500;
  }
`;

export const Tbody = styled.tbody`
  & > :nth-child(11) {
    margin-top: 20px;
    padding: 3px 0;
    border-radius: 4px;

    background-color: var(--white);

    font-weight: 600;
  }
`;

export const Tr = styled.tr`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 1fr 1fr 1fr;
  align-items: center;
`;

export const Th = styled.th`
  padding: 10px 0;

  font: var(--text-body);
  font-weight: 600;
`;

export const RankingTd = styled.td`
  padding: 5px 0;
  height: auto;

  line-height: 0;
`;

export const Td = styled.td`
  padding: 10px 0;
`;

export const LoadingSpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  padding: 0;
`;
