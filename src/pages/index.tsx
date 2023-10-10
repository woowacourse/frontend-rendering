import Header from "@/common/Header";
import { getCoupons } from "./api/get";
import { useQuery } from "@tanstack/react-query";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import Coupon from "@/components/home/Coupon";
import CafeInfo from "@/components/home/CafeInfo";

export default function Home() {
  const { data: coupons, status: couponStatus } = useQuery({
    queryKey: ["coupons"],
    queryFn: getCoupons,
    select: (data) => data.coupons,
  });

  if (couponStatus === "error") {
    return <>에러가 발생했습니다.</>;
  }

  if (!coupons) return <>보유하고 있는 쿠폰이 없습니다.</>;

  return (
    <>
      <Header />
      <CafeInfo
        cafeInfo={coupons[0].cafeInfo}
        couponInfo={coupons[0].couponInfos[0]}
      />
      <CouponsContainer>
        {coupons.map(({ cafeInfo, couponInfos }, index) => (
          <Coupon
            key={cafeInfo.id}
            coupon={{ cafeInfo, couponInfos }}
            dataIndex={index}
            aria-label={`${cafeInfo.name} 쿠폰`}
          />
        ))}
      </CouponsContainer>
    </>
  );
}

const CouponsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
`;
