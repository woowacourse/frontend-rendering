import { RestaurantData } from '@/@types/api.types';

export const getPopularRestaurants = async (): Promise<RestaurantData[]> => {
  const res = await fetch('http://localhost:9999/popular');

  return res.json();
};
