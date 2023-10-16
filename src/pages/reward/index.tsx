import SubHeader from "@/common/SubHeader";
import { API_BASE_URL } from "@/constants";
import { MyRewardRes } from "@/types/api/response";
import styled from "@emotion/styled";
import React from "react";

export async function getServerSideProps() {
  const res = await fetch(`${API_BASE_URL}/rewards?used=true`, {
    cache: "no-store",
  });
  const data = await res.json();

  return { props: { data } };
}

interface HomeProps {
  data: MyRewardRes;
}

export default function RewardPage({ data }: HomeProps) {
  const { rewards } = data;

  if (rewards.length === 0)
    return (
      <>
        <SubHeader title="내 리워드" />
        <EmptyList>
          보유한 리워드가 없어요 🥲 <br /> 스탬프를 차곡차곡 쌓아 리워드를
          받아보세요!
        </EmptyList>
      </>
    );

  return (
    <>
      <SubHeader title="내 리워드" />
      <RewardsContainer>
        {rewards.map((reward) => (
          <RewardWrapper key={reward.id}>
            <CafeName>{reward.cafeName}</CafeName>
            <RewardName>{reward.rewardName}</RewardName>
          </RewardWrapper>
        ))}
      </RewardsContainer>
    </>
  );
}

const RewardsContainer = styled.li`
  list-style-type: none;
`;

const RewardWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  border-bottom: 1px solid #eee;
  padding: 0 25px;

  cursor: pointer;
`;

const CafeName = styled.span`
  font-weight: 500;
`;

const RewardName = styled.span`
  max-width: 100px;

  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  color: "black";
`;

const EmptyList = styled.p`
  margin-top: 100px;
  line-height: 24px;
  color: gray;
  text-align: center;
`;
