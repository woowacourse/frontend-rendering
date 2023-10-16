import { GENRES } from '@/app/_song/_constants/constants';

export type Song = {
  id: number;
  title: string;
  singer: string;
  albumCoverUrl: string;
  totalLikeCount: number;
  genre: Genre;
};

export type VotingSong = {
  id: number;
  title: string;
  singer: string;
  videoLength: number;
  albumCoverUrl: string;
};

export type Genre = keyof typeof GENRES;
