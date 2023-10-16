import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.body;
  console.log(req.body);

  if (token === 'LOGIN_TOKEN') {
    return res.status(200).json({
      serverTime: new Date(),
      isSuccess: true,
    });
  }

  return res.status(401).json({
    serverTime: new Date(),
    isSuccess: false,
  });
};

export default handler;
