import { useState } from 'react';
import styled from './Coupon.module.css';
import Image from 'next/image';
import { Coupon as CouponType } from '@/types/coupon';

interface CouponProps {
  coupon: CouponType;
  isFocused: boolean;
  dataIndex: number;
  onClick: () => void;
}

const Coupon = ({ coupon, isFocused, dataIndex, onClick }: CouponProps) => {
  const imageLoadStyle = {
    backgroundImage: coupon.couponInfos[0].frontImageUrl,
  };

  return (
    <button
      style={imageLoadStyle}
      className={styled.couponWrapper}
      onClick={onClick}
      aria-label={coupon.cafeInfo.name}
      aria-hidden={isFocused ? 'false' : 'true'}
      data-index={dataIndex}
      disabled={!isFocused}
    >
      <Image
        src={coupon.couponInfos[0].frontImageUrl}
        alt={coupon.cafeInfo.name}
        width={330}
        height={183}
        unoptimized={true}
      />
    </button>
  );
};

export default Coupon;
