'use client';

import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const TitleWrapper = styled.header`
  margin: 72px 0 53px 0;

  @media (max-width: 768px) {
    margin: 40px 0 40px 0;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const ControlPanelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  margin-bottom: 36px;

  @media (max-width: 768px) {
    align-items: start;
    flex-direction: column;

    gap: 18px;
  }

  @media (max-height: 768px) {
    margin-bottom: 24px;
  }
`;

export const LeftSideContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;
`;

export const RightSideContainer = styled.div`
  align-self: flex-end;
`;

export const SearchInput = styled.input`
  width: 263px;
  height: 40px;
  padding: 10px 10px;

  font-size: 14px;

  border-radius: 6px;
  border: 1px solid var(--gray-500);
`;

export const SearchLabel = styled.label`
  margin-bottom: 12px;

  font-size: 18px;
`;

export const TagContainer = styled.div`
  display: flex;

  margin-bottom: 3px;
  gap: 10px;
`;

export const MoreButtonWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    min-width: 340px;
  }
`;

export const RunnerPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
