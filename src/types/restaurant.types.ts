import type { RestaurantData } from './api.types';

export type Restaurant = Omit<RestaurantData, 'celebs'>;

type RestaurantImages = RestaurantData['images'];

export type RestaurantImage = RestaurantImages[number];
