'use client';

import styled from 'styled-components';

export const RunnerPostContainer = styled.div`
  width: 100%;
  height: 100%;

  margin: 72px 0 53px 0;

  background-color: white;

  @media (max-width: 768px) {
    margin: 40px 0 30px 0;
  }
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
`;
export const PostDeadlineContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 20px 0;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 90%;
  margin: 0 auto;
`;

export const PostHeaderContainer = styled.div`
  width: 100%;
`;

export const EditLinkContainer = styled.div<{ $isOwner: boolean }>`
  visibility: ${({ $isOwner }) => ($isOwner ? 'visible' : 'hidden')};

  margin-left: auto;

  font-size: 20px;
  font-weight: bold;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const EditLink = styled.a`
  font-size: 16px;
  color: var(--gray-500);
`;

export const PostTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    & > div {
      margin-left: auto;
    }
  }
`;

export const PostTitle = styled.h1`
  font-size: 38px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const PostDeadline = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: var(--gray-600);
`;

export const PostBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  width: 100%;

  margin-bottom: 20px;
  padding: 40px 10px 40px 0;
  border-bottom: 1px solid #9d9d9d;
`;

export const GuideContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;

  margin-bottom: 50px;
`;

export const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  cursor: pointer;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-flow: column;
  gap: 5px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Job = styled.p`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const statisticsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  margin-bottom: auto;

  & > p {
    color: #a4a4a4;
  }
`;

export const statisticsImage = styled.img`
  width: 20px;
`;

export const statisticsText = styled.p`
  margin-right: 10px;

  font-size: 14px;
`;

export const Contents = styled.div`
  min-height: 400px;

  font-size: 18px;
  line-height: 200%;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

export const BottomContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  margin-bottom: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: start;

    gap: 8px;
  }
`;

export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    flex: 1;
    gap: 12px;

    margin-top: 20px;
  }
`;

export const GoToGitHub = styled.p``;

export const PostFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Anchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
