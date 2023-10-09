import { Celeb } from '@/@types/api.types';

export const getCelebs = async (): Promise<Celeb[]> => {
  const res = await fetch('http://localhost:9999/celebs');

  return res.json();
};
