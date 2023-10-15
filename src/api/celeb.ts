import { Celeb } from '@/@types/api.types';

export const getCelebs = async (): Promise<Celeb[]> => {
  const res = await fetch(`${process.env.BASE_URL}/celebs`, {
    next: { revalidate: 604800 },
  });

  return res.json();
};
