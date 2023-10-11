import Header from "@/common/Header";
import CafeInfo from "@/components/home/CafeInfo";
import Coupons from "@/components/home/Coupons";
import { API_BASE_URL } from "@/constants";
import { CouponRes } from "@/types/api/response";

export async function getServerSideProps() {
  const res = await fetch(`${API_BASE_URL}/coupons`, {
    cache: "no-store",
  });
  const data = await res.json();

  return { props: { data } };
}

interface HomeProps {
  data: CouponRes;
}

export default function Home({ data }: HomeProps) {
  const { coupons } = data;

  return (
    <>
      <Header />
      {/** 카페 id 0값으로 하드코딩되어 있음 */}
      <CafeInfo coupon={coupons[0]} />
      <Coupons coupons={coupons} />
    </>
  );
}
