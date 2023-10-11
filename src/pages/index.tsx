import Header from "@/common/Header";
import CafeInfo from "@/components/home/CafeInfo";
import Coupons from "@/components/home/Coupons";
import { CouponRes } from "@/types/api/response";
import { Coupon } from "@/types/domain/coupon";
import { useState } from "react";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/coupons", {
    cache: "no-store",
  });
  const data: CouponRes = await res.json();

  return { props: { data } };
}
interface HomeProps {
  data: CouponRes;
}

export default function Home({ data }: HomeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const currentCoupon;
  // console.log(coupons[currentIndex]);
  console.log(data.coupons);

  const { coupons } = data;

  return (
    <>
      <Header />
      <CafeInfo coupon={coupons[currentIndex]} />
      <Coupons coupons={coupons} />
    </>
  );
}
