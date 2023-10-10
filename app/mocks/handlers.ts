import { rest } from 'msw';

const customers = [
  {
    id: 1,
    nickname: '레오',
    stampCount: 3,
    rewardCount: 12,
    visitCount: 30,
    maxStampCount: 10,
    firstVisitDate: '2023:01:01',
    isRegistered: true,
    recentVisitDate: '2023:01:01',
  },
  {
    id: 2,
    nickname: '윤생',
    stampCount: 5,
    rewardCount: 1,
    visitCount: 3,
    maxStampCount: 10,
    firstVisitDate: '2023:04:07',
    isRegistered: false,
    recentVisitDate: '2023:08:09',
  },
];

const customerList = [...customers];

export const handlers = [
  // 카페 사장이 고객 목록 조회 가능
  rest.get(
    'http://localhost:3000/api/admin/cafes/1/customers',
    (req, res, ctx) => {
      const registerTypeParam = req.url.searchParams.get('customer-type');

      const registeredCustomers = customers.filter(
        (customer) => customer.isRegistered
      );
      const temporaryCustomers = customers.filter(
        (customer) => !customer.isRegistered
      );

      if (registerTypeParam === 'register') {
        return res(
          ctx.status(200),
          ctx.json({ customers: registeredCustomers })
        );
      }

      if (registerTypeParam === 'temporary') {
        return res(
          ctx.status(200),
          ctx.json({ customers: temporaryCustomers })
        );
      }

      return res(ctx.status(200), ctx.json({ customers: customerList }));
    }
  ),
];
