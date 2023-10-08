import { Member } from './member';

export interface RecipeRanking {
  id: number;
  image: string | null;
  title: string;
  author: Member;
  favoriteCount: number;
}
