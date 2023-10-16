import { Coupon as CouponType } from "@/types/domain/coupon";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

interface CouponsProps {
  coupons: CouponType[];
}

const Coupons = ({ coupons }: CouponsProps) => {
  return (
    <CouponsContainer>
      {coupons.map(({ couponInfos }) => (
        <Coupon key={couponInfos[0].id} $src={couponInfos[0].frontImageUrl} />
      ))}
    </CouponsContainer>
  );
};

export default Coupons;

const CouponsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  margin-top: 100px;

  :nth-last-child(1) {
    transform: translateY(15px) scale(1.05);
    cursor: pointer;
  }

  :nth-last-child(2) {
    transform: translateY(0px) scale(1);
    pointer-events: none;
  }
  :nth-last-child(3) {
    transform: translateY(-15px) scale(0.95);
    pointer-events: none;
  }
  :nth-last-child(n + 4) {
    transform: translateY(-30px) scale(0.9);
    pointer-events: none;
  }
`;

const Coupon = styled.button<{ $src: string }>`
  width: 315px;
  height: 175px;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  box-shadow: 0px -5px 10px -7px #aaa;
  border: none;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  position: absolute;
  top: 60%;
`;
