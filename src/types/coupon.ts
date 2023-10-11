export interface Coupon {
  cafeInfo: {
    id: number;
    name: string;
    isFavorites: boolean;
  };
  couponInfos: CouponInfo[];
}

export interface CouponInfo extends CouponDesign {
  id: number;
  status: string;
  stampCount: number;
  maxStampCount: number;
  rewardName: string;
}

export interface CouponDesign {
  frontImageUrl: string;
  backImageUrl: string;
  stampImageUrl: string;
  coordinates: StampCoordinate[];
}

export interface StampCoordinate extends Coordinate {
  order: number;
}

export interface Coordinate {
  xCoordinate: number;
  yCoordinate: number;
}

export interface CouponRes {
  coupons: Coupon[];
}
