import { CouponRes, MyRewardRes } from "@/types/api/response";
import { NextApiRequest, NextApiResponse } from "next/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MyRewardRes>
) {
  res.status(200).json(mockRewardsData);
}

const mockRewardsData = {
  rewards: [
    // {
    //   id: 1,
    //   rewardName: "1 free Drink",
    //   cafeName: "PYLON",
    //   createdAt: "23:09:10",
    //   usedAt: null,
    // },
    // {
    //   id: 2,
    //   rewardName: "크룽지",
    //   cafeName: "라잇카페",
    //   createdAt: "23:09:10",
    //   usedAt: null,
    // },
  ],
};
