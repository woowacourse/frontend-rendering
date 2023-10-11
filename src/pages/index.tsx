import Header from "@/common/Header";
import CafeInfo from "@/components/home/CafeInfo";
import Coupons from "@/components/home/Coupons";
import { API_BASE_URL } from "@/constants";
import { CouponRes } from "@/types/api/response";
import { useState } from "react";

export async function getServerSideProps() {
  const res = await fetch(`${API_BASE_URL}/coupons`, {
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

  const { coupons } = data;

  const swapCoupon = () => {};

  return (
    <>
      <Header />
      <CafeInfo coupon={coupons[currentIndex]} />
      <Coupons coupons={coupons} />
    </>
  );
}
