import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import styled from "@emotion/styled";
import ProgressBar from "./ProgressBar";
import { Coupon, CouponInfo } from "@/types/domain/coupon";

interface CafeInfoProps {
  cafeInfo: Coupon;
  couponInfo: CouponInfo;
}

const CafeInfo = ({ cafeInfo: { cafeInfo }, couponInfo }: CafeInfoProps) => {
  const { name: cafeName, isFavorites } = cafeInfo;
  const { stampCount, maxStampCount } = couponInfo;

  return (
    <>
      <InfoContainer>
        <NameContainer>
          <CafeName aria-label="카페 이름">{cafeName}</CafeName>
          {isFavorites ? (
            <AiFillStar
              size={40}
              color={"#FFD600"}
              onClick={() => alert("해제")}
              aria-label="즐겨찾기 해제"
              role="button"
            />
          ) : (
            <AiOutlineStar
              size={40}
              color={"#FFD600"}
              onClick={() => alert("등록")}
              aria-label="즐겨찾기 등록"
              role="button"
            />
          )}
        </NameContainer>
        <ProgressBarContainer aria-label="스탬프 개수">
          <BackDrop $couponMainColor={"gray"} />
          <ProgressBar
            stampCount={stampCount}
            maxCount={maxStampCount}
            color={"blue"}
          />
          <StampCount aria-label={`현재 스탬프 개수 ${stampCount}개`}>
            {stampCount}
          </StampCount>
          /
          <MaxStampCount aria-label="필요한 스탬프 개수">
            {maxStampCount}
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

const BackDrop = styled.div<{ $couponMainColor: string }>`
  z-index: -10;
  width: 100%;
  max-width: 450px;
  overflow: hidden;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(
    white,
    rgba(255, 255, 255, 0.5) 32%,
    ${({ $couponMainColor }) => $couponMainColor} 80%,
    white
  );
  opacity: 0.7;
  left: 50%;
  transform: translateX(-50%);
`;
