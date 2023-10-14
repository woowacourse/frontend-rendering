import { Member } from './member';

export interface RecipeRanking {
  id: number;
  image: string | null;
  title: string;
  author: Member;
  favoriteCount: number;
}

export interface ProductRanking {
  id: number;
  name: string;
  image: string | null;
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
