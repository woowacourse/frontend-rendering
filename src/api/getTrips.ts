const PROD = process.env.NODE_ENV === 'production';
const END_POINT = PROD ? '' : 'http://localhost:3000';

export const getTrips = async () => {
  const res = await fetch(`http://localhost:3000/api/trips`);

  if (!res.ok) {
    throw new Error('요청에 실패했습니다.');
  }

  return res.json();
};
