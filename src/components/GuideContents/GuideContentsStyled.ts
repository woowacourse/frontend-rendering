"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 5px 10px;
`;

export const GuideButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 26px;
  padding: 0 10px;
  border: 1px solid var(--baton-red);
  border-radius: 12px;

  background-color: transparent;

  color: var(--baton-red);
  font-size: 14px;

  cursor: pointer;

  @media (max-width: 768px) {
    width: 45px;
    height: 23px;

    font-size: 12px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

export const Title = styled.div`
  position: relative;

  margin-left: 10px;

  font-size: 20px;
  font-weight: 700;

  &::before {
    position: absolute;
    content: "";

    bottom: 2.5px;
    left: -18px;
    height: 100%;
    width: 4.5px;
    border-radius: 2px;

    background-color: var(--baton-red);
  }

  @media (max-width: 768px) {
    font-size: 18px;

    height: 20px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const RequiredIcon = styled.div`
  display: flex;
  justify-content: center;

  color: var(--baton-red);
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;

  width: 100%;
  border: var(--gray-500) 1px solid;
  border-radius: 10px;

  overflow: hidden;
`;

export const Contents = styled.div`
  flex: 1;

  border: transparent 1px solid;

  line-height: 2;
  font-size: 18px;

  white-space: pre-line;

  overflow: hidden;

  &::placeholder {
    font-size: 18px;
  }

  &:focus {
    outline: 0;
  }

  @media (max-width: 768px) {
    font-size: 16px;

    &::placeholder {
      font-size: 16px;
    }
  }
`;

export const InputConfig = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 8px 10px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
`;

export const InputTextLength = styled.div<{ $isError: boolean }>`
  display: flex;
  flex-direction: column;

  font-size: 14px;
  color: ${({ $isError }) => ($isError ? "red" : "var(--gray-400)")};
`;

export const Empty = styled.div`
  width: 1px;
`;
