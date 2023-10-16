import { CustomerProfileRes } from "@/types/api/response";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CustomerProfileRes>
) {
  res.status(200).json(mockProfileData);
}

const mockProfileData = {
  profile: {
    id: 1,
    nickname: "라잇",
    phoneNumber: "01011111111",
    email: null,
  },
};
