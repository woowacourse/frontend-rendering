import { useState } from 'react';
import { Inter } from 'next/font/google';

import { Customer, Option } from '@/app/types';
import {
  Container,
  CustomerContainer,
  EmptyCustomers,
  RegisterTypeTab,
  TabContainer,
} from './admin/style';
import Text from '@/components/Text';
import { CustomerOrderOption } from '@/components/CustomerList/hooks/useGetCustomers';
import SelectBox from '@/components/SelectBox';
import Customers from '@/components/CustomerList/Customers';

const inter = Inter({ subsets: ['latin'] });

const CUSTOMERS_ORDER_OPTIONS: CustomerOrderOption[] = [
  {
    key: 'stampCount',
    value: '스탬프순',
  },
  {
    key: 'rewardCount',
    value: '리워드순',
  },
  {
    key: 'visitCount',
    value: '방문횟수순',
  },
  { key: 'recentVisitDate', value: '최근방문순' },
];

const REGISTER_TYPE_OPTION: Option[] = [
  { key: 'all', value: '전체' },
  { key: 'register', value: '회원' },
  { key: 'temporary', value: '임시' },
];

type Props = {
  customers: Customer[];
};

export default function Home({ customers }: Props) {
  const [registerType, setRegisterType] = useState<Option>({
    key: 'all',
    value: '전체',
  });
  const [orderOption, setOrderOption] = useState({
    key: 'stampCount',
    value: '스탬프순',
  });
  const registerTypeKey = registerType.key === 'all' ? null : registerType.key;

  const changeRegisterType = (registerType: Option) => () => {
    setRegisterType(registerType);
  };

  return (
    <CustomerContainer>
      <Text variant="pageTitle">내 고객 목록</Text>
      <Container>
        <TabContainer>
          {REGISTER_TYPE_OPTION.map((option) => (
            <RegisterTypeTab
              key={option.key}
              $isSelected={registerType.key === option.key}
              onClick={changeRegisterType(option)}
            >
              {option.value}
            </RegisterTypeTab>
          ))}
        </TabContainer>
        <SelectBox
          options={CUSTOMERS_ORDER_OPTIONS}
          checkedOption={orderOption}
          setCheckedOption={setOrderOption}
        />
      </Container>
      {customers.length === 0 ? (
        <EmptyCustomers>
          <span>NO RESULT 🥲</span> 아직 고객이 없어요! <br />
          카페를 방문한 고객에게 스탬프를 적립해 보세요.
        </EmptyCustomers>
      ) : (
        <Customers registerTypeOption={registerType} customers={customers} />
      )}
    </CustomerContainer>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/customers');
  const customers = await res.json();

  return {
    props: {
      customers,
    },
  };
}
