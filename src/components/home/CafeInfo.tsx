import styled from "@emotion/styled";
import ProgressBar from "./ProgressBar";
import { CouponRes } from "@/types/api/response";
import { Coupon } from "@/types/domain/coupon";

interface CafeInfoProps {
  coupon: Coupon;
}

const CafeInfo = ({ coupon }: CafeInfoProps) => {
  const { cafeInfo, couponInfos } = coupon;
  console.log(coupon);

  return (
    <>
      <InfoContainer>
        <NameContainer>
          <CafeName aria-label="카페 이름">{cafeInfo.name}</CafeName>
        </NameContainer>
        <ProgressBarContainer aria-label="스탬프 개수">
          <ProgressBar
            stampCount={couponInfos[0].stampCount}
            maxCount={couponInfos[0].maxStampCount}
            color={"#FBF7A3"}
          />
          <StampCount
            aria-label={`현재 스탬프 개수 ${couponInfos[0].stampCount}개`}
          >
            {couponInfos[0].stampCount}
          </StampCount>
          /
          <MaxStampCount aria-label="필요한 스탬프 개수">
            {couponInfos[0].maxStampCount}
          </MaxStampCount>
        </ProgressBarContainer>
      </InfoContainer>
    </>
  );
};

export default CafeInfo;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 30px;
  gap: 20px;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  gap: 10px;
`;

const CafeName = styled.span`
  font-size: 36px;
  font-weight: 700;
  margin-top: 5px;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  color: #888;
`;

const StampCount = styled.span`
  margin-left: 10px;
  font-size: 36px;
  font-weight: 600;
  color: black;
`;

const MaxStampCount = styled.span`
  font-size: 24px;
  color: #f3b209;
`;
