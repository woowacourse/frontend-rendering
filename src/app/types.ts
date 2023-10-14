import { RECOMMENDED_REGION, RESTAURANT_CATEGORY } from "@/constants";

export type Region = keyof typeof RECOMMENDED_REGION;

export interface RestaurantData {
  lat: number;
  lng: number;
  id: number;
  name: string;
  category: string;
  roadAddress: string;
  phoneNumber: string;
  naverMapUrl: string;
  viewCount: number;
  distance: number;
  isLiked: boolean;
  likeCount: number;
  celebs: {
    id: number;
    name: string;
    youtubeChannelName: string;
    profileImageUrl: string;
  }[];
  images: { id: number; name: string; author: string; sns: string }[];
}

export type Restaurant = Omit<RestaurantData, "celebs">;

type Celebs = RestaurantData["celebs"];

export type Celeb = Celebs[number];

type RestaurantImages = RestaurantData["images"];

export type RestaurantImage = RestaurantImages[number];

export type RestaurantCategory = (typeof RESTAURANT_CATEGORY)[number]["label"];
