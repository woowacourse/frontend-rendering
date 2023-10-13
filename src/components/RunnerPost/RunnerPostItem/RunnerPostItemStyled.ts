"use client";

import styled from "styled-components";

export const RunnerPostItemContainer = styled.li`
  display: flex;
  justify-content: space-between;

  min-width: 340px;
  width: 100%;
  height: max-content;
  padding: 35px 40px;

  border: 0.5px solid var(--gray-500);
  border-radius: 12px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);

  cursor: pointer;

  &:hover {
    transition: all 0.3s ease;
    transform: scale(1.015);
    outline: 1.5px solid var(--baton-red);
  }

  @media (max-width: 768px) {
    padding: 25px 30px;
  }
`;

export const PostTitle = styled.p`
  margin-bottom: 15px;

  font-size: 28px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const DeadLineContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

export const DeadLine = styled.p`
  margin-bottom: 60px;

  color: var(--gray-600);

  @media (max-width: 768px) {
    margin-bottom: 40px;

    font-size: 12px;
  }
`;

export const TagContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Tag = styled.span`
  margin-right: 10px;

  font-size: 14px;
  color: var(--gray-600);
`;

export const LeftSideContainer = styled.div``;

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  margin-bottom: 30px;
  gap: 10px;
`;

export const ProfileName = styled.p`
  min-width: 50px;

  font-size: 14px;
  text-align: center;

  @media (max-width: 768px) {
    min-width: 30px;

    font-size: 12px;
  }
`;

export const ChatViewContainer = styled.div`
  display: flex;

  gap: 10px;

  font-size: 12px;
`;

export const statisticsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  margin-bottom: auto;

  & > p {
    color: #a4a4a4;
  }

  @media (max-width: 768px) {
    gap: 2px;
  }
`;

export const statisticsImage = styled.img`
  width: 21px;
  height: 20px;

  margin-left: 8px;

  @media (max-width: 768px) {
    width: 16px;
    height: 15px;
  }
`;

export const statisticsText = styled.p`
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
