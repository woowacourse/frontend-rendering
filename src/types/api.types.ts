export type Oauth = 'google' | 'kakao' | 'naver';

export interface ProfileData {
  memberId: number;
  nickname: string;
  profileImageUrl: string;
  oauthServer: Oauth;
}

export interface RestaurantData {
  lat: number;
  lng: number;
  id: number;
  name: string;
  category: string;
  roadAddress: string;
  phoneNumber: string | null;
  naverMapUrl: string;
  viewCount: number;
  distance: number;
  isLiked: boolean;
  likeCount: number;
  rating: number;
  celebs: {
    id: number;
    name: string;
    youtubeChannelName: string;
    profileImageUrl: string;
  }[];
  images: { id: number; name: string; author: string; sns: string }[];
}
