import { RestaurantData, RestaurantListData } from '@/@types/api.types';

export const getPopularRestaurants = async (): Promise<RestaurantData[]> => {
  const res = await fetch(`${process.env.BASE_URL}/main-page/recommendation`);

  return res.json();
};

export const getRestaurantsByAddress = async (
  codes: number[]
): Promise<RestaurantListData> => {
  const res = await fetch(
    `${process.env.BASE_URL}/main-page/region?codes=${codes.join(',')}&page=0`
  );
  return res.json();
};

export const getRestaurantsByCeleb = async (
  celebId: number
): Promise<RestaurantListData> => {
  const res = await fetch(
    `${process.env.BASE_URL}/restaurants?lowLatitude=32&highLatitude=40&lowLongitude=120&highLongitude=132&celebId=${celebId}`
  );

  return res.json();
};

export const getRestaurantsByCategory = async (
  category: string
): Promise<RestaurantListData> => {
  const res = await fetch(
    `${process.env.BASE_URL}/restaurants?lowLatitude=32&highLatitude=40&lowLongitude=120&highLongitude=132&category=${category}`
  );

  return res.json();
};
