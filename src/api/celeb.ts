import { Celeb } from '@/@types/api.types';

export const getCelebs = async (): Promise<Celeb[]> => {
  const res = await fetch(`${process.env.BASE_URL}/celebs`);

  return res.json();
};
