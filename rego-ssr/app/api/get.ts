import { api } from '.';
import { PARAMS_ERROR_MESSAGE } from '../constants';
import {
  CafeIdParams,
  CustomerTypeParams,
  CustomersRes,
  QueryReq,
} from '../types/api';

export const getCustomers = async ({
  params,
}: QueryReq<CafeIdParams & CustomerTypeParams>) => {
  if (!params) throw new Error(PARAMS_ERROR_MESSAGE);

  const requestUrl = params.customerType
    ? `/admin/cafes/${params.cafeId}/customers?customer-type=${params.customerType}`
    : `/admin/cafes/${params.cafeId}/customers`;
  return await api.get<CustomersRes>(requestUrl);
};
