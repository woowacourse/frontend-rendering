import { useState } from "react";
import CouponLoading from "../../../../../assets/coupon_load_img_for_customer.png";
import styled from "@emotion/styled";
import { Coupon } from "@/types/domain/coupon";

interface CouponProps {
  coupon: Coupon;
  isFocused?: boolean;
  dataIndex: number;
  onClick?: () => void;
}

const Coupon = ({ coupon, isFocused, dataIndex, onClick }: CouponProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const checkLoadImage = () => {
    setIsImageLoaded(true);
  };

  return (
    <CouponWrapper
      $src={coupon.couponInfos[0].frontImageUrl}
      onClick={onClick}
      aria-label={coupon.cafeInfo.name}
      aria-hidden={isFocused ? "false" : "true"}
      data-index={dataIndex}
      disabled={!isFocused}
    >
      <ImageForLoading
        src={coupon.couponInfos[0].frontImageUrl}
        onLoad={checkLoadImage}
        alt={coupon.cafeInfo.name}
      />
    </CouponWrapper>
  );
};

export default Coupon;

const CouponWrapper = styled.button<{ $src: string }>`
  width: 315px;
  height: 175px;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  box-shadow: 0px -5px 10px -7px #aaa;
  border: none;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
`;

const ImageForLoading = styled.img`
  display: none;
`;
