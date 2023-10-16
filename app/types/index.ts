export type RouterPath = `/${string}`;

export interface Option {
  key: string;
  value: string;
}

export interface Customer {
  id: number;
  nickname: string;
  stampCount: number;
  maxStampCount: number;
  rewardCount: number;
  visitCount: number;
  firstVisitDate: string;
  isRegistered: boolean;
  recentVisitDate: string;
}

export interface CustomerPhoneNumber {
  id: number;
  nickname: string;
  phoneNumber: string;
}

export interface CustomerRegisterType extends CustomerPhoneNumber {
  registerType: RegisterType;
}

export type RegisterType = 'temporary' | 'register';

export interface CustomerOrderOption extends Omit<Option, 'key'> {
  key: keyof Customer;
}
