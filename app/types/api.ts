import { Customer, RegisterType } from '.';

export interface CustomersRes {
  customers: Customer[];
}

export interface CustomerTypeParams {
  customerType?: RegisterType;
}

export interface CafeIdParams {
  cafeId: number;
}

/** react-query request query 추상화 타입 */
export interface QueryReq<K = unknown> {
  params?: K;
}
