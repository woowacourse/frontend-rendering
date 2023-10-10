import {
  QueryReq,
  PhoneNumberParams,
  CafeIdParams,
  UsedParams,
} from "@/types/api/request";
import {
  CouponRes,
  CafeInfoRes,
  MyRewardRes,
  StampHistoryRes,
  CustomerProfileRes,
  CustomerRegisterTypeRes,
} from "@/types/api/response";
import { api, customerHeader } from ".";

const PARAMS_ERROR_MESSAGE = "[ERROR] params를 지정해주세요.";

// 고객모드 api
export const getCoupons = async () => {
  return await api.get<CouponRes>("/coupons", customerHeader());
};

export const getCafeInfo = async ({ params }: QueryReq<CafeIdParams>) => {
  if (!params) throw new Error(PARAMS_ERROR_MESSAGE);
  return await api.get<CafeInfoRes>(
    `/cafes/${params.cafeId}`,
    customerHeader()
  );
};

export const getMyRewards = async ({ params }: QueryReq<UsedParams>) => {
  if (!params) throw new Error(PARAMS_ERROR_MESSAGE);
  return await api.get<MyRewardRes>(
    `/rewards?used=${params.used}`,
    customerHeader()
  );
};

export const getStampHistories = async () => {
  return await api.get<StampHistoryRes>("/stamp-histories", customerHeader());
};

export const getCustomerProfile = async () => {
  return await api.get<CustomerProfileRes>("/profiles", customerHeader());
};

export const getCustomerRegisterType = async ({
  params,
}: QueryReq<PhoneNumberParams>) => {
  if (!params) throw new Error(PARAMS_ERROR_MESSAGE);
  return await api.get<CustomerRegisterTypeRes>(
    `/profiles/search?phone-number=${params.phoneNumber}`,
    customerHeader()
  );
};
