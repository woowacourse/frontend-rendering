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

  return (
    <>
      <SubHeader title="내 리워드" />
      <RewardContainer>
        {rewards.map((reward) => (
          <RewardWrapper key={reward.id}>
            <CafeName>{reward.cafeName}</CafeName>
            <RewardName>{reward.rewardName}</RewardName>
          </RewardWrapper>
        ))}
      </RewardContainer>
    </>
  );
}

const RewardContainer = styled.li`
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
  color: gray;
  text-align: center;
  margin: auto;
  line-height: 24px;
`;
