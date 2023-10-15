import { Genre } from '@/songs/genreConstants';

export interface Song {
  id: number;
  title: string;
  singer: string;
  albumCoverUrl: string;
  totalLikeCount: number;
  genre: Genre;
}

export interface VotingSong {
  id: number;
  title: string;
  singer: string;
  videoLength: number;
  albumCoverUrl: string;
}

export interface SongDetail {
  id: number;
  title: string;
  singer: string;
  videoLength: number;
  songVideoId: string;
  albumCoverUrl: string;
  killingParts: KillingPart[];
}

export interface KillingPart {
  id: number;
  rank: number;
  start: number;
  end: number;
  voteCount: number;
  likeCount: number;
  partVideoUrl: string;
  partLength: number;
  likeStatus: boolean;
}
