import { CouponRes } from "@/types/api/response";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CouponRes>
) {
  res.status(200).json(customerCoupons);
}

const customerCoupons = {
  coupons: [
    {
      cafeInfo: {
        id: 1,
        name: "깃짱카페",
        isFavorites: true,
      },
      couponInfos: [
        {
          id: 1,
          status: "ACCUMULATING",
          stampCount: 1,
          maxStampCount: 8,
          rewardName: "아메리카노",
          frontImageUrl:
            "https://drive.google.com/uc?export=view&id=1_3XRlwig5m846bBUzUv-VqcOxN1PTyPY",
          backImageUrl:
            "https://wemix-dev-s3.s3.amazonaws.com/media/sample/%EC%BF%A0%ED%8F%B0(%EB%AA%85%ED%95%A8)/2019/NC236B.jpg",
          stampImageUrl:
            "https://blog.kakaocdn.net/dn/Idhl1/btqDj3EXl1n/Q8AkpYkKmc3wkAyXJZX3g0/img.png",
          coordinates: [
            {
              order: 1,
              xCoordinate: 20,
              yCoordinate: 35,
            },
            {
              order: 2,
              xCoordinate: 70,
              yCoordinate: 35,
            },
          ],
        },
      ],
    },
    {
      cafeInfo: {
        id: 2,
        name: "하디카페",
        isFavorites: true,
      },
      couponInfos: [
        {
          id: 2,
          status: "ACCUMULATING",
          stampCount: 3,
          maxStampCount: 8,
          rewardName: "아메리카노",
          frontImageUrl:
            "https://drive.google.com/uc?export=view&id=1hdTvv_yBFdpyDpJWrNMMy9JlBKVNNy7D",
          backImageUrl:
            "https://wemix-dev-s3.s3.amazonaws.com/media/sample/%EC%BF%A0%ED%8F%B0(%EB%AA%85%ED%95%A8)/2019/NC241B.jpg",
          stampImageUrl:
            "https://w7.pngwing.com/pngs/608/604/png-transparent-rubber-stamp-free-miscellaneous-freight-transport-text.png",
          coordinates: [
            {
              order: 1,
              xCoordinate: 2,
              yCoordinate: 5,
            },
            {
              order: 2,
              xCoordinate: 5,
              yCoordinate: 5,
            },
          ],
        },
      ],
    },
    {
      cafeInfo: {
        id: 3,
        name: "제나카페",
        isFavorites: true,
      },
      couponInfos: [
        {
          id: 3,

          status: "ACCUMULATING",
          stampCount: 7,
          maxStampCount: 8,
          rewardName: "아메리카노",
          frontImageUrl:
            "https://drive.google.com/uc?export=view&id=1Rn4Gb2vE5eKnPL8SrLwlbv1jgGzy6AWE",
          backImageUrl:
            "https://wemix-dev-s3.s3.amazonaws.com/media/sample/%EC%BF%A0%ED%8F%B0(%EB%AA%85%ED%95%A8)/2019/NC240B.jpg",
          stampImageUrl:
            "https://w7.pngwing.com/pngs/608/604/png-transparent-rubber-stamp-free-miscellaneous-freight-transport-text.png",
          coordinates: [
            {
              order: 1,
              xCoordinate: 2,
              yCoordinate: 5,
            },
            {
              order: 2,
              xCoordinate: 5,
              yCoordinate: 5,
            },
          ],
        },
      ],
    },

    {
      cafeInfo: {
        id: 5,
        name: "라잇카페",
        isFavorites: true,
      },
      couponInfos: [
        {
          id: 5,

          status: "ACCUMULATING",
          stampCount: 3,
          maxStampCount: 8,
          rewardName: "아메리카노",
          frontImageUrl:
            "https://drive.google.com/uc?export=view&id=1Jm0UYUrbkXWLhP6GxrXTTWzcI-zREWyF",
          backImageUrl:
            "https://wemix-dev-s3.s3.amazonaws.com/media/sample/%EC%BF%A0%ED%8F%B0(%EB%AA%85%ED%95%A8)/2019/NC236B.jpg",
          stampImageUrl:
            "https://blog.kakaocdn.net/dn/Idhl1/btqDj3EXl1n/Q8AkpYkKmc3wkAyXJZX3g0/img.png",
          coordinates: [
            {
              order: 1,
              xCoordinate: 2,
              yCoordinate: 5,
            },
            {
              order: 2,
              xCoordinate: 5,
              yCoordinate: 5,
            },
          ],
        },
      ],
    },
    {
      cafeInfo: {
        id: 6,
        name: "윤생카페",
        isFavorites: true,
      },
      couponInfos: [
        {
          id: 6,
          status: "ACCUMULATING",
          stampCount: 3,
          maxStampCount: 8,
          rewardName: "아메리카노",
          frontImageUrl:
            "https://drive.google.com/uc?export=view&id=1ngMdF1isvQlhsZfBI0VNp5VMsGQZ9cgb",
          backImageUrl: "https://source.unsplash.com/random",
          stampImageUrl: "https://source.unsplash.com/random",
          coordinates: [
            {
              order: 1,
              xCoordinate: 2,
              yCoordinate: 5,
            },
            {
              order: 2,
              xCoordinate: 5,
              yCoordinate: 5,
            },
          ],
        },
      ],
    },
    {
      cafeInfo: {
        id: 7,
        name: "레오카페",
        isFavorites: true,
      },
      couponInfos: [
        {
          id: 7,

          status: "ACCUMULATING",
          stampCount: 3,
          maxStampCount: 8,
          rewardName: "아메리카노",
          frontImageUrl:
            "https://drive.google.com/uc?export=view&id=1J6HcagcK65D6_i0bDQ7llbvdCnCOkJ7h",
          backImageUrl: "https://source.unsplash.com/random",
          stampImageUrl: "https://source.unsplash.com/random",
          coordinates: [
            {
              order: 1,
              xCoordinate: 35,
              yCoordinate: 45,
            },
            {
              order: 2,
              xCoordinate: 80,
              yCoordinate: 40,
            },
            {
              order: 3,
              xCoordinate: 130,
              yCoordinate: 45,
            },
          ],
        },
      ],
    },
  ],
};
