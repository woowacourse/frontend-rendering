export interface RestaurantListData {
  content: RestaurantData[];
  currentElementsCount: number;
  currentPage: number;
  pageSize: number;
  totalElementsCount: number;
  totalPage: number;
}

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

type Celebs = RestaurantData['celebs'];

export type Celeb = Celebs[number];
