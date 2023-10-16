import { fetchApi } from './fetch';

interface Member {
  nickname: string;
  profileImage: string;
}

export interface ReviewRanking {
  reviewId: number;
  productId: number;
  productName: string;
  content: string;
  rating: number;
  favoriteCount: number;
  categoryType: string;
}

export interface ReviewRankingResponse {
  reviews: ReviewRanking[];
}

export const fetchReviewRanking = () => {
  return fetchApi<ReviewRankingResponse>('/ranks/reviews', {
    method: 'GET',
    cache: 'no-store',
  });
};
