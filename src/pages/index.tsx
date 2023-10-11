import Header from '@/components/Header/Header';
import Head from 'next/head';
import styled from '@/styles/index.module.css';
import HomeTemplate from '@/components/HomeTemplate/HomeTemplate';
import Coupon from '@/components/Coupon/Coupon';
import { CouponRes } from '@/types/coupon';
import useCouponDetail from '@/hooks/useCouponDetail';
import useCouponList from '@/hooks/useCouponList';
import { useEffect, useRef } from 'react';
import CafeInfo from '@/components/CafeInfo/CafeInfo';
import { isNotEmptyArray } from '@/lib';

interface HomeProps {
  data: CouponRes;
}
export default function Home({ data }: HomeProps) {
  const couponListContainerRef = useRef<HTMLDivElement>(null);
  const {
    isDetail,
    isFlippedCouponShown,
    openCouponDetail,
    closeCouponDetail,
  } = useCouponDetail();

  const {
    isLast,
    currentIndex,
    setCurrentIndex,
    onTouchStart,
    onTouchEnd,
    onTouchMove,
  } = useCouponList(couponListContainerRef, isDetail, data?.coupons!);

  useEffect(() => {
    if (data?.coupons && isNotEmptyArray(data.coupons)) {
      setCurrentIndex(data.coupons.length - 1);
    }
  }, [data]);

  if (data?.coupons.length === 0) {
    return (
      <main className={styled.mainLayout}>
        <HomeTemplate>보유하고 있는 쿠폰이 없습니다.</HomeTemplate>
      </main>
    );
  }

  const openAlert = () => {};

  const currentCoupon = data.coupons[currentIndex];
  const [currentCouponInfo] = currentCoupon.couponInfos;

  const detailStyle = {
    'nth-last-child(n)': isDetail && {
      display: 'none',
    },
  };

  const listChildStyle = {
    'nth-last-child(1)': {
      zIndex: `${isFlippedCouponShown ? '-1' : '3'}`,
      transform: 'translateY(15px) scale(1.05)',
      animation: 'none',
      transition: 'transform 0.4s',
      cursor: 'pointer',
    },
  };

  return (
    <>
      <Head>
        <title>Stamp Crush</title>
      </Head>
      <div
        // style={{ ...detailStyle, ...listChildStyle }}
        className={styled.baseCustomerTemplate}
      >
        <main className={styled.mainLayout}>
          <Header />
          <CafeInfo
            cafeInfo={currentCoupon}
            couponInfo={currentCouponInfo}
            onClickStar={openAlert}
          />
          <div className={styled.couponListContainer}>
            {data?.coupons.map(({ cafeInfo, couponInfos }, index) => (
              <Coupon
                key={cafeInfo.id}
                coupon={{ cafeInfo, couponInfos }}
                dataIndex={index}
                onClick={openCouponDetail}
                aria-label={`${cafeInfo.name} 쿠폰`}
                isFocused={currentIndex === index}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/api/coupons`);
  const body = await res.json();

  return {
    props: {
      data: body,
    },
  };
}
