import { CityData } from '@/types/trip';

export const getCities = async (): Promise<CityData[]> => {
  const res = await fetch('https://api.hanglog.com/cities');
  console.log(res);
  if (!res.ok) {
    throw new Error('요청에 실패했습니다.');
  }

  return res.json();
};
