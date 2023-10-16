import { CouponRes } from '@/types/coupon';
import { NextApiRequest, NextApiResponse } from 'next';

const coupons: CouponRes = {
  coupons: [
    {
      cafeInfo: {
        id: 50,
        name: '이윤성카페_test',
        isFavorites: false,
      },
      couponInfos: [
        {
          id: 107526,
          status: 'ACCUMULATING',
          stampCount: 3,
          maxStampCount: 10,
          rewardName: '아메리카노 1잔',
          frontImageUrl:
            'https://dnv0gl9rzyzod.cloudfront.net/prod/basic_coupon_front_image.jpg',
          backImageUrl:
            'https://dnv0gl9rzyzod.cloudfront.net/prod/2023-08-17-08-29-33-133005.png',
          stampImageUrl:
            'https://dnv0gl9rzyzod.cloudfront.net/prod/2023-08-17-08-54-58-672655.png',
          coordinates: [
            {
              order: 1,
              xCoordinate: 37,
              yCoordinate: 50,
            },
            {
              order: 2,
              xCoordinate: 86,
              yCoordinate: 50,
            },
            {
              order: 3,
              xCoordinate: 134,
              yCoordinate: 50,
            },
            {
              order: 4,
              xCoordinate: 182,
              yCoordinate: 50,
            },
            {
              order: 5,
              xCoordinate: 233,
              yCoordinate: 50,
            },
            {
              order: 6,
              xCoordinate: 37,
              yCoordinate: 100,
            },
            {
              order: 7,
              xCoordinate: 86,
              yCoordinate: 100,
            },
            {
              order: 8,
              xCoordinate: 134,
              yCoordinate: 100,
            },
            {
              order: 9,
              xCoordinate: 182,
              yCoordinate: 100,
            },
            {
              order: 10,
              xCoordinate: 233,
              yCoordinate: 100,
            },
          ],
        },
      ],
    },
  ],
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CouponRes>
) {
  res.status(200).json(coupons);
}
